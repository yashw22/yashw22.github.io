import { useContext } from "react";
// import ThemeBar from "../components/ThemeBar";
import { ProfileContext } from "../helpers/Contexts";

export default function HeroPage() {
  const profile = useContext(ProfileContext);
  return (
    <div className="m-4 justify-self-center flex flex-col md:w-[80%] 2xl:w-[70%] bg-black">
      <div className="md:h-[92vh] flex flex-col md:flex-row">
        <div className="md:w-[50%] h-[90vh] md:h-auto  bg-green-500 flex flex-col justify-center items-start">
          <div className="text-5xl">
            Hi, my name is <span>{profile.name}</span>
          </div>
          <div className="mt-5 text-4xl">{profile.headline}</div>
        </div>
        <div className="md:w-[50%] h-[90vh] md:h-auto bg-red-500 flex justify-center items-center">
          3d content
        </div>
      </div>

      <div className="md:h-[92vh] flex flex-col md:flex-row">
        <div className="md:w-[50%] h-[90vh] md:h-auto text-lg bg-blue-500 flex flex-col justify-center items-start">
          {profile.description.map((desc, idx) => (
            <div key={idx}>
              {desc}
              <br />
              <br />
            </div>
          ))}
        </div>
        <div className="md:w-[50%] h-[90vh] md:h-auto bg-yellow-500 flex justify-center items-center">
          card
        </div>
      </div>

      <div className="md:h-[92vh] flex flex-col md:flex-row">
        <div className="w-full h-[90vh] md:h-auto bg-red-500 flex justify-center items-center">
          card
        </div>
      </div>
    </div>
  );
}
