import { Fragment, useContext } from "react";
import { GlobalContext } from "../helpers/Contexts";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  const {profile, setCurrentPage} = useContext(GlobalContext);

  const getLinks = (links) => {
    return links.map((link) => (
      <a className="clickable group relative" key={link.name} href={link.url} rel="noreferrer">
        <span className="absolute text-md rounded-md px-2 -top-full left-1/2 -translate-x-1/2 border-2 border-light-text/20 dark:border-dark-text/20 scale-0 opacity-0 transform group-hover:opacity-100 group-hover:scale-100 hover-anim">
          {link.name}
        </span>
        {link.name === "Mail" ? (
          <IoIosMail className="w-8 h-8" />
        ) : link.name === "Linkedin" ? (
          <FaLinkedinIn className="w-8 h-8" />
        ) : link.name === "Github" ? (
          <FaGithub className="w-8 h-8" />
        ) : (
          link.name
        )}
      </a>
    ));
  };

  return (
    <div className="bottom-0 flex flex-col justify-center flex-1">
      <div>
        <div className="mt-10 flex flex-col items-center justify-center md:flex-row md:justify-evenly">
          {/* <div className="text-2xl">{profile.name}</div> */}
          <div className="my-2 flex space-x-2 items-center">
            {getLinks(profile.links)}
          </div>
        </div>
      </div>

      <div className="my-2 text-lg flex items-center justify-center flex-col space-x-0 md:flex-row md:space-x-3">
        {profile.sections.map((section, index) => (
          <Fragment key={section}>
            <div to={section} className="clickable" onClick={()=>setCurrentPage(section)}>
              {section}
            </div>
            {index < profile.sections.length - 1 && (
              <>
                <div className="hidden md:inline">/</div>
                <div className="border-b-2 w-20 border-light-text/60 dark:border-dark-text/60 theme-anim md:hidden"></div>
              </>
            )}
          </Fragment>
        ))}
      </div>

      <div className="my-2 mb-10 flex items-center justify-center space-x-1">
        {/* <FaRegCopyright /> */}
        <div>2024 - Made by {profile.name}</div>
      </div>
    </div>
  );
}
