import { FaFacebook, FaGlobe, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" bottom-0 w-full">
        <div className="grid grid-rows-3 md:grid-rows-none  md:grid-cols-3  bg-[#2C3E50] text-center ">
          <div className="mt-16 mb-16 md:mt-24 md:mb-24">
            <h3 className="text-3xl font-semibold mb-3">LOCATION</h3>
            <p className="mb-3">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="mt-16 mb-16 md:mt-24 md:mb-24">
            <h3 className="text-3xl font-semibold mb-4">AROUND THE WEB</h3>
            <div className="flex justify-center">
              <FaFacebook className="border rounded-full p-2 me-2 text-4xl" />
              <FaTwitter className="border rounded-full p-2 me-2 text-4xl" />
              <FaLinkedinIn className="border rounded-full p-2 me-2 text-4xl" />
              <FaGlobe className="border rounded-full p-2 me-2 text-4xl" />
            </div>
          </div>
          <div className="mt-16 mb-16 md:mt-24 md:mb-24">
            <h3 className="text-3xl font-semibold mb-2">ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        <div className="w-full bg-[#1A252F] text-center pt-5 pb-7">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
