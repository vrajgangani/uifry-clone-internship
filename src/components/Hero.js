import React from "react";
import Blur from "../assets/images/blur.svg";
import HeroImg from "../assets/images/hero.svg";
import ArrowSvg from "../assets/images/arrow.svg";
import HeroBelt from "../assets/images/hero-2.svg";
import Star from "../assets/images/star.svg";

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="hero-content flex flex-col justify-center px-0 pt-20 ">
          <div className="hero-content-title">
            <h1 className="text-6xl font-bold mb-5" >
              Make The Best Financial Decisions
            </h1>
            <p className="mb-5 font-regular text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="flex items-center ">
            <button className="btn text-white bg-black hover:bg-black font-medium text-sm px-4 py-3 text-center hover:bg-primary rounded-sm div-center">
              Get Started
              <span>
                <img
                  className="ms-4"
                  src={ArrowSvg}
                  alt="arrow"
                />
              </span>
            </button>

            <div className="watch-video div-center ms-6 cursor-pointer">
              <svg
                className="icon"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                <path
                  d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              <span className="font-medium ms-2">Watch Video</span>
            </div>
          </div>

          <div className="hero-content-blur-image">
            <img src={Blur} />
          </div>
          <div className="hero-content-star-image">
            <img src={Star} />
          </div>
          <div className="hero-content-belt-image mt-3">
            <img src={HeroBelt} />
          </div>
        </div>
        <div className="hero-image" style={{position:"relative", left:"-10px", top:"-30px"}}>
          <img src={HeroImg} />
        </div>
      </div>
    </div>
  );
};
