// import { CardStack } from "../components/CardStack";

import { useContext } from "react";
import { ProfileContext } from "../helpers/Contexts";
import InternshipCard from "../components/InternshipCard";

export default function InternshipPage() {
  const profile = useContext(ProfileContext);

  return (
    <div className="m-4 mt-12 justify-self-center md:w-[80%] 2xl:w-[60%]">
      <div className="text-5xl my-2 text-center">Internships</div>

      <div className="my-8">
        {profile.internships.map((intern, idx) => (
          <InternshipCard key={idx} intern={intern} />
        ))}
      </div>
    </div>
  );
}
