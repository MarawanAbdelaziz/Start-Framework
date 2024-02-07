import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#2C3E50] to-[#bdc3c7] flex flex-col justify-center items-center">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact</title>
        </Helmet>

        <h2 className="text-[40px] font-bold text-white">CONATCT COMPONENT</h2>
        <div className="flex items-center mt-2 mb-4">
          <div className="w-20 me-3 h-1 bg-white"></div>
          <FaStar className=" text-white text-xl " />
          <div className="w-20 ms-3 h-1 bg-white"></div>
        </div>

        <div className=" w-[50%]">
          <div>
            <h4
              className={`  ${
                userName == "" ? "-translate-x-16" : "translate-x-0"
              } ${
                userName == "" ? "opacity-0" : "opacity-100"
              }   duration-700 `}
            >
              User Name:
            </h4>

            <input
              className=" w-full bg-transparent placeholder-black text-white focus:outline-none border-b rounded-md pt-2 pb-4"
              type="text"
              onInput={(event) => {
                setUserName(event.target.value);
              }}
              placeholder="User name"
            />
          </div>

          <div className="mt-2">
            <h4
              className={`  ${
                userAge == "" ? "-translate-x-16" : "translate-x-0"
              } ${userAge == "" ? "opacity-0" : "opacity-100"}   duration-700 `}
            >
              User age:
            </h4>

            <input
              className=" w-full bg-transparent placeholder-black text-white focus:outline-none outline-none border-b border-white rounded-md pt-2 pb-4"
              type="number"
              onInput={(event) => {
                setUserAge(event.target.value);
              }}
              placeholder="User age"
            />
          </div>

          <div className="mt-2">
            <h4
              className={`  ${
                userEmail == "" ? "-translate-x-16" : "translate-x-0"
              } ${
                userEmail == "" ? "opacity-0" : "opacity-100"
              }   duration-700 `}
            >
              User email:
            </h4>
            <input
              className=" w-full bg-transparent placeholder-black text-white focus:outline-none border-b rounded-md pt-2 pb-4"
              type="email"
              onInput={(event) => {
                setUserEmail(event.target.value);
              }}
              placeholder="User email"
            />
          </div>

          <div className="mt-2">
            <h4
              className={`  ${
                userPassword == "" ? "-translate-x-16" : "translate-x-0"
              } ${
                userPassword == "" ? "opacity-0" : "opacity-100"
              }   duration-700 `}
            >
              User password:
            </h4>
            <input
              className="w-full bg-transparent placeholder-black text-white focus:outline-none border-b rounded-md pt-2 pb-4"
              type="Password"
              onInput={(event) => {
                setUserPassword(event.target.value);
              }}
              placeholder="User password"
            />
          </div>

          <button
            onClick={() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }}
            className={`mt-10 ps-3 pe-3 pt-2 pb-2 bg-[#2C3E50] ${
              userName == "" ||
              userAge == "" ||
              userEmail == "" ||
              userPassword == ""
                ? "hover:translate-x-44"
                : "translate-x-0"
            }  rounded-md`}
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
