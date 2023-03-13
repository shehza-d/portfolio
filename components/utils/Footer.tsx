import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent py-1 text-center text-gray-800">
      <Link
        className="py-1 px-3 underline-offset-4 hover:underline"
        href="www.github.com/shehza-d"
      >
        built by SHEHZAD
      </Link>
    </footer>
  );
}
