import React from "react";
import "./home_service.css";
import { Category2, Cloud, GlobalSearch, User } from "iconsax-react";
const HomeService = () => {
  const iconSize = 40;
  const serviceCards = [
    {
      icon: <GlobalSearch color="white" variant="Outline" size={iconSize} />,
      title: "Web Development",
      description: `Custom website development 
using modern technologies and 
responsive design, tailored to 
meet your unique business 
needs, ensure fast performance, 
and deliver seamless user 
experiences across all devices`,
    },
    {
      icon: <Category2 color="white" variant="Outline" size={iconSize} />,
      title: "Mobile Apps",
      description: `Native and cross-platform mobile 
app development for iOS & 
Android.`,
    },
    {
      icon: <Cloud color="white" variant="Outline" size={iconSize} />,
      title: "Cloud Solutions",
      description: ` Secure cloud infrastructure setup and 
migration services.`,
    },
  ];
  return (
    <div className="section-wrapper px-16 py-32 bg-white/5 rounded-2xl relative overflow-hidden mx-2 md:mx-auto">
      {/* background tiel  */}
      <div className="background-blue"></div>
      {/* background purple */}
      <div className="background-purple"></div>
      {/* flex div */}
      <section className="flex flex-col md:flex-row gap-8 z-10 relative ">
        <div className="text-white max-w-[700px]">
          {/* title */}
          <h1 className="text-5xl md:text-7xl font-bold ">
            Building the Future with Mella Solutions
          </h1>
          {/* description */}
          <p className="mt-6">
            We craft powerful digital experiences through modern web
            development, intuitive mobile applications, and scalable cloud
            solutions. Whether you're launching a startup or transforming your
            business, our technology helps you innovate, grow, and stay ahead in
            the digital era.
          </p>
        </div>
        <div className="flex flex-col gap-8 w-full">
          {/* cards */}

          {serviceCards.map((card, index) => (
            <div
              className="bg-white/5 rounded-2xl px-8 py-8 border-2 border-gray-100/10
              w-full max-w-[540px] 
              "
              style={{}}
              key={index}
            >
              {/* icon */}
              <div className="mb-8 inline-block">{card.icon} </div>
              {/* title */}
              <h2 className="mb-2 font-bold text-2xl text-white">
                {card.title}
              </h2>
              {/* description */}
              <p className=" text-white/80">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="background-green"></div>
    </div>
  );
};

export default HomeService;
