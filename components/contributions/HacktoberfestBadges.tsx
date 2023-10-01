import Image from "next/image";

export default function HacktoberfestBadges() {
  return (
    <div>
      <h3 className="my-4 gradient text-2xl">Hacktoberfest badges</h3>
      <p>
        For the past 10 years, Hacktoberfest is DigitalOcean&apos;s annual event
        that encourages people to contribute to open source throughout October.
        Much of modern tech infrastructure—including some of DigitalOcean&apos;s
        own products—relies on open-source projects built and maintained by
        passionate people who often don&apos;t have the staff or budgets to do
        much more than keep the project alive. Hacktoberfest is all about giving
        back to those projects, sharpening skills, and celebrating all things
        open source, especially the people that make open source so special.
      </p>
      <br />
      <Image
        className="mx-auto"
        width={1468}
        height={461}
        src="https://www.holopin.me/shehzad"
        alt="An image of @shehzad's Holopin badges, which is a link to view their full Holopin profile"
      />
    </div>
  );
}
