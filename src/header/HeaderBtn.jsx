import PropTypes from "prop-types";

export default function HeaderBtn({ title }) {
  return (
    <div className="rounded-3xl px-4 py-1.5 bg-light-btn text-light-btnTxt dark:bg-dark-btn dark:text-dark-btnTxt theme-anim">
      {title}
    </div>
  );
}

HeaderBtn.propTypes = {
  title: PropTypes.string.isRequired,
};
