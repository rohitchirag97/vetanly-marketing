import { ImageResponse } from "next/og";

export const alt = "HazriPro — people operations, in rhythm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", position: "relative", overflow: "hidden", background: "#18181B", color: "#F8FAFC", padding: "68px 76px", flexDirection: "column", justifyContent: "space-between", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#60A5FA", fontSize: 26, fontWeight: 700, letterSpacing: -1 }}>
          <div style={{ display: "flex", width: 42, height: 42, borderRadius: 14, background: "#3B82F6", color: "#FFFFFF", alignItems: "center", justifyContent: "center", fontSize: 25 }}>H</div>
          hazripro
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
          <div style={{ display: "flex", color: "#60A5FA", fontSize: 18, letterSpacing: 4, fontWeight: 700, marginBottom: 20 }}>PEOPLE OPERATIONS, IN RHYTHM</div>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05, fontWeight: 700, letterSpacing: -3 }}>From clock-in to payslip,</div>
          <div style={{ display: "flex", color: "#60A5FA", fontSize: 72, lineHeight: 1.05, fontWeight: 700, letterSpacing: -3 }}>keep everyone in step.</div>
          <div style={{ display: "flex", color: "#A1A1AA", fontSize: 24, marginTop: 26 }}>Attendance / Leave / Employee records / Payroll</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 20, color: "#60A5FA" }}><span>HAZRIPRO</span><span style={{ display: "flex", width: 44, height: 1, background: "#3B82F6" }} /><span style={{ color: "#A1A1AA" }}>One connected workspace for your team</span></div>
        <div style={{ display: "flex", position: "absolute", width: 500, height: 500, border: "1px solid rgba(59,130,246,.16)", borderRadius: 999, right: -160, top: -190 }} />
        <div style={{ display: "flex", position: "absolute", width: 310, height: 310, border: "1px solid rgba(59,130,246,.18)", borderRadius: 999, right: -68, top: -95 }} />
      </div>
    ),
    { ...size },
  );
}
