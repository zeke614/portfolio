import PipelineClient from "./pipelineClient";

export const metadata = {
  title: "Pipeline",
  description:
    "A living file tree of my current focus, learning, and life goals. no extra, just what is currently going on in my world.",
};

export default function Page() {
  return (
    <main>
      <PipelineClient />
    </main>
  );
}
