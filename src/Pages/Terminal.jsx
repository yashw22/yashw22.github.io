import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GlobalContext } from "../helpers/Contexts";

const getDate = (item) => {
  return `${item.startMonth}, ${item.startYear} - ${item.endMonth}, ${item.endYear} `;
};

function Terminal({ exitTerminal }) {
  const {profile} = useContext(GlobalContext);

  const start = "-> yash_wardhan $";
  const info = [
    "Welcome to my profile's terminal",
    " ",
    "Type 'menu' for more info",
  ];
  const menu = [
    "\tmenu    - Display menu",
    "\texit    - Exit the terminal",
    "\tclear   - Clear the terminal",
    "\tabout   - About me",
    "\tcontact - My contact info & handles",
    "\tedu     - My education",
    "\tintern  - About my internships",
    "\tproject - About my projects",
    "\tcert    - About my certifications",
  ];

  const [input, setInput] = useState("");
  const [output, setOutput] = useState([...info, " "]);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const handleCommand = () => {
    const cmd = input.trim();
    const newLn = `${start} ${cmd}`;
    setInput("");

    if (cmd === "exit") exitTerminal();
    else if (cmd === "clear") setOutput([...info, " "]);
    else if (cmd === "menu" || cmd === "help")
      setOutput([...output, newLn, ...menu]);
    else if (cmd === "about")
      setOutput([
        ...output,
        newLn,
        ...profile.description.map((item) => `\t- ${item}`),
      ]);
    else if (cmd === "contact")
      setOutput([
        ...output,
        newLn,
        ...profile.links.map((item) => `\t- ${item.name}: ${item.handle}`),
      ]);
    else if (cmd === "edu")
      setOutput([
        ...output,
        newLn,
        ...profile.education.map(
          (item) =>
            `\t- ${item.course} - ${item.degree.split(" ")[0]}'s (${item.name})`
        ),
      ]);
    else if (cmd === "intern")
      setOutput([
        ...output,
        newLn,
        ...profile.internships.map(
          (item) => `\t- ${item.role} - ${item.company} (${getDate(item)})`
        ),
      ]);
    else if (cmd === "project")
      setOutput([
        ...output,
        newLn,
        ...profile.projects.map(
          (item) => `\t- ${item.title} (${getDate(item)})`
        ),
      ]);
    else if (cmd === "cert")
      setOutput([
        ...output,
        newLn,
        ...profile.certifications.map(
          (item) => `\t- ${item.title} (${item.source})`
        ),
      ]);
    else setOutput([...output, newLn, `${cmd} : command not found`]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleCommand();
  };

  // useEffect(() => {
  //   const handleGlobalKeyPress = () => {
  //     if (inputRef.current) inputRef.current.focus();
  //   };
  //   window.addEventListener("keydown", handleGlobalKeyPress);

  //   return () => {
  //     window.removeEventListener("keydown", handleGlobalKeyPress);
  //   };
  // }, []);

  const handleFocusInput = () => {
    if (inputRef.current && document.activeElement !== inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const animateProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  return (
    <motion.div
      className="bg-black text-green-500 fixed inset-0 w-screen h-screen overflow-hidden z-[200]"
      {...animateProps}
      onClick={handleFocusInput}
    >
      <div className="p-4 overflow-y-auto h-[95%] md:h-full" ref={outputRef}>
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-green-500">{start}&nbsp;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.toLowerCase())}
            onKeyDown={handleKeyPress}
            ref={inputRef}
            className="bg-black text-green-500 caret-transparent focus:outline-none"
            style={{ width: `${input.length * 1}ch`, minWidth: "0ch" }}
          />
          <div className="w-2 h-5 bg-green-500"></div>
        </div>
      </div>
    </motion.div>
  );
}

Terminal.propTypes = {
  exitTerminal: PropTypes.func.isRequired,
  // profile: PropTypes.object.isRequired,
};

export default Terminal;
