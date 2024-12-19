import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

// usecase

// <div className="max-w-5xl mx-auto px-8">
//         <HoverEffect
//           items={projects}
//           className=""
//           cardContainerClass="relative  block p-2 h-full w-full group"
//           hoverClass="absolute inset-0 h-full w-full block rounded-3xl bg-black"
//           cardClass="clickable bg-white dark:bg-black rounded-2xl p-4 overflow-hidden group-hover:border-slate-700 relative z-20"
//           textClass="font-bold tracking-wide"
//         />
//       </div>

export const HoverEffect = ({
  items,
  className,
  cardContainerClass,
  hoverClass,
  cardClass,
  textClass,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={className}>
      {items.map((item, idx) => (
        <div
          key={item.text}
          className={cardContainerClass}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={hoverClass}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.5 },
                }}
              />
            )}
          </AnimatePresence>
          <div className={cardClass}>
            <div className={textClass}>{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
HoverEffect.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  cardContainerClass: PropTypes.string,
  hoverClass: PropTypes.string,
  cardClass: PropTypes.string,
  textClass: PropTypes.string,
};
