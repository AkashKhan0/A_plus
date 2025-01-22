import React, { useEffect, useRef, useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import chat from "../assets/chat.gif";

const Livechat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const livechatRef = useRef(null);

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
      <div onClick={toggleChat} className="chat-button text-xl sm:text-2xl">
        <img src={chat} alt="" className="w-11 rounded-lg border p-2" />
      </div>

      {/* Popup Chat Box */}
      {isOpen && (
        <div className="popup_box text-white">
          <h3 className="popup_title">Chat with</h3>
          <div className="chat_options">
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
