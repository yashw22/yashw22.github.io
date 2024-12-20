import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

var interval;

export const CardStack = ({
  items,
  containerClass,
  cardClass,
  offset,
  scaleFactor,
}) => {
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
    <div className={containerClass}>
      {cards.map((card, index) => (
        <motion.div
          key={card.name}
          className={cardClass}
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
          transition={{ duration: 0.5 }}
        >
          <div>{card.link}</div>
          <div>{card.name}</div>
        </motion.div>
      ))}
    </div>
  );
};

CardStack.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  containerClass: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  offset: PropTypes.number,
  scaleFactor: PropTypes.number,
};
