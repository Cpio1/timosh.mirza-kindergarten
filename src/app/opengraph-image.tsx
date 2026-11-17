import { ImageResponse } from "next/og";
import { loadGoogleFont, logoDataUri } from "@/shared/lib/og";

export const alt = "Timosh Mirza балабақшасы — Көлді ауылы, Қарасай ауданы";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const title = "Timosh Mirza";
  const subtitle = "Қазақ тілінде тәрбие беретін балабақша";
  const facts = ["3–6 жас", "2 топ", "50 бала", "07:30–17:00"];
  const place = "Алматы облысы · Қарасай ауданы · Көлді ауылы";

  const [display, body] = await Promise.all([
    loadGoogleFont("Nunito", 900, title + subtitle),
    loadGoogleFont("Golos+Text", 500, facts.join("") + place),
  ]);
  const fonts = [
    ...(display ? [{ name: "Nunito", data: display, weight: 900 as const }] : []),
    ...(body ? [{ name: "Golos", data: body, weight: 500 as const }] : []),
  ];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#F9F6EA", position: "relative", fontFamily: "Golos", color: "#263B3B" }}>
        <div style={{ position: "absolute", right: -120, top: -140, width: 600, height: 600, borderRadius: "58% 42% 46% 54%", background: "#D5EFEC", display: "flex" }} />
        <div style={{ position: "absolute", right: 120, bottom: -200, width: 440, height: 440, borderRadius: 999, background: "#F4C95D", opacity: 0.5, display: "flex" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 14, background: "#2CACA5", display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 26, color: "#1B7C77" }}>{place}</div>
          <div style={{ display: "flex", fontFamily: "Nunito", fontSize: 116, lineHeight: 1, marginTop: 24 }}>{title}</div>
          <div style={{ display: "flex", fontFamily: "Nunito", fontSize: 40, lineHeight: 1.2, marginTop: 18, maxWidth: 640 }}>{subtitle}</div>
          <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
            {facts.map((f) => (
              <span key={f} style={{ display: "flex", background: "#FFFDF6", borderRadius: 999, padding: "12px 24px", fontSize: 26, border: "1px solid #E6DFC8" }}>
                {f}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", right: 110, top: 150, display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUri()} width={300} height={300} alt="" />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
