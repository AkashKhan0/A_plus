import React, { useState } from "react";
import logo from "../assets/logo.png";
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

const Navbar = ({ toggleNavbar }) => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <>
      <div className={`navbar w-full h-full relative`}>
        <div className="navItems py-10 px-5 flex flex-col">
          <div className="logo mb-10 w-full h-fit flex items-center justify-center">
            <Link to="/" onClick={toggleNavbar}>
              <img src={logo} alt="" className="w-40 h-24 object-contain" />
            </Link>
          </div>

          {/* menu items */}
          <div className={`list duration-200 px-2 ${isActive("/")}`}>
            <Link to="/" onClick={toggleNavbar}>
              <p className="flex items-center gap-3">
                <FaHome />
                home
              </p>
            </Link>
          </div>

          {/* menu items */}
          <div className={`list duration-200 px-2 ${isActive("/about")}`}>
            <Link to="/about" onClick={toggleNavbar}>
              <p className="flex items-center gap-3">
                <FaUser />
                about
              </p>
            </Link>
          </div>

          {/* menu items */}
          <div className={`list duration-200 px-2 ${isActive("/services")}`}>
            <Link to="/services" onClick={toggleNavbar}>
              <p className="flex items-center gap-3">
                <HiWrenchScrewdriver />
                services
              </p>
            </Link>
          </div>

          {/* menu items */}
          <div className={`list duration-200 px-2 ${isActive("/contact")}`}>
            <Link to="/contact" onClick={toggleNavbar}>
              <p className="flex items-center gap-3">
                <IoCall />
                contact
              </p>
            </Link>
          </div>

          {/* menu items */}
          <div className={`list duration-200 px-2 ${isActive("/blog")}`}>
            <Link to="/blog" onClick={toggleNavbar}>
              <p className="flex items-center gap-3">
                <FaBloggerB />
                blog
              </p>
            </Link>
          </div>

          {/* menu items */}
          <div className={`list duration-200 px-2 ${isActive("/projects")}`}>
            <Link to="/projects" onClick={toggleNavbar}>
              <p className="flex items-center gap-3">
                <FaProjectDiagram />
                projects
              </p>
            </Link>
          </div>

          {/* menu items */}
          <div className={`list duration-200 px-2 ${isActive("/upcoming")}`}>
            <Link to="/upcoming" onClick={toggleNavbar}>
              <p className="flex items-center gap-3">
                <MdUpcoming />
                upcoming
              </p>
            </Link>
          </div>
        </div>
        <div className="social flex items-center justify-center gap-5 flex-wrap w-full">
          <div className="navFoot">
            <FaFacebook className="icons" />
            <div className="name">Facebook</div>
            <div className="shap"></div>
          </div>
          <div className="navFoot">
            <FaInstagram className="icons" />
            <div className="name">Instagram</div>
            <div className="shap"></div>
          </div>
          <div className="navFoot">
            <a
              href="https://wa.me/8801850219432?text=Hi!%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="icons" />
            </a>
            <div className="name">Whatsapp</div>
            <div className="shap"></div>
          </div>
          <div className="navFoot">
            <FaLinkedin className="icons" />
            <div className="name">Linkedin</div>
            <div className="shap"></div>
          </div>
          <div className="navFoot">
            <FaYoutube className="icons" />
            <div className="name">Youtube</div>
            <div className="shap"></div>
          </div>
          <div className="navFoot">
            <FaTiktok className="icons" />
            <div className="name">Tiktok</div>
            <div className="shap"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
