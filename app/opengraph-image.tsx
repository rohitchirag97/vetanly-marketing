import { OG_SIZE, ogCard } from "@/app/og-card";

export const alt = "Vetanly: face recognition attendance, HR and payroll";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "Face recognition attendance",
    title: "Attendance that sees",
    accent: "who actually showed up.",
    footer: "Face kiosks · GPS check-in · Shifts · Leave · Indian payroll",
  });
}
