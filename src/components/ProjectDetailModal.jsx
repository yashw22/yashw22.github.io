import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Pill from "./Pill";

export default function ProjectDetailModal({ project, closeModal }) {
  const animateProps = {
    // initial: { scale: 0, height: 0 },
    // animate: { scale: 1, height: "100vh" },
    // exit: { scale: 0, height: 0 },
    // transition: { duration: 0.6, ease: "easeInOut" },

    initial: { translateX: "-100%" },
    animate: { translateX: "0" },
    exit: { translateX: "-100%" },
    transition: { type: "spring", stiffness: 100, damping: 10 },
  };

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen z-[120] backdrop-blur-3xl bg-light-bg/60 dark:bg-dark-bg/60 flex justify-center items-center"
      onClick={(e) => {
        if (!e.target.classList.contains("hyperlink")) {
          closeModal();
        }
      }}
      {...animateProps}
    >
      <div className="m-4 mt-12 justify-self-center w-[80%]  2xl:max-w-[70%]">
        <div className="text-3xl my-2 text-center">{project.title}</div>
        <ul className="text-md lg:text-lg list-disc pl-5">
          {project.description.map((desc, idx) => (
            <div key={idx}>
              <li className="text-justify">{desc}</li>
            </div>
          ))}
        </ul>
        {project.url && (
          <div className="flex flex-col justify-center items-center">
            <a href={project.url} rel="noreferrer" className="clickable my-2 ">
              <Pill className="hyperlink">Link to Project</Pill>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

ProjectDetailModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    current: PropTypes.bool.isRequired,
    endMonth: PropTypes.string,
    endYear: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
