import { useContext } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ProfileContext } from "../helpers/Contexts";

export default function ResumeBtn() {
  const profile = useContext(ProfileContext);
  return (
    // <div className="fixed z-30 bottom-0.5 right-6 md:top-1/2 md:bottom-auto md:right-0 transform -translate-y-1/2 flex items-center p-1 rounded-2xl shadow-xl  bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt group hover:rounded-md hover-anim">
    <a
      href={profile.resumeUrl}
      rel="noreferrer"
      className="clickable fixed z-[125] bottom-0.5 right-6 transform -translate-y-1/2 flex items-center p-1 rounded-2xl shadow-xl  bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt group hover:rounded-md hover-anim"
    >
      <span className="absolute right-14 w-auto px-2 text-lg rounded-md  bg-light-btn dark:bg-dark-btn scale-0 opacity-0 transform group-hover:opacity-100 group-hover:scale-100 hover-anim">
        Resume
      </span>
      <IoDocumentTextOutline className=" z-40 w-10 h-10" />
    </a>
  );
}
