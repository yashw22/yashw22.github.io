import { useContext } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GlobalContext } from "../helpers/Contexts";

export default function ResumeBtn() {
  const {profile} = useContext(GlobalContext);
  return (
    <a
      href={profile.resumeUrl}
      rel="noreferrer"
      className="clickable fixed z-[125] bottom-0.5 right-6 transform -translate-y-1/2 flex items-center p-0.5 rounded-2xl shadow-xl border-2 backdrop-blur-lg hover:bg-light-primary hover:dark:bg-dark-primary text-light-text dark:text-dark-text border-light-text/60 dark:border-dark-text/60 group hover:rounded-md hover-anim"
    >
      <span className="absolute right-14 w-auto px-2 text-lg rounded-md border-2 border-light-text/20 dark:border-dark-text/20 scale-0 opacity-0 transform group-hover:opacity-100 group-hover:scale-100 hover-anim">
        Resume
      </span>
      <IoDocumentTextOutline className="z-40 w-10 h-10" />
    </a>
  );
}
