import React from "react";
import { BiSolidHandRight } from "react-icons/bi";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbHexagonNumber3,
  TbHexagonNumber4,
  TbHexagonNumber5,
} from "react-icons/tb";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Career = () => {
  return (
    <>
      <div className="re_bg"></div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto my-10">
        we are hiring
        <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
      </h1>
      <div className="w-full h-full py-10 relative text-white">
        <p className="re_p">
          At A Plus Advertising, we are committed to delivering high-quality
          services to meet your expectations. However, we understand that there
          may be circumstances where a refund is necessary. Below, we outline
          our refund policy for all services :
        </p>
        <h1 className="re_title">
          <TbCircleNumber1 />
          Developer
        </h1>
        <p className="re_p">
          Refunds are only applicable if the request is made within 7 days of
          service delivery or project commencement, depending on the service.
          Refunds will be processed after evaluating the nature of the request
          and compliance with the terms listed below. Refunds will not be
          provided for completed services, approved work, or if the project has
          progressed beyond a certain milestone (see individual service terms
          below).
        </p>
      </div>
      <div className="w-full py-10"></div>
    </>
  );
};

export default Career;
