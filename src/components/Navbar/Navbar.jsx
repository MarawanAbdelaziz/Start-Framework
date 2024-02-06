import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const location = useLocation();
  if ("/about" == location.pathname) {
    document.title = "About";
  } else if ("/portfolio" == location.pathname) {
    document.title = "Portfolio";
  } else if ("/contact" == location.pathname) {
    document.title = "Contact";
  } else if ("/" == location.pathname) {
    document.title = "START FRAMEWORK";
  } else {
    document.title = "Error 404";
  }

  return (
    <>
      <nav
        className={`${
          isScrolled == 0 ? "h-28" : "h-[4.5rem]"
        } z-10 transition-all duration-500 ease-in-out fixed w-full bg-white border-gray-200 dark:bg-[#2C3E50]`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span
              className={`${
                isScrolled == 0 ? "translate-y-8" : "translate-y-2.5"
              } transition-all duration-500 self-center text-[32px] font-bold whitespace-nowrap dark:text-white`}
            >
              START FRAMEWORK
            </span>
          </Link>

          <div className="flex md:order-1">
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isScrolled == 0 ? "translate-y-8" : "translate-y-2.5"
            } transition-all duration-500 items-center justify-between hidden w-full md:flex md:w-auto md:order-2`}
          >
            <ul className="flex flex-col p-2 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
              <li
                className={`${
                  location.pathname == "/about"
                    ? "bg-[#1ABC9C] p-2 rounded-lg"
                    : "p-2"
                }`}
              >
                <Link
                  to={"about"}
                  className="block py-2 px-3 text-white font-bold md:p-0 "
                >
                  ABOUT
                </Link>
              </li>
              <li
                className={`${
                  location.pathname == "/portfolio"
                    ? "bg-[#1ABC9C] p-2 rounded-lg"
                    : "p-2"
                }`}
              >
                <Link
                  to={"portfolio"}
                  className="block py-2 px-3 md:p-0 text-white font-bold"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li
                className={`${
                  location.pathname == "/contact"
                    ? "bg-[#1ABC9C] p-2 rounded-lg"
                    : "p-2"
                }`}
              >
                <Link
                  to={"contact"}
                  className="block py-2 px-3 md:p-0 text-white font-bold"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
