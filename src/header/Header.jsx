import { FaBars } from "react-icons/fa";
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
            <FaBars className="w-6 h-6 text-light-text dark:text-dark-text theme-anim" />
          </button>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          {getHeaderBtns}
          <ThemeBtn />
        </div>
      </div>

      {menuOpen && (
        <div className="fixed mt-2 right-10 flex flex-col items-end space-y-2 md:hidden">
          {getHeaderBtns}
        </div>
      )}
    </>
  );
}
