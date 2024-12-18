import { FaBars } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import HeaderBtn from "./HeaderBtn";
import NameLogo from "./NameLogo";
import ThemeBtn from "./ThemeBtn";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const btns = ["About", "Education", "Internships", "Projects", "Courses"];

  const getHeaderBtns = btns.map((btn, index) => (
    <HeaderBtn key={index} title={btn} />
  ));

  return (
    <>
      <div className="header flex items-center justify-between">
        <NameLogo name="Yash Wardhan" />

        <div className="flex items-center space-x-4 md:hidden">
          <ThemeBtn />
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            {menuOpen ? (
              <RiCloseLargeLine className="w-6 h-6 text-light-text dark:text-dark-text theme-anim" />
            ) : (
              <FaBars className="w-6 h-6 text-light-text dark:text-dark-text theme-anim" />
            )}
          </button>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          {getHeaderBtns}
          <ThemeBtn />
        </div>
      </div>


      <div
        className={`z-45 fixed top-0 inset-0 backdrop-blur-md transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed mt-20 right-6 flex flex-col items-end space-y-2 md:hidden">
          {getHeaderBtns}
        </div>
      </div>

      {/* {menuOpen && (
        <div className="z-45 w-full h-full bg-black">
          <div className="fixed mt-2 right-10 flex flex-col items-end space-y-2 md:hidden">
            {getHeaderBtns}
          </div>
        </div>
      )} */}
    </>
  );
}
