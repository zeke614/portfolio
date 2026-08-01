import AboutClient from "./aboutClient";

export const metadata = {
  title: "About",
  description:
    "From a business administration degree at KNUST to building software that solve real-world issues — how I got here and why I build the way I do.",
};

export default function Page() {
  return (
    <main>
      <AboutClient />
    </main>
  );
}
