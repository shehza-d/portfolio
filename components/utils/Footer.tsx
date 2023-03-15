import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent py-1 text-center text-gray-800">
      <Link
        prefetch={false}
        className="relative z-10 py-1 px-3 underline-offset-4 hover:underline"
        href="https://github.com/shehza-d"
        target="_blank"
      >
        Built and Designed by ME
      </Link>
    </footer>
  );
}
