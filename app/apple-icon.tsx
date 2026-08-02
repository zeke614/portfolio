import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function Icon() {
  const fontData = await fetch(
    new URL("./fonts/Satoshi-Black.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    <div
      style={{
        width: "90%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <span
        style={{
          color: "#121517",
          fontSize: 20,
          fontWeight: 900,
          fontFamily: "`Satoshi`",
        }}
      >
        Z
      </span>
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
