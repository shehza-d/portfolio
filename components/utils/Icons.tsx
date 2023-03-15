import Image from "next/image";

type IconProps = {
  icon: string;
  alt: string;
  iconType?: "skillIcon" | "public";
};

export default function Icons({ icon, alt, iconType }: IconProps) {
  const darkMode = true;

  return (
    <>
      {iconType === "public" ? (
        <Image
          className="rounded-[20px]"
          src={icon}
          width={75}
          height={75}
          alt={alt}
        />
      ) : (
        <Image
          src={`https://skillicons.dev/icons?i=${icon}&theme=${
            darkMode ? "dark" : "light"
          }`}
          width={75}
          height={75}
          // title={"fdfd"}
          alt={alt}
        />
      )}
    </>
  );
}
