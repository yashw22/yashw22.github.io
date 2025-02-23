import { useContext, useState } from "react";
import { GlobalContext } from "../helpers/Contexts";
import { CardStack } from "../components/CardStack";
import Pill from "../components/Pill";
import { RiMailSendLine } from "react-icons/ri";
import TextMorph from "../components/TextMorph";
import Terminal from "./Terminal";
import { AnimatePresence } from "framer-motion";

export default function HeroPage() {
  const { profile } = useContext(GlobalContext);
  const [isTerminalActive, setIsTerminalActive] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="m-4 flex flex-col md:w-[80%] 2xl:w-[70%]">
        <div className="md:h-[80vh] flex flex-col md:flex-row justify-center">
          <div className="md:w-[50%] h-[40vh] md:h-auto flex justify-center items-center">
            <div className="m-16 p-2 bg-dark-bg dark:bg-light-bg rounded-full">
              <img className="rounded-full" src="/dp.jpg" />
            </div>
          </div>
          <div className="md:w-[50%] h-[40vh] md:h-auto flex flex-col justify-center items-start">
            <div className="md:w-[100%] h-[90vh] md:h-auto flex flex-col justify-center items-start">
              <div className="text-5xl mb-5">
                Hi, my name is <span>{profile.name}</span>
              </div>
              <TextMorph
                start={profile.headlineStart}
                phrases={profile.headlineList}
              />
              <div className="mt-10" onClick={() => setIsTerminalActive(true)}>
                <Pill className="text-xl clickable hover:bg-light-primary hover:dark:bg-dark-primary">
                  Enter Terminal {"</>"}
                </Pill>
                <AnimatePresence>
                  {isTerminalActive && (
                    <Terminal exitTerminal={() => setIsTerminalActive(false)} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="md:h-[60vh] flex flex-col md:flex-row">
          <div className="md:w-[50%] h-[80vh] md:h-auto text-lg flex flex-col justify-center items-start">
            {profile.description.map((desc, idx) => (
              <div key={idx} className="px-2 text-justify">
                {desc}
                <br />
                <br />
              </div>
            ))}
          </div>
          <div className="md:w-[50%] h-[40vh] md:h-auto flex justify-center items-center">
            <CardStack
              items={profile.toolsFocus}
              offset={12}
              scaleFactor={0.1}
            />
          </div>
        </div>

        <div className="md:h-[60vh] flex flex-col md:flex-row">
          <div className="w-full h-[40vh] md:h-auto flex flex-col justify-center items-center space-y-6">
            <div className="text-5xl">Get in Touch</div>
            <div className="text-lg text-center">
              Reach out to me for anything you wanna know or share.
              <div className="text-sm">{profile.mailId}</div>
            </div>
            <a href={`mailto:${profile.mailId}`}>
              <Pill className="text-xl space-x-2 clickable hover:bg-light-primary hover:dark:bg-dark-primary">
                <span>Send a mail</span>
                <RiMailSendLine />
              </Pill>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
