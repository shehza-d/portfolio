"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const mouse = { x: -100, y: -100 };
  const pos = { x: 0, y: 0 };
  const speed = 0.2; // between 0 and 1

  const updateCoordinates = (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const getAngle = (diffX: number, diffY: number) =>
    (Math.atan2(diffY, diffX) * 180) / Math.PI;

  const getSqueeze = (diffX: number, diffY: number) => {
    const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
  };

  const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;
    const rotate = `rotate(${angle}deg)`;
    const translate = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

    if (cursorRef.current && cursorCircleRef.current) {
      cursorRef.current.style.transform = translate;
      cursorCircleRef.current.style.transform = rotate + scale;
    }
  };
  // https://youtu.be/wG_5453Vq98?si=Q9lyZXS4ulvXunIv

  useEffect(() => {
    window.addEventListener("mousemove", updateCoordinates);
    const loop = () => {
      updateCursor();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", updateCoordinates);
    };
  }, []);

  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);

  return (
    <div id="cursorDiv" ref={cursorRef}>
      <div className="cursor_circle" ref={cursorCircleRef}></div>
    </div>
  );
}
