import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function HeaderBtn({ title }) {
  return (
    
    <div className="headerBtn rounded-3xl px-4 py-1.5 bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt theme-anim">
      <Link to={`/${title}`}>{title}</Link>
    </div>
  );
}

HeaderBtn.propTypes = {
  title: PropTypes.string.isRequired,
};
