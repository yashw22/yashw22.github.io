import { FaBars } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import HeaderBtn from "./HeaderBtn";
import NameLogo from "./NameLogo";
import ThemeBtn from "./ThemeBtn";
import { useContext, useState } from "react";
import { GlobalContext } from "../helpers/Contexts";

export default function Header() {
  const { profile, currentPage, setCurrentPage } = useContext(GlobalContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const getHeaderBtns = profile.sections.map((section) => (
    <HeaderBtn
      key={section}
      section={section}
      enabled={currentPage === section}
      setCurrentPage={setCurrentPage}
    />
  ));

  return (
    <>
      <div className="header flex items-center justify-between">
        <NameLogo name={profile.name} setCurrentPage={setCurrentPage} />

        <div className="flex items-center space-x-4 md:hidden">
          <ThemeBtn />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-light-text dark:text-dark-text theme-anim"
          >
            {menuOpen ? (
              <RiCloseLargeLine className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          {getHeaderBtns}
          <ThemeBtn />
        </div>
      </div>

      <div
        onClick={(event) => {
          if (!event.target.classList.contains("headerBtn")) setMenuOpen(false);
        }}
        className={`z-[100] fixed backdrop-blur-sm top-0 inset-0 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed mt-20 right-6 flex flex-col items-end space-y-4 md:hidden">
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
