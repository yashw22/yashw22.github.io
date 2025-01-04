import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Pill from "./Pill";

export default function EducationDetailModal({ edu, closeModal }) {
  const animateProps = {
    // initial: { scale: 0, height: 0 },
    // animate: { scale: 1, height: "100vh" },
    // exit: { scale: 0, height: 0 },
    // transition: { duration: 0.6, ease: "easeInOut" },

    initial: { translateX: "-100%" },
    animate: { translateX: "0" },
    exit: { translateX: "-100%" },
    // transition: {
    //   duration: 0.5,
    //   type: "spring",
    //   stiffness: 200,
    // },
    // transition:{ type: "tween", duration: 0.5, ease: "easeInOut" }
    transition: { type: "spring", stiffness: 100, damping: 10 },
  };

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen z-[120] backdrop-blur-3xl bg-light-bg/60 dark:bg-dark-bg/60 flex justify-center items-center overflow-y-auto"
      onClick={(e) => {
        if (!e.target.classList.contains("hyperlink")) {
          closeModal();
        }
      }}
      {...animateProps}
    >
      <div className="p-4 pt-12 flex w-[80%] 2xl:max-w-[70%] h-full items-center justify-center">
        <div>
          <div className="text-3xl my-2 text-center">{edu.name}</div>
          <ul className="text-md lg:text-lg list-disc pl-5">
            {edu.description.map((desc, idx) => (
              <div key={idx}>
                <li className="text-justify">{desc}</li>
              </div>
            ))}
          </ul>
          <ul className="text-md lg:text-lg list-disc my-5 pl-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
            {edu.subjects.map((desc, idx) => (
              <div key={idx}>
                <li className="text-justify">{desc}</li>
              </div>
            ))}
          </ul>
          {edu.url && (
            <div className="flex justify-center items-center space-x-2 flex-wrap">
              <a href={edu.url} rel="noreferrer" className="clickable my-2">
                <Pill className="hyperlink">Institution&apos;s Linkedin</Pill>
              </a>
              <a
                href={edu.transcript}
                rel="noreferrer"
                className="clickable my-2"
              >
                <Pill className="hyperlink">Transcript</Pill>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

EducationDetailModal.propTypes = {
  edu: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    gpa: PropTypes.number.isRequired,
    maxGpa: PropTypes.number.isRequired,
    current: PropTypes.bool.isRequired,
    startMonth: PropTypes.string,
    startYear: PropTypes.string,
    endMonth: PropTypes.string,
    endYear: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    transcript: PropTypes.string,
    subjects: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
