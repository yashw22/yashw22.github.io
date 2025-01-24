import { useContext, useState } from "react";
import { GlobalContext } from "../helpers/Contexts";
import EducationCard from "../components/EducationCard";
import CertificationCard from "../components/CertificationCard";
import { AnimatePresence } from "framer-motion";
import EducationDetailModal from "../components/EducationDetailModal";

export default function EducationPage() {
  const {profile} = useContext(GlobalContext);
  const [isModal, setIsModal] = useState(false);
  const [eduIdx, setEduIdx] = useState();

  const handleCardClick = (idx) => {
    setEduIdx(idx);
    setIsModal(true);
  };

  return (
    <div className="flex justify-center">
      <div className="m-4 mt-12 md:w-[80%] 2xl:w-[70%]">
        <AnimatePresence>
          {isModal && (
            <EducationDetailModal
              edu={profile.education[eduIdx]}
              closeModal={() => setIsModal(false)}
            />
          )}
        </AnimatePresence>
        <div className="text-5xl my-2 text-center">My Education</div>
        <div className="flex flex-col justify-center items-center">
          {profile.education.map((edu, idx) => (
            <div
              key={idx}
              className={`m-2 w-80 md:w-96 px-2 ${
                idx % 2 === 0 ? "lg:translate-x-[70%]" : "lg:-translate-x-[70%]"
              }`}
              onClick={() => handleCardClick(idx)}
            >
              <EducationCard edu={edu} />
            </div>
          ))}
        </div>
        <div className="text-5xl my-2 mt-10 text-center">Online Courses</div>
        <div className="flex flex-col justify-center items-center">
          {profile.certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`m-2 w-80 md:w-96 px-2 ${
                idx % 2 === 0 ? "lg:translate-x-[70%]" : "lg:-translate-x-[70%]"
              }`}
            >
              <a href={cert.url} className="bg-red" rel="noreferrer">
                <CertificationCard cert={cert} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
