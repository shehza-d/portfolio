"use client";
import { useEffect } from "react";

export default function Observer() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animation_triggering_class");
    const leftAni = document.querySelectorAll(".animation_triggering_left");
    const skills = document.querySelectorAll(".animation_skillDivs");
    const profilePic = document.querySelector(".profilePic")!;

    /* This is for skills Div */
    // // Create an intersection observer
    // const observer = new IntersectionObserver(
    //   /* This is for skills Div END */
    //   (entries) => {
    //     entries.forEach((entry) =>
    //       // Add the "animate" class when the element is in the viewport
    //       entry.target.classList.toggle("animate", entry.isIntersecting)
    //     );
    //   },
    //   {
    //     threshold: 0.9, // when to apply toggle based on percentage
    //     // rootMargin: "-100px", // vh reduced by 100 px
    //   }
    // );

    // // Observe each element
    // elements.forEach((element) => {
    //   observer.observe(element);
    // });
    /* This is for skills Div END */

    /* This is for ProfilePic */
    const observerForPic = new IntersectionObserver(
      (entries) => {
        entries[0].target.classList.toggle(
          "animatePic",
          entries[0].isIntersecting
        );
      },
      {
        rootMargin: "0px",
        threshold: 0.4,
      }
    );
    observerForPic.observe(profilePic);
    /* This is for ProfilePic END */

    /* This is for left ani */
    const observerLeft = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.target.classList.toggle("animateLeft", entry.isIntersecting)
        );
      },
      { threshold: 0.9 }
    );

    // Observe each element
    leftAni.forEach((element) => {
      observerLeft.observe(element);
    });
    /* This is for left ani END */

    /* This is for left ani */
    const observerSkills = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (i % 2 === 1) {
            entry.target.classList.toggle("skillOdd", entry.isIntersecting);
          } else if (i % 2 === 0) {
            entry.target.classList.toggle("skillEven", entry.isIntersecting);
          }
        });
      },
      { rootMargin: "-10px" }
    );
    // Observe each element
    skills.forEach((element) => {
      observerSkills.observe(element);
    });
    /* This is for left ani END */

    return () => {
      //   observer.disconnect();
      observerForPic.disconnect();
      observerLeft.disconnect();
    };
  }, []);

  return <></>;
}
