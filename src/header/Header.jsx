import { FaBars } from "react-icons/fa";
import HeaderBtn from "./HeaderBtn";
import ThemeBtn from "./ThemeBtn";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const btns = ["About", "Education", "Internships", "Projects", "Courses"];

  const getHeaderBtns = btns.map((btn, index) => (
    <HeaderBtn key={index} title={btn} />
  ));

  return (
    <div className="sticky top-2 z-50 px-5 py-2 mb-4 rounded-lg shadow-lg sm:px-10 lg:px-4 lg:mx-36 bg-light-bg/90 dark:bg-dark-bg/90 theme-anim">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-light-text dark:text-dark-text theme-anim">Yash Wardhan</div>

        <div className="flex items-center space-x-4 md:hidden">
          <ThemeBtn />
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            <FaBars className="w-6 h-6" />
          </button>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          {getHeaderBtns}
          <ThemeBtn />
        </div>
      </div>

      {menuOpen && (
        <div className="mt-2 flex flex-col space-y-2 md:hidden">
          {getHeaderBtns}
        </div>
      )}
    </div>
  );
}
