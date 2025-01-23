import React, { useEffect, useRef, useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import chat from "../assets/chat.gif";
import chat_cat from "../assets/cat.png";

const Livechat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const livechatRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    let timeout;
    const cycle = () => {
      setIsVisible(true); // Show the image
      timeout = setTimeout(() => {
        setIsVisible(false); // Hide the image after 7 seconds (5s visible + 2s fade out)
      }, 7000); // Total cycle duration is 7 seconds
    };

    cycle();
    const interval = setInterval(cycle, 9000); // Total duration: 9s (2s fade-in + 5s visible + 2s fade-out)

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside both Navbar and Livechat
      if (livechatRef.current && !livechatRef.current.contains(event.target)) {
        setIsOpen(false); // Hide both Navbar and Livechat
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="chat-container" ref={livechatRef}>
      {/* Chat Button */}
      <div
        onClick={toggleChat}
        className="chat-button w-12 sm:w-16 md:w-36 sm:h-16 md:h-20 text-xl sm:text-2xl"
      >
        <img
          src={chat}
          alt=""
          className="w-full h-full object-cover rounded-lg p-2"
        />
        <img
          src={chat_cat}
          alt=""
          className={`chat_cat bottom-10 sm:bottom-14 md:bottom-14 ${
            isVisible ? "visible" : ""
          }`}
        />
      </div>

      {/* Popup Chat Box */}
      {isOpen && (
        <div className="popup_box bottom-20 sm:bottom-28 md:bottom-40 text-white">
          <h1 className="popup_title text-xl sm:text-2xl md:text-4xl">
            Chat with
          </h1>
          <div className="chat_options text-xl sm:text-2xl md:text-4xl">
            <a
              href="https://m.me/550009194859794"
              target="_blank"
              rel="noopener noreferrer"
              className="chat_m"
            >
              <FaFacebookMessenger />
            </a>
            <a
              href="https://wa.me/8801850219432?text=Hi!%20I%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="chat_w"
            >
              <BsWhatsapp />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Livechat;
