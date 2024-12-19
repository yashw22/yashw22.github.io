import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

export default function NameLogo({ name }) {
  const navigate = useNavigate();
  const fullName = name.split(" ");

  const nameVariants = {
    visible: { width: "auto" },
    hidden: {
      width: 0,
      transition: { duration: 0.5, ease: "easeInOut", delay: 1 },
    },
    hover: { width: "auto", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <Link
      className="clickable cursor-none"
      onClick={(event) => {
        event.preventDefault();
        setTimeout(() => {
          navigate("/");
        }, 500);
      }}
    >
      <motion.div
        className="text-2xl font-bold text-light-text dark:text-dark-text theme-anim flex"
        initial="visible"
        animate="hidden"
        whileHover="hover"
      >
        <div>{fullName[0][0]}</div>
        <motion.div variants={nameVariants} className="name overflow-hidden">
          {fullName[0].slice(1)}
        </motion.div>

        <div>{fullName[1][0]}</div>
        <motion.div variants={nameVariants} className="name overflow-hidden">
          {fullName[1].slice(1)}
        </motion.div>
      </motion.div>
    </Link>
  );
}

NameLogo.propTypes = {
  name: PropTypes.string.isRequired,
};
