import Icons from "../utils/Icons";
import Image from "next/image";

export default function Skills() {
  const data = [
    { id: "1", title: "AWS", icon: "aws", alt: "amazon web service" },
    { id: "2", title: "AWS", icon: "aws", alt: "amazon web service" },
    { id: "3", title: "AWS", icon: "aws", alt: "amazon web service" },
    { id: "4", title: "AWS", icon: "aws", alt: "amazon web service" },
    { id: "5", title: "AWS", icon: "aws", alt: "amazon web service" },
    { id: "6", title: "AWS", icon: "aws", alt: "amazon web service" },
    { id: "7", title: "AWS", icon: "aws", alt: "amazon web service" },
    { id: "8", title: "AWS", icon: "aws", alt: "amazon web service" },
    { id: "9", title: "AWS", icon: "aws", alt: "amazon web service" },
    { id: "10", title: "AWS", icon: "aws", alt: "amazon web service" },
    { id: "11", title: "AWS", icon: "aws", alt: "amazon web service" },
  ];

  return (
    <section>
      <h2 className="heading_gradient self-start text-4xl font-bold">Skills</h2>
      <ul className="font-light text-slate-800">
        <Image
          src="https://skillicons.dev/icons?i=css,html"
          width={75}
          height={75}
          alt="scfff"
        />
        {/* {data.map((item) => (
          <li key={item.id}>
            {item.title}
            <Icons icon={item.icon} alt={item.alt} />
          </li>
        ))} */}
      </ul>
    </section>
  );
}
