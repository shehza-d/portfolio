"use client";
import { useState, useEffect, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export default function Cursor() {
  const [mouse, setMouse] = useState<MousePosition>({ x: -100, y: -100 });
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0 });
  const speed = 0.35; // between 0 and 1

  const updateCoordinates = (e: MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCoordinates);
    return () => {
      window.removeEventListener("mousemove", updateCoordinates);
    };
  }, []);

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

    const newPos = {
      x: pos.x + diffX * speed,
      y: pos.y + diffY * speed,
    };
    setPos(newPos);

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;
    const rotate = `rotate(${angle}deg)`;
    const translate = `translate3d(${newPos.x}px, ${newPos.y}px, 0)`;

    if (cursorRef.current && cursorCircleRef.current) {
      cursorRef.current.style.transform = translate;
      cursorCircleRef.current.style.transform = rotate + scale;
    }
  };

  useEffect(() => {
    const loop = () => {
      updateCursor();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }, [mouse, pos]);

  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);

  console.log("rerender");

  return (
    <div id="cursorDiv" ref={cursorRef}>
      <div className="cursor__circle" ref={cursorCircleRef}></div>
    </div>
  );
}
