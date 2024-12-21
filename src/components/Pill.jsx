import PropTypes from "prop-types";
import { cn } from "../helpers/utils";

export default function Pill({ children, className, enabled }) {
  return (
    <div
      className={cn(
        "rounded-3xl px-4 py-1.5 bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt theme-anim flex flex-nowrap items-center justify-center",
        className,
        enabled ? "bg-success" : "bg-light-btn  dark:bg-dark-btn"
      )}
    >
      {children}
    </div>
  );
}

Pill.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  enabled: PropTypes.bool,
};
