"use client";

import { ProjectType } from "@/types";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ data }: { data: ProjectType }) => {
  const elementRef = useRef<HTMLDivElement>(null)!;

  useEffect(() => {
    const element = elementRef.current!;
    const handleMouseMove = (e: any) => {
      // get mouse position relative to the element
      const bounds = element.getBoundingClientRect();
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      // get offset from center of div as a percentage and tone it down a little
      const offsetX = (x / bounds.width) * 45;
      const offsetY = (y / bounds.height) * 45;
      // get mouse position
      // find the middle

      // set rotation
      element.style.setProperty("--rotateX", offsetX + "deg");
      element.style.setProperty("--rotateY", -1 * offsetY + "deg");
    };

    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{ backgroundImage: `url('${data.previewImg}')` }}
      className="projectCard relative z-10 flex h-[30rem] w-3/5 flex-col items-center justify-end overflow-hidden  rounded-3xl bg-cover bg-center bg-no-repeat shadow-md drop-shadow-md odd:self-end"
    >
      <h5 className="text_glow text-4xl text-gray-100">{data.title}</h5>
      <div className="flex w-full flex-col items-center rounded-b-3xl  bg-gray-100/60 backdrop-blur-md">
        <p className="mt-4">{data.description}</p>
        <ul className="my-4 flex gap-1">
          {data.techUsed.map((i, j) => (
            <li className="rounded-full bg-accentLow px-2" key={j}>
              {i}
            </li>
          ))}
        </ul>
        <div className="flex w-full divide-x-2 divide-black">
          <Link
            className="flex w-1/2 items-center justify-center bg-accentLow px-4 py-2 text-center underline-offset-4 hover:underline"
            href={`${data.repoLink}`}
          >
            GitHub Repo
            <FaGithub className="pl-2 text-3xl" />
          </Link>
          <Link
            className="flex w-1/2 items-center justify-center bg-accentLow px-4 py-2 text-center underline-offset-4 hover:underline"
            href={`${data.hostedLink}`}
          >
            Hosted Link
            <FaExternalLinkAlt className="pl-2 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Project({ data }: { data: ProjectType[] }) {
  return (
    <section className="my-8">
      <h2 className="heading gradient inline-block">Projects</h2>
      <div className="flex flex-col gap-8">
        {data?.map((item) => {
          return <ProjectCard data={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}
