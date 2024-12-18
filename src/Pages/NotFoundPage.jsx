import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="mt-10 flex flex-col items-center space-y-3">
      <div className="text-4xl">404 - Not Found</div>

      <div className="px-4 py-2 w-fit bg-light-btn text-light-btnTxt rounded-lg">
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
}
