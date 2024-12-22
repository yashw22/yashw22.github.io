import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

var interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        // newArray.unshift(newArray.pop());
        newArray.push(newArray.shift());
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:w-80">
      {cards.map((tool, index) => (
        <motion.div
          key={tool}
          className="absolute p-4 w-full h-full rounded-3xl bg-light-bg dark:bg-dark-bg border-2 border-light-text/20 dark:border-dark-text/20 theme-anim flex flex-col items-center justify-around"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
          transition={{ duration: 0.5 }}
        >
          <img src={`/tools/${tool}.png`} className="h-40 w-auto" />
          <div>{tool.toUpperCase()}</div>
        </motion.div>
      ))}
    </div>
  );
};

CardStack.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  offset: PropTypes.number,
  scaleFactor: PropTypes.number,
};
