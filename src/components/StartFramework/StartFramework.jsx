import { FaStar } from "react-icons/fa";

const StartFramework = () => {
  return (
    <>
      <div className="w-[400px] flex flex-col justify-center items-center h-screen mx-auto">
        <img className="w-[70%]" src="src/assets/avataaars.svg" alt="" />
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
