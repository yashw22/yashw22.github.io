import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const charInterval = 50,
  phraseInterval = 5000,
  windowSize = 5;
const charList = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=!@#$%^&*()_+[];',./{}:"<>?`;

export default function TextMorph({ start, phrases }) {
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [targetText, setTargetText] = useState(phrases[0]);

  // Morphing effect
  useEffect(() => {
    let morphingTimeout;
    let charIndex = 0;
    setDisplayText((prev) => {
      if (prev.length < targetText.length) {
        return prev.padEnd(targetText.length, " ");
      }
      return prev;
    });

    const morphText = () => {
      if (charIndex < targetText.length) {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char, i) => {
              if (i < charIndex) return targetText[i];
              else if (i < charIndex + windowSize) {
                return charList[Math.floor(Math.random() * charList.length)];
              } else if (i < prev.length) return char;
              return "";
            })
            .join("")
        );
        charIndex += 1;
        morphingTimeout = setTimeout(morphText, charInterval);
      } else {
        setDisplayText(targetText);
      }
    };

    morphText();

    return () => {
      clearTimeout(morphingTimeout);
    };
  }, [targetText]);

  // Phrase switching
  useEffect(() => {
    const phraseTimeout = setInterval(() => {
      setTargetText((prevTarget) => {
        const currentIndex = phrases.indexOf(prevTarget);
        return phrases[(currentIndex + 1) % phrases.length];
      });
    }, phraseInterval);

    return () => clearInterval(phraseTimeout);
  }, [phrases]);

  return (
    <div className="text-4xl">
      {start} {displayText}
    </div>
  );
}

TextMorph.propTypes = {
  start: PropTypes.string.isRequired,
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
};
