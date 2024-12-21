import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

// const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const COLORS_TOP = ["#13FFAA"];

export default function Background() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  //   const backgroundImage = useMotionTemplate`radial-gradient(75% 75% at 50% 100%, orange 0%, ${color})`;
//   const backgroundImage = useMotionTemplate`radial-gradient(75% 75% at 50% 100%, #F5F4B3 0%, #4CC9FE`;
  const backgroundImage = useMotionTemplate`radial-gradient(50% 55% at 50% 100%, #F5F4B3 0%, #003285 `;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="fixed inset-0 pointer-events-none z-[-5] bg-blend-multiply"
    ></motion.section>
  );
}
