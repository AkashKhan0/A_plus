import React, { useEffect, useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import marketingData from "../assets/marketing";
import serbg from "../assets/ser.jpg";
import { useNavigate } from "react-router-dom";

const Webpack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x: `${x}px`, y: `${y}px` });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: "50%", y: "50%" });
  };

  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="" />
      </div>
      <div className="w-full h-fit text-center my-10 relative text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-semibold relative w-fit m-auto mb-10">
          Website Packages
          <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>
      </div>

      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5 mb-24 text-white">
        {marketingData.slice(6, 11).map((item, index) => (
          <div key={index} className="w-full h-full flex flex-col hover_up">
            <div
              className="seo_package flex flex-col h-full"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                "--x": mousePosition.x,
                "--y": mousePosition.y,
              }}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold mb-10">
                {item.package}
              </h1>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="delivery_web w-fit">{item.package_for}</div>
                <div className="price_web w-fit">{item.price}</div>
              </div>
              <p className="text-center font-medium text-xl my-5">
                {item.ideal}
              </p>
              <p className="text-start font-semibold text-xl my-2">
                {item.features}
              </p>
              {Array.isArray(item.description) ? (
                <ul className="">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start text-lg gap-3">
                      <FaHandPointRight className="text-sm mt-2 w-5" /> {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="">{item.description}</p>
              )}
              <div className="flex items-center justify-center w-full mt-5">
                <button
                  onClick={() => navigate(item.link)}
                  className="btn_pack"
                >
                  contact us
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
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

export default Webpack;
