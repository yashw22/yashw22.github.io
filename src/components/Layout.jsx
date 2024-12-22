import Header from "./../header/Header";
import Cursor from "./Cursor";
import Footer from "./Footer";
import ResumeBtn from "./ResumeBtn";

import { ProfileContext } from "../helpers/Contexts";
import { Outlet } from "react-router-dom";
import { profile } from "../assets/data";
import ScrollToTop from "./ScrollToTop";
// import Background from "./Background";

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
      <div
        id="bodyContainer"
        className="fixed w-full h-full overflow-x-hidden bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text theme-anim cursor-none font-mono"
      >
        {/* <Background /> */}
        <Header />
        <ResumeBtn />
        <Outlet />
        <Footer />
        <ScrollToTop />
        <Cursor />
      </div>
    </ProfileContext.Provider>
  );
}
