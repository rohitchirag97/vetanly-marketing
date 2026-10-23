import { CONTACT_EMAIL } from "@/app/site-config";

/**
 * Business details shown on the contact page and quoted by the privacy policy, terms and refund policy.
 * Fill them in before launch (payment gateways check them), and update `updated` whenever a policy changes.
 * Email and WhatsApp come from NEXT_PUBLIC_CONTACT_EMAIL / NEXT_PUBLIC_CONTACT_WHATSAPP in the root .env.
 */
export const LEGAL = {
  /** Registered name of the business that runs Vetanly, e.g. "Vetanly Technologies Private Limited". */
  entity: "Vetanly Technologies",
  /** Registered office address, e.g. "Office 12, Example Business Park, Ahmedabad, Gujarat 380015, India". Shown with a map when set. */
  address:
    "37, Bajrang Soc., Near Aeristro villa Soc., Karamsad, Anand, Gujarat 388325, India",
  /** Support phone number as people should dial it, e.g. "+91 98765 43210". Falls back to the WhatsApp number. */
  phone: "+91 7069021206",
  /** When the phone is answered, e.g. "Monday to Saturday, 10 am to 7 pm IST". */
  hours: "Monday to Saturday, 10 am to 7 pm IST",
  /** Grievance Officer under India's DPDP Act. Defaults to the contact email. */
  grievanceEmail: CONTACT_EMAIL,
  updated: "23 October 2026",
};

/**
 * Vetanly's public social profiles: full URLs, empty when there is none. They are listed for search engines
 * (Organization "sameAs"), and the X handle labels link previews shared on X.
 */
export const SOCIAL = {
  x: "https://twitter.com/vetanlyOfficial",
  /** X handle with @, e.g. "@vetanly". */
  xHandle: "@vetanlyOfficial",
  linkedin: "https://www.linkedin.com/company/vetanly-technologies",
  instagram: "https://www.instagram.com/vetanlyOfficial",
  facebook: "https://www.facebook.com/vetanlyOfficial",
  youtube: "https://www.youtube.com/@vetanlyOfficial",
};
