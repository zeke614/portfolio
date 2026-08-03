import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ezekiel A. Amissah — business brain, developer hands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontData = await fetch(
    new URL("./fonts/Satoshi-Black.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F4F1E8",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          border: "16px solid #121517",
          boxShadow: "32px 32px 0px #121517",
          paddingBottom: "30px",
        }}
      >
        <span
          style={{
            color: "#121517",
            fontSize: 290,
            fontWeight: 900,
            fontFamily: "Satoshi",
            paddingTop: "20px",
          }}
        >
          Z
        </span>
        <span
          style={{
            fontSize: 290,
            fontWeight: 900,
            color: "#0a7d3f",
            fontFamily: "Satoshi",
            lineHeight: 1,
          }}
        >
          .
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Satoshi",
          data: fontData,
          style: "normal",
          weight: 900,
        },
      ],
    },
  );
}
