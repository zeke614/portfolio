import BuildsClient from "./buildsClient";

export const metadata = {
  title: "Builds",
  description:
    "Assay, an investment appraisal tool built with Next.js & Supabase and Exchango, a real-time multilingual currency converter.",
};

export default function Page() {
  return (
    <main>
      <BuildsClient />
    </main>
  );
}
