import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vetanly: Face Recognition Attendance, HR & Payroll",
    short_name: "Vetanly",
    description: "Face-recognition attendance, shifts, leave and Indian payroll in one place.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#5938E8",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
