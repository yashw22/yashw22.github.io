import { Fragment, useContext } from "react";
import { ProfileContext } from "../helpers/Contexts";
import { FaGithub, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  const profile = useContext(ProfileContext);

  const getLinks = (links) => {
    return links.map((link) => (
      <a key={link.name} href={link.url} rel="noreferrer">
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
          <div className="text-2xl">{profile.name}</div>
          <div className="my-2 flex space-x-2 items-center">
            {getLinks(profile.link)}
          </div>
        </div>
      </div>

      <div className="my-2 text-lg flex items-center justify-center flex-col space-x-0 md:flex-row md:space-x-3">
        {profile.sections.map((section, index) => (
          <Fragment key={section}>
            <Link to={`/${section}`} className="clickable">
              {section}
            </Link>
            {index < profile.sections.length - 1 && (
              <>
                <div className="hidden md:inline">/</div>
                <div className=" border-b-2 w-20 border-light-btn dark:border-dark-btn theme-anim md:hidden"></div>
              </>
            )}
          </Fragment>
        ))}
      </div>

      <div className="my-2 flex items-center justify-center space-x-1">
        <FaRegCopyright />
        <div>2024 - Made by {profile.name}</div>
      </div>
    </div>
  );
}
