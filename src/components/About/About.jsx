import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center  ">
        <h2 className="text-[40px] font-bold text-white">ABOUT COMPONENT</h2>
        <div className="flex items-center mt-2 mb-4">
          <div className="w-20 me-3 h-1 bg-white"></div>
          <FaStar className=" text-white text-xl " />
          <div className="w-20 ms-3 h-1 bg-white"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-[60%] text-white">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
