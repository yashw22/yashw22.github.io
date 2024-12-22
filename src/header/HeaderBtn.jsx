import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Pill from "../components/Pill";

export default function HeaderBtn({ section, enabled = false }) {
  return (
    <Link to={section.link} className="clickable">
      <Pill
        className="headerBtn hover:bg-light-primary hover:dark:bg-dark-primary"
        enabled={enabled}
      >
        {section.name}
      </Pill>
    </Link>
  );
}

HeaderBtn.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  enabled: PropTypes.bool,
};
