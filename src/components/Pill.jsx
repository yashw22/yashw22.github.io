import PropTypes from "prop-types";
import { cn } from "../helpers/utils";

export default function Pill({ children, className, enabled = false }) {
  return (
    <div
      className={cn(
        "rounded-xl px-4 py-1.5 border-2 border-light-text/60 dark:border-dark-text/60 text-light-text dark:text-dark-text theme-anim flex flex-nowrap items-center justify-center",
        className,
        enabled ? "bg-light-primary dark:bg-dark-primary" : ""
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
