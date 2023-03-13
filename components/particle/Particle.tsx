"use client";
import Script from "next/script";
import particlesJSFun from "./particleFun";

export default function Particle() {
  return (
    <div>
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        onLoad={particlesJSFun}
      />
      <div id="particles-js"></div>
    </div>
  );
}
