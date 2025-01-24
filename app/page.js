"use client";

import Header from "@/components/header/Header";
import ResumeBtn from "@/components/ResumeBtn";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import HeroPage from "@/components/Pages/HeroPage";
import EducationPage from "@/components/Pages/EducationPage";
import InternshipPage from "@/components/Pages/InternshipPage";
import ProjectPage from "@/components/Pages/ProjectPage";
import NotFoundPage from "@/components/Pages/NotFoundPage";
import { profile } from "@/helpers/data";
import { useEffect, useState } from "react";

export default function Home() {
  const data = profile;
  const [currentPage, setCurrentPage] = useState("Home");

  data.sections = ["Home", "Education", "Internship", "Project"];

  useEffect(() => {
    const element = document.getElementById("bodyContainer");
    if (element) {
      element.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
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
    <div
      id="bodyContainer"
      className="fixed w-full h-full overflow-x-hidden bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text theme-anim cursor-none font-mono"
    >
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <ResumeBtn />
      <AnimatePresence mode="wait">
        <motion.div key={currentPage} {...pageVariants}>
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      <Footer setCurrentPage={setCurrentPage} />
      <Cursor currentPage={currentPage} />
    </div>
  );
}
