import PropTypes from "prop-types";
import { CardBody, CardContainer, CardItem } from "./Card3D";
import Pill from "../components/Pill";

export default function ProjectCard({ project }) {
  return (
    <CardContainer>
      <CardBody className="clickable group/card p-2 border-2 rounded-xl border-light-text/60 dark:border-dark-text">
        <CardItem translateZ="100" className="text-xl md:text-2xl mb-2">
          {project.title}
        </CardItem>
        {project.icon && (
          <CardItem translateZ="50" className="w-full mb-1">
            <img
              src={project.icon}
              className="h-auto w-full object-cover rounded-xl"
            />
          </CardItem>
        )}

        <CardItem translateZ="80">
          {project.current
            ? "Construction in progress..."
            : `${project.endMonth} ${project.endYear}`}
        </CardItem>
        <CardItem
          translateZ="80"
          className="w-full flex lg:justify-end flex-wrap space-x-2"
        >
          {project.stack.map((tool) => (
            <div key={tool} className="mt-2">
              <Pill className="text-sm md:text-md">{tool}</Pill>
            </div>
          ))}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    current: PropTypes.bool.isRequired,
    endMonth: PropTypes.string,
    endYear: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
