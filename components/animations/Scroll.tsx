"use client";
import { useEffect } from "react";

// https://blog.olivierlarose.com/tutorials/smooth-scroll

// trying not succedded
export default function Scroll() {
  // Smooth scroll effect
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      {/* <div className="flex justify-around text-3xl text-white">
          <p data-scroll data-scroll-speed="0.4">
            testing
          </p>
          <h2 data-scroll data-scroll-speed="0.5">
            Whats up?
          </h2>
          <p data-scroll data-scroll-speed="0.6">
            shehzad😬
          </p>
        </div> */}
    </>
  );
}