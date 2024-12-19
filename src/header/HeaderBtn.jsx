import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function HeaderBtn({ section }) {
  return (
    <Link to={section.link} className="cursor-none">
      <div className="clickable headerBtn rounded-3xl px-4 py-1.5 bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt theme-anim">
        {section.name}
      </div>
    </Link>
  );
}

HeaderBtn.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
