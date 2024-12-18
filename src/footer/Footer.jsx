import { Fragment, useContext } from "react";
import { DataContext } from "../helpers/Contexts";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  const data = useContext(DataContext);
  return (
    <div className="bottom-0 flex flex-col justify-center flex-1">
      <div>
        <div className="mt-10 flex flex-col items-center justify-center md:flex-row md:justify-around">
          <div className="text-2xl">{data.name}</div>
          <div className="my-2 flex space-x-1">
            {data.links.map((link) => (
              <div key={link}>{link[0]}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-2 text-lg flex items-center justify-center flex-col space-x-0 md:flex-row md:space-x-3">
        {data.sections.map((link, index) => (
          <Fragment key={link}>
            <div>{link}</div>
            {index < data.sections.length - 1 && (
              <>
                <div className="hidden md:inline">/</div>
                <div className=" border-b-2 w-20 border-light-btn dark:border-dark-btn theme-anim md:hidden"></div>
              </>
            )}
          </Fragment>
        ))}
      </div>

      <div className="my-2 flex items-center justify-center space-x-1">
        <FaRegCopyright />
        <div>2024 - Made by {data.name}</div>
      </div>
    </div>
  );
}
