import "./home.css";
import world from "../assets/world.webp";
import star1 from "../assets/star1.svg";
import star2 from "../assets/star2.svg";
import NavSection from "../nav/nav";
const HomePage = () => {
  return (
    <div
      className="section-wrapper mx-auto pt-4 "
      style={{
        minHeight: "100dvh",
        position: "relative",
      }}
    >
      {/* Top section */}
      <NavSection />
      {/* background colors */}
      <div className="background-right hidden md:block">
        <img src="/image/right-gradient.png" alt="" />
      </div>
      <div className="background-left">
        <img src="/image/left-gradient.png" alt="" />
      </div>
      {/*hero overlays  */}
      <div className="hero-overlays">
        <img className="absolute star-one" src={star1} alt="start" />
        <img className="absolute star-two" src={star2} alt="start" />
      </div>
      {/* hero section */}
      <section className="hero-section flex flex-row z-10 relative gap-4 justify-between px-12 md:px-0">
        <div className="grid-background"></div>
        <div className="hero-title mt-12 md:mt-[200px] ">
          <h1 className="text-6xl md:text-7xl text-white font-bold">
            <span
              style={{
                color: "#00FFFF",
              }}
            >
              Mella Technology{" "}
            </span>{" "}
            <br /> New Possibilities
          </h1>
          <p className="my-4 text-gray-300 max-w-[600px] text-center">
            Melatech Solution is a creative and tech-driven company focused on
            delivering smart, scalable, and user-friendly digital solutions.{" "}
          </p>
          {/* hero-button */}
          <div className="hero-button flex flex-row gap-4 justify-center flex-wrap">
            <button
              className="px-2 py-3 rounded-full text-white w-50 "
              style={{
                background: "linear-gradient(to right,#8673CD,#3080AF)",
              }}
            >
              Service
            </button>
            <button
              className="px-2 py-3 rounded-full text-white w-50"
              style={{
                backgroundColor: "#1B1C1D",
              }}
            >
              Contact-us
            </button>
          </div>
        </div>
        <div
          className="hero-img mt-16"
          style={{
            width: "650px",
            height: "650px",
          }}
        >
          <img
            className="world-img"
            src={world}
            alt="world map"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
