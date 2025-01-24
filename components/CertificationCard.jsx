import PropTypes from "prop-types";
import { CardBody, CardContainer, CardItem } from "./Card3D";

export default function CertificationCard({ cert }) {
  return (
    <CardContainer>
      <CardBody className="clickable group/card p-2 border-2 rounded-xl border-light-text/60 dark:border-dark-text">
        <CardItem translateZ="100" className="text-xl md:text-2xl mb-1">
          {cert.title} <span className="text-sm">{cert.source}</span>
        </CardItem>
        {cert.icon && (
          <CardItem translateZ="50" className="w-full">
            <img
              src={cert.icon}
              className="h-auto w-full object-cover rounded-xl "
            />
          </CardItem>
        )}
        <CardItem
          translateZ="80"
          className="text-sm mt-2 flex w-full justify-end"
        >
          {`${cert.issueMonth} ${cert.issueYear}`}
          {/* </div> */}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
CertificationCard.propTypes = {
  cert: PropTypes.shape({
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    issueMonth: PropTypes.string,
    issueYear: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
