"use client";

import { ProjectType } from "@/types";
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
      <div className="">
        {data.map((item) => {
          return (
            <div
              ref={elementRef}
              key={item.id}
              className="projectCard bdr h-96 w-96 rounded-3xl"
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </section>
  );
}
