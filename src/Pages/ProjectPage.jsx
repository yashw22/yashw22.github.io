import { useContext, useState } from "react";
import { GlobalContext } from "../helpers/Contexts";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { AnimatePresence } from "framer-motion";
// import Pill from "../components/Pill";
// import { AnimatePresence, motion } from "framer-motion";
// import { HoverEffect } from "../components/ItemsHoverEffect";

export default function ProjectPage() {
  const {profile} = useContext(GlobalContext);
  const [isModal, setIsModal] = useState(false);
  const [projectIdx, setProjectIdx] = useState();
  // const [filterIsOpen, setFilterIsOpen] = useState(true);
  // const [filterStack, setFilterStack] = useState([]);

  // const techStack = [
  //   ...new Set(profile.projects.map((project) => project.stack).flat()),
  // ];

  // const animateProps = {
  //   initial: { height: 0, margin: 0 },
  //   animate: { height: "auto", margin: "4px" },
  //   exit: { height: 0, margin: 0 },
  //   transition: { duration: 0.5, ease: "easeInOut" },
  // };

  // const generateObjectList = (list, filterList) => {
  //   return list.map((item) => ({
  //     text: item,
  //     enabled: filterList.includes(item),
  //   }));
  // };

  const handleCardClick = (idx) => {
    setProjectIdx(idx);
    setIsModal(true);
  };

  return (
    <div className="flex justify-center">
      <div className="m-4 mt-12 md:w-[80%] 2xl:w-[70%]">
        <AnimatePresence>
          {isModal && (
            <ProjectDetailModal
              project={profile.projects[projectIdx]}
              closeModal={() => setIsModal(false)}
            />
          )}
        </AnimatePresence>

        <div className="text-5xl my-2 text-center">My Projects</div>

        <div className="flex flex-col justify-center items-center">
          {profile.projects.map((project, idx) => (
            <div
              key={idx}
              className={`m-2 w-80 md:w-96 px-2 ${
                idx % 2 === 0 ? "lg:translate-x-[70%]" : "lg:-translate-x-[70%]"
              }`}
              onClick={() => handleCardClick(idx)}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="m-4 mt-10 justify-self-center flex flex-col items-center md:w-[80%] 2xl:w-[70%] bg-blue-500">
  //     {/* <div
  //       onClick={() => {
  //         if (filterIsOpen) setFilterStack([]);
  //         setFilterIsOpen((prev) => !prev);
  //       }}
  //     >
  //       <Pill className="text-xl space-x-2">
  //         <span>Filter</span>
  //       </Pill>
  //     </div> */}
  //     {/* <AnimatePresence>
  //       <motion.div {...animateProps}>
  //         {filterIsOpen && (
  //           <HoverEffect
  //             items={generateObjectList(techStack, filterStack)}
  //             handleClick={setFilterStack}
  //           />
  //         )}
  //       </motion.div>
  //     </AnimatePresence> */}
  //     <div>
  //       {profile.projects.map((project, idx) => (
  //         <ProjectCard key={idx} project={project} />
  //       ))}
  //     </div>
  //   </div>
  // );
}
