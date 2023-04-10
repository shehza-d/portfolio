"use client";

import { IProject } from "@/types";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ data }: { data: IProject }) => {
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

    if (window.innerWidth > 550) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{ backgroundImage: `url('${data.previewImg}')` }}
      className="projectCard relative z-10 flex h-[30rem] w-full translate-x-[62%] flex-col items-center justify-end overflow-hidden rounded-3xl bg-cover  bg-center bg-no-repeat opacity-5 shadow-md drop-shadow-md odd:self-end ml:w-[35rem] md:w-[44rem] md:odd:translate-x-[62%] md:even:translate-x-[-62%]  lg:w-[54rem]"
    >
      <h5 className="text_glow text-4xl text-gray-100">{data.title}</h5>
      <div className="flex w-full flex-col items-center rounded-b-3xl  bg-gray-100/60 backdrop-blur-md">
        <p className="mt-4">{data.description}</p>
        <ul className="my-4 flex flex-wrap gap-1">
          {data.techUsed.map((i, j) => (
            <li className="rounded-full bg-accentLow py-1 px-3" key={j}>
              {i}
            </li>
          ))}
        </ul>
        <div className="flex w-full divide-x-2 divide-black">
          <Link
            className="flex w-1/2 items-center justify-center bg-accentLow px-4 py-2 text-center underline-offset-4 hover:underline"
            href={data.repoLink}
            target="_blank"
          >
            GitHub Repo
            <FaGithub className="pl-2 text-3xl" />
          </Link>
          <Link
            className="flex w-1/2 items-center justify-center bg-accentLow px-4 py-2 text-center underline-offset-4 hover:underline"
            href={data.hostedLink}
            target="_blank"
          >
            Hosted Link
            <FaExternalLinkAlt className="pl-2 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Project({ data }: { data: IProject[] }) {
  return (
    <section className="my-8">
      <div className="mx-4 flex flex-col gap-8 overflow-hidden">
        {data?.map((item) => {
          return <ProjectCard data={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}
