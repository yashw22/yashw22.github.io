import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import Pill from "./Pill";

export const HoverEffect = ({ items }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-red-500 flex">
      {items.map((item, idx) => (
        <div
          key={item.text}
          className="relative  block p-2 h-full w-full group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Pill className="z-20" enabled={item.enabled}>{item.text}</Pill>

          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 rounded-3xl bg-black z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              />
            )}
          </AnimatePresence>
          {/* className={cn(
        "clickable rounded-3xl px-4 py-1.5 bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt theme-anim flex items-center justify-center",
        className,
        enabled ? "bg-success" : "bg-light-btn  dark:bg-dark-btn"
      )} */}
          {/* <div className="clickable bg-white dark:bg-black rounded-2xl overflow-hidden group-hover:border-slate-700 relative z-20">
            <div className="font-bold tracking-wide">{item.text}</div>
          </div> */}
        </div>
      ))}
    </div>
  );
};
HoverEffect.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      enabled: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};
