import { useContext } from "react";
// import ThemeBar from "../components/ThemeBar";
import { ProfileContext } from "../helpers/Contexts";
import { CardStack } from "../components/CardStack";
import Pill from "../components/Pill";
import { RiMailSendLine } from "react-icons/ri";

const CARDS = [
  {
    name: "React",
    link: "Senior Software Engineer",
  },
  {
    name: "JavaScript",
    link: "Senior Shitposter",
  },
  {
    name: "ThreeJS",
    link: "Manager Project Mayhem",
  },
];

export default function HeroPage() {
  const profile = useContext(ProfileContext);
  return (
    <div className="m-4 justify-self-center flex flex-col md:w-[80%] 2xl:w-[70%]">
      <div className="md:h-[92vh] flex flex-col md:flex-row">
        <div className="md:w-[50%] h-[90vh] md:h-auto flex flex-col justify-center items-start">
          <div className="text-5xl">
            Hi, my name is <span>{profile.name}</span>
          </div>
          <div className="mt-5 text-4xl">{profile.headline}</div>
        </div>
        <div className="md:w-[50%] h-[90vh] md:h-auto flex justify-center items-center">
          3d content
        </div>
      </div>

      <div className="md:h-[92vh] flex flex-col md:flex-row">
        <div className="md:w-[50%] h-[90vh] md:h-auto text-lg flex flex-col justify-center items-start">
          {profile.description.map((desc, idx) => (
            <div key={idx} className="px-2 text-justify">
              {desc}
              <br />
              <br />
            </div>
          ))}
        </div>
        <div className="md:w-[50%] h-[90vh] md:h-auto flex justify-center items-center">
          <CardStack
            items={CARDS}
            containerClass="relative h-60 w-60 md:w-96"
            cardClass="absolute p-4 w-full h-full backdrop-blur-lg rounded-3xl border-2 border-light-btn/20 dark:border-dark-btn/20 flex flex-col items-center justify-around"
            offset={20}
            scaleFactor={0.2}
          />
        </div>
      </div>

      <div className="md:h-[92vh] flex flex-col md:flex-row">
        <div className="w-full h-[90vh] md:h-auto flex flex-col justify-center items-center space-y-6">
          <div className="text-5xl">Get in Touch</div>
          <div className="text-lg text-center">
            Reach out to me for anything you wanna know or share.
          </div>
          <a href={profile.mailUrl}>
            <Pill className="text-xl space-x-2">
              <span>Send a mail</span>
              <RiMailSendLine />
            </Pill>
          </a>
        </div>
      </div>
    </div>
  );
}
