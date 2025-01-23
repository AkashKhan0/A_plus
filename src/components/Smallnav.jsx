import React from "react";
import {
  FaHome,
  FaUser,
  FaBloggerB,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdUpcoming } from "react-icons/md";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { RiArrowUpDownFill } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineSupportAgent, MdAnimation } from "react-icons/md";
import { GiCardPick } from "react-icons/gi";

const Smallnav = () => {
  return (
    <>
      <div className="hidden sm:hidden md:block">
        <Link to="">
          <div className="flex items-center text-white text-base small_items">
            <div className="icon_sm_nav">
              <FaHome />
            </div>
            <div className="name_sm_nav">home</div>
          </div>
        </Link>
        <Link to="/services">
          <div className="flex items-center text-white text-base small_items">
            <div className="icon_sm_nav">
              <HiWrenchScrewdriver />
            </div>
            <div className="name_sm_nav">services</div>
          </div>
        </Link>

        <Link to="/hire">
          <div className="flex items-center text-white text-base small_items">
            <div className="icon_sm_nav">
              <GiCardPick />
            </div>
            <div className="name_sm_nav">hire us</div>
          </div>
        </Link>

        <Link to="/contact">
          <div className="flex items-center text-white text-base small_items">
            <div className="icon_sm_nav">
              <IoCall />
            </div>
            <div className="name_sm_nav">contact</div>
          </div>
        </Link>
        <Link to="/about">
          <div className="flex items-center text-white text-base small_items">
            <div className="icon_sm_nav">
              <FaUser />
            </div>
            <div className="name_sm_nav">about</div>
          </div>
        </Link>
        <Link to="/blog">
          <div className="flex items-center text-white text-base small_items">
            <div className="icon_sm_nav">
              <FaBloggerB />
            </div>
            <div className="name_sm_nav">blog</div>
          </div>
        </Link>
        <Link to="/projects">
          <div className="flex items-center text-white text-base small_items">
            <div className="icon_sm_nav">
              <FaProjectDiagram />
            </div>
            <div className="name_sm_nav">projects</div>
          </div>
        </Link>
        <Link to="/upcoming">
          <div className="flex items-center text-white text-base small_items">
            <div className="icon_sm_nav">
              <MdUpcoming />
            </div>
            <div className="name_sm_nav">upcoming</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Smallnav;
