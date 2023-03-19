import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent py-1 text-center text-gray-800">
      <Link
        prefetch={false}
        // className=" hover:after:left-0 "
        className="S_Underline relative z-10 px-1 pt-1 hover:after:w-full"
        href="https://github.com/shehza-d"
        target="_blank"
      >
        Developed and Designed by ME
      </Link>
    </footer>
  );
}
