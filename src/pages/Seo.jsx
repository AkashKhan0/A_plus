import React, { useEffect } from "react";
import dataList from "../assets/services";

const Seo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="ser-bg"></div>
      <div className="w-full h-fit text-center my-20 relative text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-semibold relative w-fit m-auto mb-10">
          Search Engine Optimization
          <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>
        <p className="my-10 text-justify">
          In visibility lies everything in today's digital era. Our expert
          Search Engine Optimization services are designed to put your business
          in front of the right audience. From targeted keyword research and
          on-page optimization to link-building strategies and technical audits,
          we ensure your website ranks higher on search engines like Google. Our
          team focuses on driving organic traffic, enhancing user experience,
          and boosting conversion rates, thus helping your business grow. We
          drive results that are always measurable and focused on your unique
          goals, using a data-driven approach and industry-best practices. Let's
          dominate search engine rankings, outshine competitors, and maximize
          your online potential. Let's turn your website into a powerful growth
          engine!
        </p>
      </div>

      {/* services card */}
      <div className="w-full h-fit flex flex-wrap justify-center gap-5 mb-24">
        {dataList.slice(0, 4).map((item, index) => (
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

export default Seo;
