// import { CardStack } from "../components/CardStack";

import { useContext } from "react";
import { ProfileContext } from "../helpers/Contexts";
import InternshipCard from "../components/InternshipCard";

export default function InternshipPage() {
  const profile = useContext(ProfileContext);

  return (
    <div className="m-4 mt-12 justify-self-center md:w-[80%] 2xl:w-[60%]">
      <div>
        {profile.internships.map((intern, idx) => (
          <InternshipCard key={idx} intern={intern} />
        ))}
      </div>
    </div>
  );

  // return (
  //   <div className="m-4 mt-10 justify-self-center flex flex-col md:w-[80%] 2xl:w-[70%] bg-blue-500">
  //     Internship
  //   </div>
  // );
}
