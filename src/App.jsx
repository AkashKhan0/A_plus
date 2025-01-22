import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Upcoming from "./pages/Upcoming";
import Project from "./pages/Project";
import Privecy from "./pages/Privecy";
import Livechat from "./pages/Livechat";
import Career from "./pages/Career";
import logo from "../src/assets/logo.png";
import Refund from "./pages/Refund";
import Smallnav from "./components/Smallnav";
import Anim from "./pages/Anim";
import Googleads from "./pages/Googleads";
import Socialm from "./pages/Socialm";

const App = () => {
  const navbarRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside both Navbar and Livechat
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false); // Hide both Navbar and Livechat
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="fixed top-28 left-0 Smallnav">
          <Smallnav />
        </div>
        <img
          src={logo}
          alt=""
          className="fixed top-2 left-4 w-24 cursor-pointer on_logo"
          onClick={() => navigate("")}
        />
        <div
          className="menu fixed top-1 right-2 p-2 text-3xl font-semibold rounded-lg text-white cursor-pointer"
          onClick={toggleNavbar}
        >
          {isOpen ? <RxCross2 /> : <AiOutlineMenuUnfold />}
        </div>
        {/* Livechat Component */}
        <Livechat />

        <div
          ref={navbarRef}
          className={`nav w-full sm:w-1/2 md:w-1/4 duration-200 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Navbar toggleNavbar={toggleNavbar} />
        </div>
        <div className="w-full px-5 sm:px-10 pages max-w-screen-xl m-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            <Route path="/services/seo" element={<Services />} />
            <Route path="/services/uiux" element={<Services />} />
            <Route path="/services/smm" element={<Services />} />
            <Route path="/services/googleads" element={<Googleads />} />
            <Route path="/services/socialmarketing" element={<Socialm />} />
            <Route path="/services/photoshoot" element={<Services />} />
            <Route path="/services/animation" element={<Services />} />
            <Route path="/services/animation/anim" element={<Anim />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/privecy" element={<Privecy />} />
            <Route path="/career" element={<Career />} />
            <Route path="/refound" element={<Refund />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
