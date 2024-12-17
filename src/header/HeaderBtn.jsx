import PropTypes from "prop-types";

export default function HeaderBtn({ title }) {
  return <div className="rounded-3xl px-2 py-1 bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt theme-anim">{title}</div>;
}

HeaderBtn.propTypes = {
  title: PropTypes.string.isRequired,
};
