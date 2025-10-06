import "./App.css";
import HomeAbout from "./component/home/after_home";
import HomePage from "./home/home";

function App() {
  return (
    <div className="bg-black h-min-100 overflow-hidden">
      <div className="">
        <HomePage />
        <HomeAbout />
      </div>
    </div>
  );
}

export default App;
