import React, { useEffect } from "react";
import dataList from "../assets/services";

const Uiux = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="ser-bg"></div>
      <div className="w-full h-fit text-center my-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mb-10">
          Website Making UI/UX
          <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>

        <p className="my-10 text-justify">
          Your website is more than just a digital presence; it's that first
          look your audience sees of your brand. Our professional UI/UX design
          services are all about making visually stunning, user-friendly, and
          engaging websites to capture the attention of your visitors and
          convert them into leads. We believe in intuitive navigation,
          responsive design, and seamless functionality to make for a pleasant
          user experience across all devices. Understanding your business goals
          and audience allows us to create tailored designs that reflect your
          brand's identity and resonate with your users. Partner with us to
          transform your website into an impactful tool that is not only great
          in appearance but also delivers real results. Let's make your online
          presence unforgettable!
        </p>
      </div>

      {/* services card */}
      <div className="w-full h-fit flex flex-wrap justify-center gap-5 mb-24">
        {dataList.slice(12, 38).map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 min-w-60 h-80 ser__card"
          >
            <div className="front">
              <img src={item.image} alt="" className="" />

              <h1 className="card-h1 text-3xl font-semibold">{item.title}</h1>
              <p className="card-p py-2 text-center px-3">{item.description}</p>
            </div>
            {/* <div className="back">
              <p className="py-2">{item.description}</p>
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Uiux;
