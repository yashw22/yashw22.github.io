import PropTypes from "prop-types";
import Pill from "./Pill";

export default function InternshipCard({ intern }) {
  return (
    <div className="m-2 mb-4 lg:mb-12 p-4 rounded-xl flex flex-col md:flex-row justify-center items-center border-2 border-light-text/20 dark:border-dark-text/20">
      <div className="flex-shrink-0 mb-4 lg:mb-0 md:mr-4">
        <a href={intern.url} rel="noreferrer" className="clickable">
          <img
            src={intern.icon}
            className="h-auto max-w-[100px] lg:max-w-[150px] rounded-xl"
            alt={`${intern.company} logo`}
          />
        </a>
      </div>
      <div>
        <div className="text-2xl">
          <a href={intern.url} rel="noreferrer" className="clickable">
            {intern.company}&nbsp;
          </a>
          <span className="text-sm">{intern.location}</span>
        </div>
        <div className="w-full = flex justify-end">
          {`${intern.startMonth} ${intern.startYear} - `}
          {intern.current ? "present" : `${intern.endMonth} ${intern.endYear}`}
        </div>
        <div className="text-xl font-bold">{intern.role}</div>
        <ul className="text-md lg:text-lg list-disc pl-5">
          {intern.description.map((desc, idx) => (
            <div key={idx}>
              <li className="text-justify">{desc}</li>
            </div>
          ))}
        </ul>
        <div className="flex flex-wrap space-x-2">
          {intern.stack.map((tool) => (
            <div key={tool} className="my-1">
              <Pill>{tool}</Pill>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
InternshipCard.propTypes = {
  intern: PropTypes.shape({
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    current: PropTypes.bool.isRequired,
    endMonth: PropTypes.string,
    endYear: PropTypes.string,
    startMonth: PropTypes.string,
    startYear: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
