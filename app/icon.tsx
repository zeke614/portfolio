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
        width: "90%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingBottom: "5px",
      }}
    >
      <span
        style={{
          color: "#121517",
          fontSize: 25,
          fontWeight: 900,
          fontFamily: "`Satoshi`",
        }}
      >
        z
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
