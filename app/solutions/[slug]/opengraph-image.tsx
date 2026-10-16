import { OG_SIZE, ogCard } from "@/app/og-card";
import { SOLUTIONS, solutionBySlug } from "@/content/features";

export const alt = "Vetanly solution";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const solution = solutionBySlug((await params).slug);
  return ogCard({
    eyebrow: solution ? `Vetanly for ${solution.name}` : "Vetanly",
    title: solution?.headline ?? "Attendance, HR and payroll",
    footer: "Face attendance, HR and Indian payroll · vetanly",
  });
}
