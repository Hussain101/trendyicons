import React from "react";
import category from "./icons/Category.png";
import shirt from "./icons/shirt.png";
import froq from "./icons/froq.png";
import suit from "./icons/suit.png";
import boat from "./icons/boat.png";
import color from "./icons/colored.png";
const Exclusive = () => {
  return (
    <>
      <div className="my-3">
        <h2 className="text-2xl font-semibold">Exclusive Icon Packs</h2>
        <div className="my-9 flex">
          <div className="exclusive_box">
            <div className="flex">
              <img src={category} className="p-7" alt="" />
              <img src={category} className="p-7" alt="" />
              <img src={category} className="p-7" alt="" />
            </div>
            <div className="flex">
              <img src={category} className="p-7" alt="" />
              <img src={category} className="p-7" alt="" />
              <img src={category} className="p-7" alt="" />
            </div>
          </div>
          <div className="exclusive_box mx-4">
            <div className="flex">
              <img src={color} className="p-7" alt="" />
              <img src={color} className="p-7" alt="" />
              <img src={color} className="p-7" alt="" />
            </div>
            <div className="flex">
              <img src={color} className="p-7" alt="" />
              <img src={color} className="p-7" alt="" />
              <img src={color} className="p-7" alt="" />
            </div>
          </div>
          <div className="exclusive_box">
            <div className="flex">
              <img src={shirt} className="p-7" alt="" />
              <img src={boat} className="p-7" alt="" />
              <img src={shirt} className="p-7" alt="" />
            </div>
            <div className="flex">
              <img src={froq} className="p-7" alt="" />
              <img src={suit} className="p-7" alt="" />
              <img src={shirt} className="p-7" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-28">
        <h2 className="text-2xl font-semibold">Top Free Icon Packs</h2>
        <div className="my-9 flex">
          <div className="exclusive_box">
            <div className="flex">
              <img src={category} className="p-7" alt="" />
              <img src={category} className="p-7" alt="" />
              <img src={category} className="p-7" alt="" />
            </div>
            <div className="flex">
              <img src={category} className="p-7" alt="" />
              <img src={category} className="p-7" alt="" />
              <img src={category} className="p-7" alt="" />
            </div>
          </div>
          <div className="exclusive_box mx-4">
            <div className="flex">
              <img src={color} className="p-7" alt="" />
              <img src={color} className="p-7" alt="" />
              <img src={color} className="p-7" alt="" />
            </div>
            <div className="flex">
              <img src={color} className="p-7" alt="" />
              <img src={color} className="p-7" alt="" />
              <img src={color} className="p-7" alt="" />
            </div>
          </div>
          <div className="exclusive_box">
            <div className="flex">
              <img src={shirt} className="p-7" alt="" />
              <img src={boat} className="p-7" alt="" />
              <img src={shirt} className="p-7" alt="" />
            </div>
            <div className="flex">
              <img src={froq} className="p-7" alt="" />
              <img src={suit} className="p-7" alt="" />
              <img src={shirt} className="p-7" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-2xl my-2 text-center font-semibold">
        <p>Discover our best features that will make your work</p>
        <p>
          super <span className="text-[#FF4801]"> Easy </span> and
          <span className="text-[#FF4801]"> Fast </span>.
        </p>
      </div>
    </>
  );
};

export default Exclusive;
