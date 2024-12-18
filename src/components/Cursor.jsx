import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      cursorRef.current.style.transform = `translate3d(${mouseX - 4}px, ${
        mouseY - 4
      }px, 0)`;
      pointerRef.current.style.transform = `translate3d(${mouseX - 12}px, ${
        mouseY - 12
      }px, 0)`;
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="z-50 absolute top-0 left-0 w-2 h-2 rounded-full translate-x-[-4em] translate-y-[-4em] bg-black dark:bg-white pointer-events-none"
      ></div>
      <div
        ref={pointerRef}
        className="z-50 absolute top-0 left-0 w-6 h-6 rounded-full translate-x-[-4em] translate-y-[-4em] border-black dark:border-white pointer-events-none border-2 transition-transform ease-linear"
      ></div>
    </>
  );
}
