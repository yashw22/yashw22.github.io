import { memo, useEffect, useRef, useState } from "react";

const Cursor = memo(function Cursor({currentPage}) {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [hasCursor, setHasCursor] = useState(false);

  useEffect(() => {
    setHasCursor(window.matchMedia("(pointer: fine)").matches)
    // setIsTouchDevice(
    //   "ontouchstart" in window ||
    //     navigator.maxTouchPoints > 0 ||
    //     navigator.msMaxTouchPoints > 0
    // );
    if (hasCursor) {
      const moveCursor = (event) => {
        const { clientX: mouseX, clientY: mouseY } = event;
        if (dotRef.current && circleRef.current) {
          dotRef.current.style.transform = `translate3d(${
            mouseX - dotRef.current.clientWidth / 2
          }px, ${mouseY - dotRef.current.clientHeight / 2}px, 0)`;

          circleRef.current.style.transform = `translate3d(${
            mouseX - circleRef.current.clientWidth / 2 - 2
          }px, ${mouseY - circleRef.current.clientHeight / 2 - 2}px, 0)`;
        }
      };
      const handlePointerHover = () => {
        if (circleRef.current) {
          circleRef.current.classList.add("mouse-hovering");
        }
      };

      const handlePointerLeave = () => {
        if (circleRef.current) {
          circleRef.current.classList.remove("mouse-hovering");
        }
      };

      window.addEventListener("mousemove", moveCursor);
      document.querySelectorAll(".clickable").forEach((element) => {
        element.addEventListener("mouseenter", handlePointerHover);
        element.addEventListener("mouseleave", handlePointerLeave);
      });

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        document.querySelectorAll(".clickable").forEach((element) => {
          element.removeEventListener("mouseenter", handlePointerHover);
          element.removeEventListener("mouseleave", handlePointerLeave);
        });
      };
    }
  }, [hasCursor, currentPage]);

  if (!hasCursor) {
    return null;
  }

  return (
    <>
      <div
        ref={circleRef}
        className="z-[200] fixed top-0 left-0 w-6 h-6 rounded-full translate-x-[-4em] translate-y-[-4em] mix-blend-difference pointer-events-none border-2 transition-all ease-linear"
      ></div>
      <div
        ref={dotRef}
        className="z-[200] fixed top-0 left-0 w-2 h-2 rounded-full translate-x-[-4em] translate-y-[-4em] bg-white mix-blend-difference pointer-events-none"
      ></div>
    </>
  );
});

export default Cursor;
