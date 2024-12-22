import PropTypes from "prop-types";
import { CardBody, CardContainer, CardItem } from "./Card3D";

export default function EducationCard({ edu }) {
  return (
    <CardContainer>
      <CardBody className="clickable group/card p-2 border-2 rounded-xl border-light-text/60 dark:border-dark-text">
        <CardItem translateZ="100" className="text-xl md:text-2xl mb-1">
          {edu.name} <span className="text-sm">{edu.location}</span>
        </CardItem>
        <CardItem translateZ="80" className="text-sm mb-2">
          {/* <div>{edu.location}</div> */}
          {/* <div> */}
          {`${edu.startMonth} ${edu.startYear} - `}
          {edu.current ? "Present" : `${edu.endMonth} ${edu.endYear}`}
          {/* </div> */}
        </CardItem>
        {edu.icon && (
          <CardItem
            translateZ="50"
            className="h-40 md:h-60 w-auto flex justify-center mb-1"
          >
            <img
              src={edu.icon}
              className="h-40 md:h-60 w-auto object-cover rounded-xl"
            />
          </CardItem>
        )}
        <CardItem translateZ="100" className="text-lg w-full flex justify-end">
          <div>{`${edu.gpa} / ${edu.maxGpa}`}</div>
        </CardItem>
        <CardItem translateZ="80" className="text-lg">
          <div>{edu.degree}</div>
          <div>{edu.course}</div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
EducationCard.propTypes = {
  edu: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    gpa: PropTypes.number.isRequired,
    maxGpa: PropTypes.number.isRequired,
    current: PropTypes.bool.isRequired,
    startMonth: PropTypes.string,
    startYear: PropTypes.string,
    endMonth: PropTypes.string,
    endYear: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
