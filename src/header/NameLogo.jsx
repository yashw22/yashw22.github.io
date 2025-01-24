import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function NameLogo({ name, setCurrentPage }) {
  const [isVisible, setIsVisible] = useState(true);
  const fullName = name.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const animateProps = {
    initial: { width: 0 },
    animate: { width: "auto" },
    exit: { width: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <div
      className="clickable cursor-none"
      onClick={(event) => {
        event.preventDefault();
        setTimeout(() => {
          setCurrentPage("Home");
        }, 500);
      }}
    >
      <div
        className="text-2xl font-bold text-light-text dark:text-dark-text theme-anim flex"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div>{fullName[0][0]}</div>
        <AnimatePresence>
          {isVisible && (
            <motion.div {...animateProps} className="overflow-hidden">
              {fullName[0].slice(1)}
            </motion.div>
          )}
        </AnimatePresence>

        <div>{fullName[1][0]}</div>
        <AnimatePresence>
          {isVisible && (
            <motion.div {...animateProps} className="overflow-hidden">
              {fullName[1].slice(1)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
