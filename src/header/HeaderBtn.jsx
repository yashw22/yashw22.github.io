import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function HeaderBtn({ title }) {
  return (
    <Link to={`/${title}`} className="cursor-none">
      <div className="clickable headerBtn rounded-3xl px-4 py-1.5 bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt theme-anim">
        {title}
      </div>
    </Link>
  );
}

HeaderBtn.propTypes = {
  title: PropTypes.string.isRequired,
};
