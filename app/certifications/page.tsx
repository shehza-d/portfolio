import { HacktoberfestBadges } from "@/components";

export const metadata = { title: "Certifications" };

export default function Page() {
  return (
    <main className={`spacing-x pt-11 text-justify`}>
      <h1 className="heading gradient inline-block">
        Certification and Badges
      </h1>
      <blockquote>
        Wajahat Karim: Highlight your accomplishments, even if they are minor,
        because you are the sole recipient of these achievements, unlike
        everyone else.
      </blockquote>
      <HacktoberfestBadges />
      <br />
      <p className="text-center">Certificates will be added soon!</p>
    </main>
  );
}
