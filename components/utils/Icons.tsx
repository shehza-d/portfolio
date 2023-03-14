import Image from "next/image";

interface MyComponentProps {
  icon: string;
  alt: string;
}

export default function Icons(props: MyComponentProps) {
  return (
    <Image
      src="https://skillicons.dev/icons?i=css"
      width={75}
      height={75}
      alt={props.alt}
    />
  );
}
