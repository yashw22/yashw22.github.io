import Header from "./../header/Header";
import Cursor from "./Cursor";
import Footer from "./Footer";
import ResumeBtn from "./ResumeBtn";

import { DataContext } from "../helpers/Contexts";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const data = {
    name: "Yash Wardhan",
    sections: ["education", "internships", "projects", "courses"],
    links: ["Linkedin", "Github", "Instagram", "Mail"],
  };

  return (
    <DataContext.Provider value={data}>
      <div className="fixed w-full h-full overflow-x-hidden bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text theme-anim cursor-none">
        <Header />
        <Cursor />
        <ResumeBtn />
        <Outlet />
        <Footer />
      </div>
    </DataContext.Provider>
  );
}
