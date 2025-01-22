import React, { useState } from "react";
import faqData from "../assets/faq";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { BsPatchQuestionFill } from "react-icons/bs";
import homebg from "../assets/home_bg.jpg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="con_bg">
        <img src={homebg} alt="" />
      </div>
      <div className="flex flex-col gap-5 my-20 w-full h-auto relative">
        <div className="flex-1 flex flex-col faq w-full h-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit mb-10">
            faq
            <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
          </h1>
          {faqData.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => toggleAnswer(index)}
                className="text-xl sm:text-2xl md:text-3xl font-medium que cursor-pointer mt-3 flex items-center gap-5"
              >
                <BsPatchQuestionFill />
                {item.question}
                {activeIndex === index ? <FaAngleDown /> : <FaAngleRight />}
              </div>
              {activeIndex === index && (
                <div className="text-base font-normal p-3 mt-2 relative answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
