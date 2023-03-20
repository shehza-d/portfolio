"use client";

import { ProjectType } from "@/types";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Project({ data }: { data: ProjectType[] }) {
  const elementRef = useRef<HTMLDivElement>(null)!;

  useEffect(() => {
    const element2 = document.querySelector(".projectCard");
    console.log(element2?.getBoundingClientRect());

    const handleMouseMove = (e) => {
      // get mouse position relative to the element
      const bounds = elementRef.current.getBoundingClientRect();
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      // get offset from center of div as a percentage and tone it down a little
      const offsetX = (x / bounds.width) * 45;
      const offsetY = (y / bounds.height) * 45;

      // get mouse position
      // find the middle

      // set rotation
      elementRef.current.style.setProperty("--rotateX", offsetX + "deg");
      elementRef.current.style.setProperty("--rotateY", -1 * offsetY + "deg");
    };

    elementRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      elementRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  console.log("rerender");

  return (
    <section className="my-8 mx-8">
      <h2 className="heading gradient">Projects</h2>
      <div className="flex flex-col gap-8">
        {data.map((item) => {
          return (
            <div
              ref={elementRef}
              key={item.id}
              style={{ backgroundImage: `url('${item.previewImg}')` }}
              className="projectCard bdr2 relative z-10 flex h-[30rem] w-3/5 flex-col items-center justify-end overflow-hidden  rounded-3xl bg-cover bg-center bg-no-repeat shadow-md drop-shadow-md odd:self-end"
            >
              <h5 className="text_glow text-4xl text-gray-100">{item.title}</h5>
              <div className="flex w-full flex-col items-center rounded-b-3xl  bg-gray-100/60 backdrop-blur-md">
                <p className="mt-4">{item.description}</p>
                <ul className="my-4 flex gap-1">
                  {item.techUsed.map((i, j) => (
                    <li className="rounded-full bg-accentLow px-2" key={j}>
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="flex w-full divide-x-2 divide-black">
                  <Link
                    className="w-1/2 bg-green-300  px-4 py-2 text-center underline-offset-4 hover:underline"
                    href={`${item.repoLink}`}
                  >
                    GitHub Repo
                  </Link>
                  <Link
                    className="w-1/2 bg-green-300  px-4 py-2 text-center underline-offset-4 hover:underline"
                    href={`${item.hostedLink}`}
                  >
                    Hosted Link
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
