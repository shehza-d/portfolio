"use client";
import { useEffect } from "react";

export default function Observer() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animation_triggering_class");
    const profilePic = document.querySelector(".profilePic");

    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add the "animate" class when the element is in the viewport
          entry.target.classList.toggle("animatefff", entry.isIntersecting);
        });
      },
      {
        threshold: 0.9, // when to apply toggle based on percentage
        // rootMargin: "-100px", // vh reduced by 100 px
      }
    );

    // Observe each element
    elements.forEach((element) => {
      observer.observe(element);
    });
// profilePic.observer.



    return () => {
      observer.disconnect();
    };
  }, []);

  return <></>;
}
