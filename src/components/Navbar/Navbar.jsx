// import { Navbar } from "flowbite-react";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Navbar } from 'flowbite-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const location = useLocation();
  return (
    <>
      <Navbar
        className={`${
          isScrolled == 0 ? "md:h-28 h-24" : "md:h-[4.5rem] h-16"
        } z-10 transition-all duration-500 ease-in-out fixed w-full  border-gray-200 bg-[#2C3E50]`}
      >
        <div className="max-w-screen-xl flex flex-row w-full items-center justify-between mx-auto">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span
              className={`${
                isScrolled == 0
                  ? "md:translate-y-5  translate-y-4"
                  : "md:translate-y-0 translate-y-0"
              } transition-all duration-500 self-center ms-3 md:ms-0 text-[27px] md:text-[32px] font-bold whitespace-nowrap dark:text-white`}
            >
              START FRAMEWORK
            </span>
          </Link>
          <Navbar.Toggle
            className={` ${
              isScrolled == 0
                ? "md:translate-y-5  translate-y-4"
                : "md:translate-y-0 translate-y-0"
            } transition-all duration-500 `}
          />

          <Navbar.Collapse
            className={`absolute md:static transition-all duration-500  ${
              isScrolled == 0
                ? "md:translate-y-5 translate-y-36"
                : "md:translate-y-0 translate-y-[126px]"
            } left-0 right-0 md:left-auto md:right-auto md:flex  justify-center items-center bg-[#2C3E50] md:order-2`}
          >
            <Link
              to={"about"}
              className={`${
                location.pathname == "/about"
                  ? "bg-[#1ABC9C] p-2 rounded-lg"
                  : "p-2"
              }`}
            >
              <Navbar.Link className="block py-2 px-3 hover:bg-inherit text-white font-bold md:p-0 ">
                ABOUT
              </Navbar.Link>
            </Link>
            <Link
              to={"portfolio"}
              className={`${
                location.pathname == "/portfolio"
                  ? "bg-[#1ABC9C] p-2 rounded-lg"
                  : "p-2"
              }`}
            >
              <Navbar.Link className="block py-2 px-3 md:p-0 hover:bg-inherit text-white font-bold">
                PORTFOLIO
              </Navbar.Link>
            </Link>
            <Link
              to={"contact"}
              className={`${
                location.pathname == "/contact"
                  ? "bg-[#1ABC9C] p-2 rounded-lg"
                  : "p-2"
              }`}
            >
              <Navbar.Link className="block py-2 px-3 md:p-0 hover:bg-inherit text-white font-bold">
                CONTACT
              </Navbar.Link>
            </Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
