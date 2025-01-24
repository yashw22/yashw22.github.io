export default function NotFoundPage({ setCurrentPage }) {
  return (
    <div className="fixed h-screen w-screen bg-light-bg">
      <div className="mt-10 flex flex-col items-center space-y-3">
        <div className="text-4xl">404 - Not Found</div>

        <div className="px-4 py-2 w-fit bg-light-btn text-light-btnTxt rounded-lg">
          <div onClick={() => setCurrentPage("Home")}>Go to Home Page</div>
        </div>
      </div>
    </div>
  );
}
