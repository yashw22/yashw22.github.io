import Pill from "../components/Pill";

export default function HeaderBtn({ section, setCurrentPage, enabled = false }) {
  return (
    <div className="clickable" onClick={()=> setCurrentPage(section)}>
      <Pill
        className="headerBtn hover:bg-light-primary hover:dark:bg-dark-primary"
        enabled={enabled}
      >
        {section}
      </Pill>
    </div>
  );
}
