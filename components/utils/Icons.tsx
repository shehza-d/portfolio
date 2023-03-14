import Image from "next/image";

type IconProps = {
  icon: string;
  alt: string;
};

export default function Icons({ icon, alt }: IconProps) {
  const darkMode = true;
  return (
    <Image
      src={`https://skillicons.dev/icons?i=${icon}&theme=${
        darkMode ? "dark" : "light"
      }`}
      width={75}
      height={75}
      // title={"fdfd"}
      alt={alt}
    />
  );
}
