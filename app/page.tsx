import Hero from "@/app/components/hero";

export default function Page() {
  return (
    <main>
      <Hero />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ezekiel Arkoh Amissah",
            jobTitle: "Frontend Developer",
            description:
              "Frontend developer with a business background, building fintech tools like Assay and Exchango.",
            url: "https://eaamissah.vercel.app",
            knowsAbout: ["Frontend Development", "Next.js", "Fintech", "React"],
          }),
        }}
      />
    </main>
  );
}
