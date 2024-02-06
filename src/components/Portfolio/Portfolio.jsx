import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaPlus, FaStar } from "react-icons/fa6";

import image1 from "../../assets/poert1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";

const Portfolio = () => {
  const [imgCurrent, setUrl] = useState("");
  const [outImgae, setoutImgae] = useState("false");

  const imgArray = [image1, image2, image3, image1, image2, image3];
  function closedImg() {
    setoutImgae(false);
  }

  return (
    <>
      <div className=" pb-24 bg-gradient-to-b from-[#2C3E50]  pt-32 to-[#bdc3c7] flex flex-col justify-center items-center relative ">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio</title>
        </Helmet>

        <h2 className="text-[40px] font-bold mt-7 text-white">
          PORTFOLIO COMPONENT
        </h2>

        <div className="flex items-center mt-2 mb-4">
          <div className="w-20 me-3 h-1 bg-white"></div>
          <FaStar className=" text-white text-xl " />
          <div className="w-20 ms-3 h-1 bg-white"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-11 w-[70%] ms-10">
          {imgArray.map((myImg, index) => (
            <button
              key={index}
              onClick={() => {
                setUrl(myImg);
                setoutImgae(true);
              }}
            >
              <div className="w-[90%] relative group">
                <img className="w-full rounded-lg" src={myImg} alt="home" />

                <div className="group-hover:opacity-100 opacity-0 duration-500 absolute inset-0 flex justify-center items-center rounded-lg bg-[#29B197] bg-opacity-90">
                  <FaPlus className="text-8xl font-normal" />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div
          className={`h-screen ${
            outImgae == true ? "absolute" : "hidden"
          }  w-full z-20 flex flex-col justify-center items-center`}
        >
          <div
            onClick={closedImg}
            className={` bg-blue-600 bg-opacity-35 h-screen w-full`}
          ></div>
          <img
            className="w-[350px] md:w-[400px] lg:w-[450px] xl:w-[550px] z-30 absolute"
            src={`${imgCurrent}`}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
