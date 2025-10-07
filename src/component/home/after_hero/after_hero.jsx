import { Box2, Profile2User, Rank } from "iconsax-react";
import React from "react";
import "./after_hero.css";
const HomeAbout = () => {
  const iconSize = 40;
  const cardList = [
    {
      icon: <Rank size={iconSize} color="white" variant="Outline" />,
      title: "Young & Energetic Team",
      description: `We’re a passionate group 
of young professionals 
driven by creativity, 
innovation, and a hunger to 
make a real impact`,
    },
    {
      icon: <Box2 size={iconSize} color="white" variant="Outline" />,
      title: "Tailored Solutions",
      description: `Every project is uniquely 
designed to fit your brand, 
goals, and audience no 
templates, just custom 
results.`,
    },
    {
      icon: <Profile2User size={iconSize} color="white" variant="Outline" />,
      title: "User Centered Design",
      description: `From clean layouts to 
smooth user flows, we 
design with real people in 
mind ensuring your users 
enjoy every interaction.`,
    },
  ];
  return (
    <div className="flex flex-row flex-wrap section-wrapper px-2 mx-auto justify-center md:justify-between gap-4 md:gap-2 ">
      {cardList.map((card, index) => (
        <div
          className="bg-white/5 rounded-2xl px-8 py-16 border-2 border-gray-100/10"
          style={{}}
          key={index}
        >
          {/* icon */}
          <div className="mb-24 inline-block">{card.icon} </div>
          {/* title */}
          <h2 className="mb-2 font-bold text-2xl text-white">{card.title}</h2>
          {/* description */}
          <p className="w-95 text-white/80">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeAbout;
