import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
        background: "transparent", // transparent so shadow shows against the browser tab
      }}
    >
      <div
        style={{
          width: "24px", // Smaller than 32px to leave room for the shadow
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          border: "1px solid #121517", // The neo-brutalist border
          boxShadow: "2px 2px 0px #121517", // The shadow-hard
          paddingBottom: "2px",
        }}
      >
        <span
          style={{
            color: "#121517",
            fontSize: 17, // Scaled down slightly to fit the 24px box
            fontWeight: 900,
            fontFamily: "Satoshi",
            paddingTop: "2px",
          }}
        >
          Z
        </span>
        <span
          style={{
            fontSize: 17,
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
