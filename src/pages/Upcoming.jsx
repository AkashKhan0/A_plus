import React, { useEffect } from "react";
import { RiVideoOnAiFill } from "react-icons/ri";
import { FaCameraRetro } from "react-icons/fa6";
import { RiImageEditFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Upcoming = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full h-full py-10 relative text-white">
        <div className="u_bg"></div>

        <div className="w-full h-fit text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mb-20">
            Upcoming
            <span className="w-full h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
          </h1>
          <div className="w-full h-fit relative flex items-center justify-center my-10">
            <div class="hourglass">
              <div class="top"></div>
              <div class="bottom"></div>
            </div>
          </div>
          <p className="my-10 text-justify">
            Our forthcoming preparations are all set to lift your existing views
            even higher! Whether you require stunning photography captured for
            capturing moments or transforming raw footage into cinematic
            masterpieces through video editing, we have you covered. Our expert
            team is ready to deliver to you creativity, precision, and quality
            with which your vision meets. Wait until we are done redefining all
            you expect from your capture, creating, and preserving memorable
            moments!
          </p>
        </div>

        <div className="w-full flex items-center justify-center gap-5 flex-wrap">
          <div className="u_card u_box w-full">
            <RiVideoOnAiFill className="u_icon" />
            <h1 className="u_title">video editing</h1>
            <p className="u_description">
              Our pros can help you convert your videos to cinematic
              masterpieces!
            </p>
          </div>
          <div className="u_card1 u_box w-full">
            <FaCameraRetro className="u_icon" />
            <h1 className="u_title">Photoshoot</h1>
            <p className="u_description">
              Composed, soon joining you for capturing all this moment through
              mindblowing professional photo shoots.
            </p>
          </div>
          <div className="u_card2 u_box w-full">
            <RiImageEditFill className="u_icon" />
            <h1 className="u_title">graphics design</h1>
            <p className="u_description">
              Igniting the creativity with breathtaking stunning designs that
              make your brand identity sharper.
            </p>
          </div>
        </div>
      </div>

      {/* nine  */}
      <div className="flex flex-col items-center justify-center my-20 text-white">
        <p className="w-fit tspan text-2xl mb-10">
          For any questions or concerns regarding this Privacy Policy, please
          contact us
        </p>

        <div className="btn1 w-40">
          <button onClick={() => navigate("/contact")}>contact</button>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
