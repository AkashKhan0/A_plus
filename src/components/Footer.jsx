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
import homebg from "../assets/footer.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-fit relative px-5 sm:px-10 md:px-20 m-auto footer pt-10">
        <div className="con_bg">
          <img src={homebg} alt="" />
        </div>
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
                <IoMdMail className="cursor-pointer w-4 mt-1" />
                aplusadvertisinglimited@gmail.com
              </p>
            </a>
            <a
              href="https://www.google.com/maps?q=Your+Address"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a
                href="https://maps.app.goo.gl/JnBpZNefaX4dUrQT8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="f-list flex items-start gap-2">
                  <RiRoadMapFill className="cursor-pointer w-4 mt-1" />
                  214, Tejgaon Ind.Area, Tejgaon, Dhaka-1208
                </p>
              </a>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 flex-wrap my-10">
          <a
            href="https://facebook.com/profile.php?id=61571925213316"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="fc-icon" />
          </a>
          <FaInstagram className="fc-icon" />
          <FaLinkedinIn className="fc-icon" />

          <a
            href="https://www.youtube.com/@aplusadvertisinglimited"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="fc-icon" />
          </a>
          <a
            href="https://wa.me/8801850219432?text=Hi!%20I%20need%20assistance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="fc-icon" />
          </a>
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
