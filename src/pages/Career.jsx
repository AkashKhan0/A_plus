import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaBriefcase } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlineFile } from "react-icons/ai";

const Career = () => {
  const form = useRef();
  const [buttonState, setButtonState] = useState({
    text: "Submit",
    color: "text-white",
  });

  const resetForm = () => {
    form.current.reset();
    setButtonState({ text: "Submit", color: "text-white" });
  };

  const sendApplication = (e) => {
    e.preventDefault();
    setButtonState({ text: "Please Wait...", color: "text-yellow-500" });

    emailjs
      .sendForm(
        "service_1rd77mj", // Replace with your EmailJS service ID
        "template_ng75r78", // Replace with your EmailJS template ID
        form.current,
        "Xtr-qQB9tG3kVUKtC" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setButtonState({ text: "Success", color: "text-green-500" });
          setTimeout(resetForm, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setButtonState({ text: "Submit", color: "text-red-500" });
          setTimeout(
            () => setButtonState({ text: "Submit", color: "text-black" }),
            5000
          );
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="con_bg"></div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto my-10">
        we are hiring
        <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
      </h1>

      <div className="w-full mb-20 flex items-center justify-center">
        <form
          ref={form}
          onSubmit={sendApplication}
          className="career_form w-full sm:w-2/3 md:w-1/2"
        >
          <div className="mb-4">
            <label className="block mb-2 text-lg text-white font-medium">
              Name
            </label>
            <div className="flex items-center border rounded-md px-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full py-2 px-1 text-white outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2  text-lg text-white font-medium">
              Email
            </label>
            <div className="flex items-center border rounded-md px-2">
              <IoMdMail className="text-gray-500 mr-2" />
              <input
                type="email"
                name="user_email"
                autoComplete="off"
                placeholder="Your Email"
                required
                className="w-full py-2 px-1 text-white outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2  text-lg text-white font-medium">
              Job Position
            </label>
            <div className="flex items-center border rounded-md px-2">
              <FaBriefcase className="text-gray-500 mr-2" />
              <input
                type="text"
                name="user_position"
                placeholder="Job Position"
                required
                className="w-full py-2 px-1 text-white outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2  text-lg text-white font-medium">
              Upload CV
            </label>
            <div className="flex items-center text-white border rounded-md px-2">
              <AiOutlineFile className="text-gray-500 mr-2" />
              <input
                type="file"
                name="cv_file"
                accept=".pdf,.doc,.docx"
                required
                className="w-full py-2 px-1 outline-none text-white bg-transparent"
              />
            </div>
          </div>
          <div className="mt-10 inp_box">
            <button
              type="submit"
              className={`text-xl font-normal uppercase cursor-pointer duration-200 hover:text-red-600 ${buttonState.color}`}
              style={{
                backgroundColor:
                  buttonState.color === "text-yellow-500"
                    ? "yellow"
                    : buttonState.color === "text-green-500"
                    ? "green"
                    : "transparent",
              }}
            >
              {buttonState.text}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Career;
