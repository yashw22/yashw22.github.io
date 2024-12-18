// import ThemeBar from "./components/ThemeBar";
import Cursor from "./components/Cursor";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { DataContext } from "./helpers/Contexts";
import ResumeBtn from "./resumebtn/ResumeBtn";

export default function App() {
  const data = {
    name: "Yash Wardhan",
    sections: ["About", "Education", "Internships", "Projects", "Courses"],
    links: ["Linkedin", "Github", "Instagram", "Mail"],
  };

  return (
    <DataContext.Provider value={data}>
      <div className="fixed w-full h-full overflow-x-hidden bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text theme-anim cursor-none">
        <Header />
        <Cursor />
        <ResumeBtn />
        {/* <ThemeBar /> */}
        <div className="text-3xl underline">hiiiiiiiiiiiiiiiiiiiiiiiiii</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <div className="text-3xl underline">Hellooooooooooooooooo</div>
        <Footer />
      </div>
    </DataContext.Provider>
  );
}
