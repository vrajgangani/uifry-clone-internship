import React from "react";
import FeatureImg from "../assets/images/features.svg";
import Star from "../assets/images/star.svg";
import Blur from "../assets/images/blur.svg";

export const Features = () => {
  return (
    <div className="features-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
      <div className="features-image">
        <div className="fetures-main-image">
          <img src={FeatureImg} alt="feature-img"/>
        </div>
        <div className="features-content-star-image">
          <img src={Star} alt="background-star" />
        </div>
        <div className="features-content-blur-image">
          <img src={Blur} alt="background-blur" />
        </div>
      </div>
      <div className="features-content flex items-center">
      {/* <div className="features-content-blur-text">
          <img src={Blur} alt="background-blur" />
        </div>  */}
        <div className="feature-txt-bx">
          <span className="feature-tagline text-primary font-medium mb-5">
            FEATURES
          </span>
          <h1 className="text-5xl font-bold mb-8">Uifry Premium</h1>
          <div
            className="txt-bx1"
            style={{ display: "flex", alignItems: "center", marginTop: "10px",marginBottom:"10px" }}
          >
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L9.6985 6.20599C9.44454 7.22185 9.31756 7.72978 9.05308 8.14309C8.81915 8.50868 8.50868 8.81915 8.14309 9.05308C7.72978 9.31756 7.22185 9.44454 6.20599 9.6985L1 11L6.20599 12.3015C7.22185 12.5555 7.72978 12.6824 8.14309 12.9469C8.50868 13.1808 8.81915 13.4913 9.05309 13.8569C9.31756 14.2702 9.44454 14.7782 9.6985 15.794L11 21L12.3015 15.794C12.5555 14.7782 12.6824 14.2702 12.9469 13.8569C13.1808 13.4913 13.4913 13.1808 13.8569 12.9469C14.2702 12.6824 14.7782 12.5555 15.794 12.3015L21 11L15.794 9.6985C14.7782 9.44454 14.2702 9.31756 13.8569 9.05308C13.4913 8.81915 13.1808 8.50868 12.9469 8.14309C12.6824 7.72978 12.5555 7.22185 12.3015 6.20599L11 1Z"
                  stroke="#FF5555"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="font-bold ms-2">Budgeting Intervals</h2>
          </div>
          <p className="font-regular mb-8 text-gray-500">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div
            className="txt-bx1"
            style={{ display: "flex", alignItems: "center", marginTop: "15px" ,marginTop: "10px",marginBottom:"10px"}}
          >
            <span>
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.50002V11M10 11L18.5 6.27773M10 11L1.5 6.27773M10 11V20.5M18.5 15.7222L10.777 11.4317C10.4934 11.2741 10.3516 11.1954 10.2015 11.1645C10.0685 11.1371 9.93146 11.1371 9.79855 11.1645C9.64838 11.1954 9.50658 11.2741 9.22297 11.4317L1.5 15.7222M19 15.0586V6.94147C19 6.59883 19 6.4275 18.9495 6.27471C18.9049 6.13953 18.8318 6.01545 18.7354 5.91076C18.6263 5.79242 18.4766 5.70922 18.177 5.54282L10.777 1.43171C10.4934 1.27415 10.3516 1.19537 10.2015 1.16448C10.0685 1.13715 9.93146 1.13715 9.79855 1.16448C9.64838 1.19537 9.50658 1.27415 9.22297 1.43171L1.82297 5.54282C1.52345 5.70922 1.37369 5.79242 1.26463 5.91076C1.16816 6.01545 1.09515 6.13953 1.05048 6.27471C1 6.42751 1 6.59883 1 6.94147V15.0586C1 15.4012 1 15.5725 1.05048 15.7253C1.09515 15.8605 1.16816 15.9846 1.26463 16.0893C1.37369 16.2076 1.52345 16.2908 1.82297 16.4572L9.22297 20.5683C9.50658 20.7259 9.64838 20.8047 9.79855 20.8356C9.93146 20.8629 10.0685 20.8629 10.2015 20.8356C10.3516 20.8047 10.4934 20.7259 10.777 20.5683L18.177 16.4572C18.4766 16.2908 18.6263 16.2076 18.7354 16.0893C18.8318 15.9846 18.9049 15.8605 18.9495 15.7253C19 15.5725 19 15.4012 19 15.0586Z"
                  stroke="#FF5555"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="font-bold ms-2">Budgeting Intervals</h2>
          </div>
          <p className="font-regular mb-8 text-gray-500">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div
            className="txt-bx1"
            style={{ display: "flex", alignItems: "center", marginTop: "15px" ,marginTop: "10px",marginBottom:"10px"}}
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 16H8M8 16V3.5M8 16L3.5 20.5M3.5 8H16M16 8V20.5M16 8L20.5 3.5M21 15.3373V3.8C21 3.51997 21 3.37996 20.9455 3.273C20.8976 3.17892 20.8211 3.10243 20.727 3.0545C20.62 3 20.48 3 20.2 3H8.66274C8.41815 3 8.29586 3 8.18077 3.02763C8.07873 3.05213 7.98119 3.09253 7.89172 3.14736C7.7908 3.2092 7.70432 3.29568 7.53137 3.46863L3.46863 7.53137C3.29568 7.70432 3.2092 7.7908 3.14736 7.89172C3.09253 7.98119 3.05213 8.07873 3.02763 8.18077C3 8.29586 3 8.41815 3 8.66274V20.2C3 20.48 3 20.62 3.0545 20.727C3.10243 20.8211 3.17892 20.8976 3.273 20.9455C3.37996 21 3.51997 21 3.8 21H15.3373C15.5818 21 15.7041 21 15.8192 20.9724C15.9213 20.9479 16.0188 20.9075 16.1083 20.8526C16.2092 20.7908 16.2957 20.7043 16.4686 20.5314L20.5314 16.4686C20.7043 16.2957 20.7908 16.2092 20.8526 16.1083C20.9075 16.0188 20.9479 15.9213 20.9724 15.8192C21 15.7041 21 15.5818 21 15.3373Z"
                  stroke="#FF5555"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="font-bold ms-2">Budgeting Intervals</h2>
          </div>
          <p className="font-regular mb-8 text-gray-500">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
