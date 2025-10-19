import React from "react";

const HomeProducts = () => {
  return (
    <div className="section-wrapper px-16 py-32 bg-white/5 rounded-2xl relative overflow-hidden mx-2 md:mx-auto">
      {/* product 1 */}
      <h1 className="text-6xl md:text-7xl text-white font-bold">
        Mella Innovation Products
      </h1>
      {/* description */}
      {/* product list */}
      {/* School management */}
      <div className="flex justify-between">
        <h1>School management</h1>
        {/* card explaining about product */}
        <div className="text-white max-w-[700px]">
          {/* img */}
          <h1 className="text-5xl md:text-7xl font-bold "></h1>
          {/* description */}
          <p className="mt-6">School management</p>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
