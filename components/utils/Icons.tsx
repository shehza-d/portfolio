import Image from "next/image";

interface MyComponentProps {
  icon: string;
  alt: string;
}

export default function Icons({ icon, alt }: MyComponentProps) {
  return (
    <Image
      src={`https://skillicons.dev/icons?i=${icon}`}
      width={75}
      height={75}
      alt={alt}
    />
  );
}
