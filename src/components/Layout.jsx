import Header from "./../header/Header";
import Cursor from "./Cursor";
import Footer from "./Footer";
import ResumeBtn from "./ResumeBtn";

import { ProfileContext } from "../helpers/Contexts";
import { Outlet } from "react-router-dom";
import { profile } from "../assets/data";

export default function Layout() {
  const data = profile;

  data.sections = [
    { name: "Home", link: "/" },
    { name: "Education", link: "/education" },
    { name: "Internship", link: "/internship" },
    { name: "Project", link: "/project" },
  ];

  return (
    <ProfileContext.Provider value={data}>
      <div className="fixed w-full h-full overflow-x-hidden bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text theme-anim cursor-none">
        <Header />
        <Cursor />
        <ResumeBtn />
        <Outlet />
        <Footer />
      </div>
    </ProfileContext.Provider>
  );
}
