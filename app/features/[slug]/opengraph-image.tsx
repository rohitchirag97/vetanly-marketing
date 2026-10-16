import { OG_SIZE, ogCard } from "@/app/og-card";
import { FEATURES, featureBySlug } from "@/content/features";

export const alt = "Vetanly feature";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return FEATURES.filter((feature) => feature.slug !== "face-recognition-attendance").map((feature) => ({ slug: feature.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const feature = featureBySlug((await params).slug);
  return ogCard({
    eyebrow: feature?.name ?? "Vetanly",
    title: feature?.headline ?? "Attendance, HR and payroll",
    footer: "Face attendance, HR and Indian payroll · vetanly",
  });
}
