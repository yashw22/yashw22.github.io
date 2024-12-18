import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import PropTypes from "prop-types";
import { useRef } from "react";

export default function NameLogo({ name }) {
  const fullName = name.split(" ");

  const nameRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: nameRef });
  const mouseEnter = contextSafe(() => {
    gsap.to(".name", { width: "auto", duration: 0.5, ease: "power3.inOut" });
  });
  const mouseLeave = contextSafe(() => {
    gsap.to(".name", { width: 0, duration: 0.5, ease: "power3.inOut" });
  });

  useGSAP(
    () => {
      gsap.to(".name", {
        width: 0,
        duration: 0.5,
        ease: "power3.inOut",
        delay: 2,
      });
    },
    { scope: nameRef }
  );

  return (
    <div
      className="text-2xl font-bold text-light-text dark:text-dark-text theme-anim flex grow group"
      ref={nameRef}
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeave()}
    >
      <div>{fullName[0][0]}</div>
      <div className="name overflow-hidden">{fullName[0].slice(1)}</div>
      <div>{fullName[1][0]}</div>
      <div className="name overflow-hidden">{fullName[1].slice(1)}</div>
    </div>
  );
}

NameLogo.propTypes = {
  name: PropTypes.string.isRequired,
};
