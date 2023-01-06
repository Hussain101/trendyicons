import React from "react";
import Navbar from "../components/header";
import Hero_text from "../assessts/Hero Text.png";
import search from "../assessts/search.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
AOS.init({
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease",
});
const home = () => {
  return (
    <div className="h_container ">
      <Navbar />
      <div className="flex flex-col justify-center items-center  h-full">
        <div className="box flex flex-col justify-center items-center -mt-24">
          <div
            data-aos="slide-right"
            data-aos-offset="400"
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            <img src={Hero_text} className="my-5" alt="Herotext" />
          </div>
          <p
            data-aos="slide-left"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1500"
            className="p_hero text-base w-[38%] my-5  text-center"
          >
            You don’t need to download the icons for your project anymore. Now
            they are just <span className="text-black"> 1 click away</span> from
            project. CSS, SVG, ESP, PSD & PNG formats.
          </p>
          {/* for the search area */}
          <div
            data-aos="slide-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1500"
            className="search  flex flex-row w-[434px] rounded-full mt-[60px] p-1"
          >
            <input
              className=" px-4 w-full  "
              type="text"
              name="icon_search"
              id="icon_search"
              placeholder="Search for icons"
            />

            <button className="search_btn p-2 rounded-full  ">
              <img src={search} alt="search" />
            </button>
          </div>
          <p className="text-sm font-medium mt-2 ">
            Popular Now: Tech, Education, User, Social
          </p>
        </div>
      </div>
    </div>
  );
};

export default home;
