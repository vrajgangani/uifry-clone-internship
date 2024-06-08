import React from "react";
import TestimonialImg from "../assets/images/testimonials.svg";
import Blur from "../assets/images/blur.svg";
import Star from "../assets/images/star.svg";
import UserSvg from "../assets/images/user.svg";
import UserSecSvg from "../assets/images/user-sec.svg";

export const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-heading flex flex-col justify-center items-center">
        <span className="advantages-tagline font-medium">TESTIMONIAL</span>
        <h1 className="text-5xl font-bold mb-4 px-0 sm:px-0 md:px-0  lg:px-72 xl:px-72 text-center">
          What Our Users Say About Us?
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
        <div className="testimonial-image">
          <div className="testimonial-main-image">
            <img src={TestimonialImg} alt="feature-img" />
          </div>
          <div className="testimonial-content-star-image">
            <img src={Star} alt="background-star" />
          </div>
          <div className="testimonial-content-blue-image">
            <img src={Blur} alt="background-star" />
          </div>
        </div>
        <div className="testimonial-content flex flex-col justify-center relative">
          <div className="testimonial-content-star-image-2 absolute">
          <img src={Star} alt="background-star" />
          </div>
          <div className="testimonial-txt-bx ">
            <h2 className="font-bold text-2xl mb-4">
              The Best Financial Accounting App Ever!
            </h2>
            <p className="font-regular mb-4 text-gray-500">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
          </div>

          <div className="user-icon flex">
            <div>
              <img src={UserSvg} alt="user-svg" />
            </div>
            <div style={{ marginTop: "5px", marginLeft: "10px" }}>
              <img style={{ opacity: "50%" }} src={UserSecSvg} alt="user-svg" />
            </div>
          </div>

          <div className="user-name font-bold">
            <h4 style={{ color: "black", marginTop: "3%" }}>Nick Jonas</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
