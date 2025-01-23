import React, { useEffect } from "react";
import dataList from "../assets/services";
import serbg from "../assets/ser.jpg";
import { useNavigate } from "react-router-dom";
const selectedItems = [dataList[12]];

const Tech = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="" />
      </div>
      <div className="ser-bg"></div>
      <div className="w-full h-fit text-center mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mb-10">
          Photoshoot
          <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>
        <p className="my-10 text-justify text-lg">
          Your events deserve more than just photos—they deserve stories told
          through timeless images. Our professional photography service is here
          to cover all kinds of events, from magical weddings and joyful
          birthdays to corporate gatherings and cultural celebrations. We
          capture the essence of every moment with creativity, detail, and
          passion, ensuring your memories are preserved beautifully. No matter
          the occasion, trust us to make your special day unforgettable!
        </p>
      </div>

      {/* services card */}
      <div className="w-full h-fit grid place-items-center gap-5 mb-5">
        {selectedItems.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-3/4 md:w-1/2 h-80 flex flex-col justify-center ser__card"
          >
            <div className="front">
              <img src={item.image} alt="" className="" />

              <h1 className="card-h1 text-3xl font-semibold">{item.title}</h1>
              <p className="card-p py-2 text-lg text-center px-3">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-center w-full mt-5 absolute bottom-5 left-0 px-5">
              <button
                onClick={() => navigate(item.link)}
                className="btn_pack w-fit"
              >
                contact us
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tech;
