import { HacktoberfestBadges } from "@/components";

export const metadata = { title: "Contributions" };

export default function Page() {
  return (
    <main className={`spacing-x pt-11 text-justify`}>
      <h1 className="heading gradient inline-block">
        Open Source Contributions
      </h1>
      <blockquote>
        Open source is not just about code; it&apos;s about communities,
        collaboration, and the power of shared knowledge to drive innovation. -
        Jim Zemlin
      </blockquote>
      <br />
      <p>
        Open source is beneficial because it promotes transparency and
        collaboration by making software code openly available, which encourages
        peer review and helps identify and fix vulnerabilities more quickly.
        Additionally, it often leads to cost savings for organizations as they
        can utilize and customize open-source solutions without licensing fees.
      </p>

      <HacktoberfestBadges />
      <br />
      <p className="text-center">
        List of my Contributions will be added soon!
      </p>
    </main>
  );
}
