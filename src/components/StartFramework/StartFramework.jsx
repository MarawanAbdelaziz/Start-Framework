import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/avataaars.svg";
const StartFramework = () => {
  return (
    <>
      <div className="w-[400px] flex flex-col justify-center items-center h-screen mx-auto">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Start Framework</title>
        </Helmet>

        <img className="w-[70%]" src={`${img1}`} alt="" />

        <h2 className="text-[40px] font-bold mt-5">START FRAMEWORK</h2>
        <div className="flex items-center mt-2 mb-4">
          <div className="w-24 me-3 h-1 bg-white"></div>
          <FaStar className=" text-white text-xl " />
          <div className="w-24 ms-3 h-1 bg-white"></div>
        </div>
        <p className="font-medium">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
};

export default StartFramework;
