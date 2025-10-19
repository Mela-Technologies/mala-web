import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HomeAbout from "./component/home/after_hero/after_hero";
import HomeService from "./component/home/home_service/home_service";
import Footer from "./footer/footer";
import HomePage from "./home/home";
import HomeProducts from "./component/products/products";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black h-min-100 overflow-hidden">
        <div className="">
          <HomePage />
          <span className="block my-28"></span>
          <HomeAbout />
          <span className="block my-28"></span>
          <HomeService />
          <span className="block my-28"></span>
          <HomeProducts />
          <span className="block my-28"></span>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
