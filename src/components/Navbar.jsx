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
import { RiArrowUpDownFill } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineSupportAgent, MdAnimation } from "react-icons/md";
import { GiCardPick } from "react-icons/gi";

const Navbar = ({ toggleNavbar }) => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className={`navbar w-full h-full relative`}>
        <div className="navItems px-5 flex flex-col">
          <div className="logo w-full h-fit flex items-center justify-center">
            <Link to="/" onClick={toggleNavbar}>
              <img
                src={logo}
                alt=""
                className="w-40 py-2 h-24 object-contain"
              />
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
          <div
            className={`list duration-200 px-2 cursor-pointer`}
            onClick={toggleDropdown}
          >
            <p className="flex items-center gap-3">
              <HiWrenchScrewdriver />
              services
              <RiArrowUpDownFill />
            </p>
          </div>
          {isDropdownOpen && (
            <div className="drop_down ml-3">
              <div
                className={`list duration-200 px-2 ${isActive("/services")}`}
              >
                <Link to="/services" onClick={toggleNavbar}>
                  <p className="flex items-center gap-3">
                    <TbSeo />
                    seo
                  </p>
                </Link>
              </div>
              <div
                className={`list duration-200 px-2 ${isActive(
                  "/services/uiux"
                )}`}
              >
                <Link to="/services/uiux" onClick={toggleNavbar}>
                  <p className="flex items-center gap-3">
                    <CgWebsite />
                    website ui/ux
                  </p>
                </Link>
              </div>
              <div
                className={`list duration-200 px-2 ${isActive(
                  "/services/smm"
                )}`}
              >
                <Link to="/services/smm" onClick={toggleNavbar}>
                  <p className="flex items-center gap-3">
                    <FaUsers />
                    marketing
                  </p>
                </Link>
              </div>
              <div
                className={`list duration-200 px-2 ${isActive(
                  "/services/tech"
                )}`}
              >
                <Link to="/services/photoshoot" onClick={toggleNavbar}>
                  <p className="flex items-center gap-3">
                    <MdOutlineSupportAgent />
                    photoshoot
                  </p>
                </Link>
              </div>
              <div
                className={`list duration-200 px-2 ${isActive(
                  "/services/animation"
                )}`}
              >
                <Link to="/services/animation" onClick={toggleNavbar}>
                  <p className="flex items-center gap-3">
                    <MdAnimation />
                    animation
                  </p>
                </Link>
              </div>
            </div>
          )}
          {/* menu items */}
          <div className={`list duration-200 px-2 ${isActive("/hire")}`}>
            <Link to="/hire" onClick={toggleNavbar}>
              <p className="flex items-center gap-3">
                <GiCardPick />
                hire us
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
          <div className={`list duration-200 px-2 ${isActive("/about")}`}>
            <Link to="/about" onClick={toggleNavbar}>
              <p className="flex items-center gap-3">
                <FaUser />
                about
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
            <a
              href="https://facebook.com/profile.php?id=61571925213316"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icons" />
            </a>
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
            <a
              href="https://youtube.com/@aplusadvertisinglimited?si=KDDTEGQiRkybXVkQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="icons" />
            </a>
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
