import React from "react";
import Easytofind from "./Easytofind";
import Exclusive from "./Exclusive";
import Hero from "./hero";
const homepage = () => {
  return (
    <div>
      <Hero />
      <div className="px-[63px]">
        <Easytofind />
        <Exclusive />
      </div>
    </div>
  );
};

export default homepage;
