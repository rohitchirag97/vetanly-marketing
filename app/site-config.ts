const normalizeOrigin = (value: string | undefined) => {
  if (!value?.trim()) return undefined;
  try {
    return new URL(value.trim()).origin;
  } catch {
    return undefined;
  }
};

export const SITE_ORIGIN = normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL);
export const APPLICATION_ORIGIN =
  normalizeOrigin(process.env.NEXT_PUBLIC_APP_URL) ?? "http://localhost:5173";

export const LOGIN_URL = `${APPLICATION_ORIGIN}/login`;

/** Shown on the contact page and footer only when set. */
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null;
/** WhatsApp number with country code, digits only, e.g. 919876543210. */
export const CONTACT_WHATSAPP = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP?.replace(/\D/g, "") || null;
