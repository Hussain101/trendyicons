import React from "react";
import find from "./find_img/find.png";
import edit from "./find_img/edit.png";
import easy from "./find_img/easy.png";
import pricing from "./find_img/pricing.png";
import commercial from "./find_img/commercial.png";
import free from "./find_img/free.png";

const Easytofind = () => {
  return (
    <div className="py-28">
      <div className="">
        {/* Top */}
        <div className="flex w-full ">
          <div className=" py-3 w-[26rem] px-0">
            <img src={find} alt="" className="my-1" />
            <h5 className="text-base font-medium my-1">
              Easy to search and find
            </h5>
            <p className="my-1">
              Find the right icons you're looking for faster with ML powered
              search.
            </p>
          </div>
          <div className=" py-3 w-[26rem] mx-4 px-0">
            <img src={edit} alt="" className="my-1 px-0" />
            <h5 className="text-base font-medium my-1">Stylling & Remixing</h5>
            <p className="my-1">
              You can make simple adjustments to an icon without using design
              software.
            </p>
          </div>
          <div className="py-3 w-[26rem]">
            <img src={easy} alt="" className="my-1" />
            <h5 className="text-base font-medium my-1">Easy to use</h5>
            <p className="my-1">
              All icons provided are optimized & easy to use. You don't even
              need to download icons; simply copy & paste SVG.
            </p>
          </div>
        </div>
        {/* bottom */}
        <div className="flex w-full ">
          <div className=" py-3 w-[26rem] px-0">
            <img src={pricing} alt="" className="my-1" />
            <h5 className="text-base font-medium my-1">Best Pricing Model</h5>
            <p className="my-1">
              We provide the greatest prices for people who sell icons as well
              as those who buy icons from our website.
            </p>
          </div>
          <div className=" py-3 w-[26rem] mx-4 px-0">
            <img src={commercial} alt="" className="my-1 px-0" />
            <h5 className="text-base font-medium my-1">Commercial Friendly</h5>
            <p className="my-1">
              Most icons are royalty-free and can be used in commercial
              projects.
            </p>
          </div>
          <div className="py-3 w-[26rem]">
            <img src={free} alt="" className="my-1" />
            <h5 className="text-base font-medium my-1">Freemium Assests</h5>
            <p className="my-1">
              Many icons from each icon collection are free to use and those are
              royality-free too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Easytofind;
