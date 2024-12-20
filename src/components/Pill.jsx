import PropTypes from "prop-types";
import { cn } from "../helpers/utils";

export default function Pill({ children, className }) {
  return (
    <div
      className={cn(
        "clickable rounded-3xl px-4 py-1.5 bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt theme-anim flex items-center",
        className
      )}
    >
      {children}
    </div>
  );
}

Pill.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
