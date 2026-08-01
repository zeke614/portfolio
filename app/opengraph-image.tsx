import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ezekiel A. Amissah — business brain, developer hands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontData = await fetch(
    new URL("./fonts/Satoshi-Bold.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f4f1e8",
        fontFamily: `"Satoshi"`,
        padding: "56px",
        position: "relative",
      }}
    >
      {/* tagline, top corner */}
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#121517",
          fontWeight: 700,
        }}
      >
        business brain, developer hands
      </div>

      {/* big mark, left-aligned */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 320,
          fontWeight: 700,
          color: "#121517",
          lineHeight: 1,
        }}
      >
        e
      </div>

      {/* name, bottom corner */}
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#6b6a5f",
          fontWeight: 700,
        }}
      >
        ezekiel a. amissah
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Satoshi",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
