import Link from "next/link";
import { Icons } from "@/components";
const data = [
  {
    id: "1",
    title: "GitHub",
    link: "https://github.com/shehza-d",
    icon: "github",
    iconType: "skillIcon",
    userName: "shehza-d",
    alt: "github account icon",
  },
  {
    id: "2",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/shehzadd/",
    icon: "linkedin",
    iconType: "skillIcon",
    userName: "shehzadd",
    alt: "LinkedIn account icon",
  },
  {
    id: "3",
    title: "Twitter",
    link: "https://twitter.com/shehza_d_",
    icon: "twitter",
    iconType: "skillIcon",
    userName: "shehza_d_",
    alt: "Twitter account icon",
  },
  {
    id: "4",
    title: "Instagram",
    link: "https://instagram.com/shehza.d",
    icon: "instagram",
    iconType: "skillIcon",
    userName: "shehza.d",
    alt: "instagram account icon",
  },
  //   {
  //     id: "5",
  //     title: "StackOver Flow",
  //     link: "https://stackoverflow.com/users/18210334/shehzad",
  //     icon: "stackoverflow",
  //     iconType: "skillIcon",
  //     userName: "shehzad",
  //     alt: "stackoverflow account icon",
  //   },
  {
    id: "6",
    title: "UpWork",
    link: "https://www.upwork.com/freelancers/~01d9a6c55b707b71aa",
    icon: "",
    iconType: "",
    userName: "shehza-d",
    alt: "account icon",
  },
  {
    id: "7",
    title: "GitHub",
    link: "",
    icon: "",
    iconType: "",
    userName: "shehza-d",
    alt: "account icon",
  },
  {
    id: "8",
    title: "GitHub",
    link: "",
    icon: "",
    iconType: "",
    userName: "shehza-d",
    alt: "account icon",
  },
  {
    id: "9",
    title: "GitHub",
    link: "",
    icon: "",
    iconType: "",
    userName: "shehza-d",
    alt: "account icon",
  },
  //   { id: "1", title: "GitHub", link: "", icon: "", userName: "shehza-d" ,alt:'account icon'},
];

type dt = {
  id: string;
  title: string;
  link: string;
  icon: string;
  userName: string;
  alt: string;
};
const MyLink = (props: dt) => {
  return <a href={props.link}>fdf</a>;
};

export default function Contact() {
  return (
    <section>
      <h2 className="heading gradient  self-start ">Connect with me on 🔗</h2>
      <div>
        {data.map((item) => {
          return (
            <Link
              key={item.id}
              prefetch={false}
              className="py-1 px-3 underline-offset-4 hover:underline"
              href="https://github.com/shehza-d"
              target="_blank"
            >
              Built and Designed by ME
            </Link>
          );
        })}
      </div>
    </section>
  );
}
