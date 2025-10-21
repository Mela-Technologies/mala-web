import React from "react";
import "./product.css";
import appHome from "../../assets/appHome.png";
const HomeProducts = () => {
  return (
    <div className="section-wrapper px-16 py-32 bg-white/5 rounded-2xl relative overflow-hidden mx-2 md:mx-auto">
      <div className="p-grid-background opacity-50"></div>
      <div className="map-background"></div>
      <div className="p-background-blue"></div>
      <h1 className="max-w-[800px] ml-auto text-5xl md:text-6xl text-white font-bold">
        Mella Innovation Products
      </h1>

      {/* School management */}
      <div className="flex-col md:flex-row flex gap-4  justify-between mt-32 z-10 relative">
        {/* title */}
        <h1 className="text-white text-4xl">School management</h1>
        {/* description */}
        {/* card explaining about product */}
        <div className="text-white max-w-[700px]">
          {/* img */}
          <div className="rounded-2xl overflow-clip">
            <img src={appHome} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
