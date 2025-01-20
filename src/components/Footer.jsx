import React from "react";
import logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiRoadMapFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import pay1 from "../assets/pay1.png";
import pay2 from "../assets/pay2.png";
import pay3 from "../assets/pay3.png";
import pay4 from "../assets/pay4.jpg";
import pay5 from "../assets/pay5.png";
import pay6 from "../assets/pay6.jpg";
import pay7 from "../assets/pay7.png";
import pay8 from "../assets/pay8.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-fit relative px-5 sm:px-10 md:px-20 m-auto footer pt-10">
        <div className="blurr"></div>
        <div className="max-w-screen-xl m-auto py-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5">
          <div className="">
            <img src={logo} alt="" className="w-32" />
            <p className="text-white font-normal text-lg tracking-wider mt-5">
              Excellence in Business & Communication
            </p>
          </div>
          <div className="">
            <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-white mb-5">
              company
            </h1>

            <p className="f-list capitalize" onClick={() => navigate("/blog")}>
              blog
            </p>
            <p className="f-list capitalize" onClick={() => navigate("/about")}>
              about us
            </p>
            <p
              className="f-list capitalize"
              onClick={() => navigate("/privecy")}
            >
              Privacy Policy
            </p>
            <p
              className="f-list capitalize"
              onClick={() => navigate("/refound")}
            >
              refound policy
            </p>
            <p
              className="f-list flex items-center gap-2"
              onClick={() => navigate("/career")}
            >
              Career <span>hiring</span>
            </p>
          </div>
          <div className="">
            <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-white mb-5">
              Quick Contact
            </h1>

            <a href="tel:+8801850219432">
              <p className="f-list flex items-start gap-2">
                <FaPhone className="cursor-pointer mt-1" />
                +88 01850219432
              </p>
            </a>
            <a
              href="https://wa.me/8801850219432?text=Hi!%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="f-list flex items-start gap-2">
                <FaWhatsapp className="cursor-pointer mt-1" />
                +88 01850219432
              </p>
            </a>
            <a href="mailto:aplusadvertisinglimited@gmail.com?subject=Inquiry&body=Hi, I have a question about...">
              <p className="f-list flex items-start gap-2">
                <IoMdMail className="cursor-pointer mt-1" />
                aplusadvertisinglimited@gmail.com
              </p>
            </a>
            <a
              href="https://www.google.com/maps?q=Your+Address"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="f-list flex items-start gap-2">
                <RiRoadMapFill className="cursor-pointer mt-1" />
                214, Tejgaon Ind.Area, Tejgaon, Dhaka-1208
              </p>
            </a>
          </div>
        </div>
        <div className="flex items-center flex-wrap justify-center relative mt-5 gap-10">
          <img src={pay5} alt="" className="pay_card" />
          <img src={pay6} alt="" className="pay_card" />
          <img src={pay7} alt="" className="pay_card" />
          <img src={pay8} alt="" className="pay_card" />
          <img src={pay1} alt="" className="pay_card" />
          <img src={pay2} alt="" className="pay_card" />
          <img src={pay3} alt="" className="pay_card" />
          <img src={pay4} alt="" className="pay_card" />
        </div>
        <div className="flex items-center justify-center relative p-5">
          <p className="text-white font-light text-center text-lg tracking-wider">
            A Plus Advertising © 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
