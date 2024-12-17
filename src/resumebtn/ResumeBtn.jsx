import { IoDocumentTextOutline } from "react-icons/io5";

export default function ResumeBtn() {
  return (
    <>
      <div className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2 flex items-center p-1 rounded-2xl shadow-xl  bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt group hover:rounded-md hover-anim">
        <span className="absolute right-14 z-10 w-auto px-2 text-lg rounded-md  bg-light-btn dark:bg-dark-btn opacity-0 transform group-hover:opacity-100 hover-anim">
          Resume
        </span>
        <IoDocumentTextOutline className="z-40 w-10 h-10" />
      </div>
    </>
  );
}
