import Header from "../header/Header";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import ResumeBtn from "../components/ResumeBtn";

import NotFoundPage from "./NotFoundPage";
import HeroPage from "./HeroPage";
import EducationPage from "./EducationPage";
import InternshipPage from "./InternshipPage";
import ProjectPage from "./ProjectPage";

import { GlobalContext } from "../helpers/Contexts";
import { profile } from "../assets/data";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout() {
  const data = profile;
  const [currentPage, setCurrentPage] = useState("Home");

  data.sections = ["Home", "Education", "Internship", "Project"];

  useEffect(() => {
    const element = document.getElementById("bodyContainer");
    if (element) {
      element.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  // const pageVariants = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
  //   exit: { opacity: 0, y: -20, transition: { duration: 0.3, delay: 0.6 } },
  // };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const element = document.getElementById("bodyContainer");
  //     if (element) {
  //       element.scrollTo({ top: 0, behavior: "smooth" });
  //     }
  //   }, 800);
  //   return () => clearTimeout(timeout);
  // }, [currentPage]);

  const pageVariants = {
    initial: { opacity: 0},
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0,  transition: { duration: 0.3 } },
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HeroPage />;
      case "Education":
        return <EducationPage />;
      case "Internship":
        return <InternshipPage />;
      case "Project":
        return <ProjectPage />;
      default:
        return <NotFoundPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <GlobalContext.Provider
      value={{ profile: data, currentPage, setCurrentPage }}
    >
      <div
        id="bodyContainer"
        className="fixed w-full h-full overflow-x-hidden bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text theme-anim cursor-none font-mono"
      >
        <Header />
        <ResumeBtn />
        <AnimatePresence mode="wait">
          <motion.div key={currentPage} {...pageVariants}>
            {renderPage()}
          </motion.div>
        </AnimatePresence>
        <Footer />
        <Cursor currentPage={currentPage} />
      </div>
    </GlobalContext.Provider>
  );
}
