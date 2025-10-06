import React from "react";
import Logo from "../assets/logomain.png";
import "./home.css";
import world from "../assets/world.webp";
import star1 from "../assets/star1.svg";
import star2 from "../assets/star2.svg";
// import gridImg from "../assets/grid.svg";
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
      <section className="flex flex-row items-center justify-between w-[100%]">
        {/* Logo */}
        <div className="w-[210px] h-[70]">
          <img
            src={Logo}
            alt="mela-tech logo"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        {/* Navigation */}
        <div className="bg-blue rounded-full nav-wrapper">
          <nav className="flex flex-row gap-2 px-8 py-2 opacity-100 text-white">
            <li className="p-2">Home</li>
            <li className="p-2">AboutUs</li>
            <li className="p-2">Services</li>
            <li className="p-2">Contact</li>
          </nav>
        </div>
        {/*  */}
        <div></div>
      </section>
      {/* background colors */}
      <div className="background-right"></div>
      <div className="background-left"></div>
      {/*hero overlays  */}
      <div className="hero-overlays">
        <img
          className="absolute star-one"
          style={{
            inset: "32% auto auto 40%",
            display: "inline-block",
            zIndex: "20",
          }}
          src={star1}
          alt="start"
        />
        <img
          className="absolute star-two"
          style={{
            inset: "auto auto 15% 30%",
            display: "inline-block",
            zIndex: "20",
          }}
          src={star2}
          alt="start"
        />
      </div>
      {/* hero section */}
      <section className="here-section flex flex-row z-10 relative gap-4 justify-between">
        <div className="grid-background"></div>
        <div
          className="here-title "
          style={{
            marginTop: "200px",
          }}
        >
          <h1 className="text-7xl text-white font-bold">
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
          <div className="hero-button flex flex-row gap-4 justify-center">
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
          className="here-img mt-16"
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
