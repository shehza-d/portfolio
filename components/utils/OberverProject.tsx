"use client";
import { useEffect } from "react";

export default function ObserverProject() {
  useEffect(() => {
    const projectCard = document.querySelectorAll(".projectCard")!;

    const observerProjects = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          console.log(window.innerWidth);

          if (window.innerWidth < 650) {
            entry.target.classList.toggle("skillEven", entry.isIntersecting);
          } else if (i % 2 === 1) {
            entry.target.classList.toggle("skillOdd", entry.isIntersecting);
          } else if (i % 2 === 0) {
            entry.target.classList.toggle("skillEven", entry.isIntersecting);
          }
        });
      },
      { rootMargin: "-10px" }
    );
    projectCard.forEach((element) => {
      observerProjects.observe(element);
    });

    return () => observerProjects.disconnect();
  }, []);

  return <></>;
}
