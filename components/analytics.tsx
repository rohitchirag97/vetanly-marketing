"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";

import { APPLICATION_ORIGIN } from "@/app/site-config";

/**
 * Google Analytics, loaded only after the visitor accepts analytics cookies. Until then nothing from Google
 * loads and no cookie is set. The choice is kept in this browser; "Cookie settings" in the footer reopens it.
 */
type Consent = "granted" | "denied" | null;

const KEY = "vetanly-analytics-consent";
const OPEN_EVENT = "vetanly:cookie-settings";
const CHANGE_EVENT = "vetanly:consent-change";

const read = (): Consent => {
  try {
    const value = localStorage.getItem(KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return "denied"; // Storage blocked: treat as declined rather than ask on every page.
  }
};

const subscribe = (onChange: () => void) => {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
};

const save = (consent: Exclude<Consent, null>) => {
  const before = read();
  try {
    localStorage.setItem(KEY, consent);
  } catch {
    // Without storage the choice lasts for this page only.
  }
  if (before === "granted" && consent === "denied") {
    // Remove the cookies Analytics already set, then reload so its script is gone too.
    for (const cookie of document.cookie.split(";")) {
      const name = cookie.split("=")[0].trim();
      if (name.startsWith("_ga")) {
        for (const domain of ["", `; domain=${location.hostname}`, `; domain=.${location.hostname.replace(/^www\./, "")}`]) {
          document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
        }
      }
    }
    location.reload();
    return;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
};

/** Lets visitors change their choice later, from the footer. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}

export function Analytics({ gaId }: { gaId: string }) {
  // Server render and first paint: no choice known, so nothing shows until the browser has read it.
  const consent = useSyncExternalStore(subscribe, read, () => "denied" as Consent);
  const [reopened, setReopened] = useState(false);
  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);
  // Conversions: every trial and sign-in button links to the app, and contact links leave the site, so one listener covers them.
  useEffect(() => {
    if (consent !== "granted") return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      if (!link) return;
      const name = link.href.startsWith(APPLICATION_ORIGIN) ? "app_click" : /^(mailto:|tel:|https:\/\/wa\.me\/)/.test(link.href) ? "contact_click" : null;
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (name && gtag) gtag("event", name, { link_text: link.textContent?.trim(), link_url: link.href });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);
  const choose = (choice: Exclude<Consent, null>) => {
    setReopened(false);
    save(choice);
  };
  const showBanner = consent === null || reopened;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-config" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());gtag('config',${JSON.stringify(gaId)});`}
          </Script>
        </>
      )}
      {showBanner && (
        <div role="dialog" aria-live="polite" aria-label="Cookie choices" className="fixed inset-x-3 bottom-3 z-(--z-toast) mx-auto max-w-2xl entry p-5 sm:inset-x-6 sm:bottom-6">
          <p className="text-sm leading-6 text-ink-2">
            We would like to use Google Analytics cookies to understand how visitors use this site. They are off unless you accept.
            See our <Link href="/privacy#cookies" className="link">privacy policy</Link>.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => choose("granted")} className="btn btn--primary btn--sm">
              Accept
            </button>
            <button type="button" onClick={() => choose("denied")} className="btn btn--sm">
              Reject
            </button>
          </div>
        </div>
      )}
    </>
  );
}
