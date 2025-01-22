import React, { useEffect } from "react";
import dataList from "../assets/services";
import { FaHandPointRight } from "react-icons/fa";
import serbg from "../assets/ser.jpg";

const Seo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="" />
      </div>
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
      <div className="w-full h-fit grid place-items-center gap-5 mb-5">
        {dataList.slice(0, 1).map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-3/4 md:w-1/2 h-full flex flex-col justify-center"
          >
            <div className="seo_package flex flex-col h-full">
              <h1 className="text-xl sm:text-2xl text-center font-semibold mb-10">
                {item.title}
              </h1>
              <div className="flex items-center justify-between gap-5 flex-wrap">
                <div className="delivery">{item.delivery}</div>
                <div className="price">{item.price}</div>
              </div>
              <p className="my-2 font-medium text-lg">Services will Include</p>
              {Array.isArray(item.description) ? (
                <ul className="">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaHandPointRight className="text-sm mt-1" /> {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5 mb-24">
        {dataList.slice(1, 4).map((item, index) => (
          <div key={index} className="w-full h-full flex flex-col">
            <div className="seo_package flex flex-col h-full">
              <h1 className="text-xl sm:text-2xl text-center font-semibold mb-10">
                {item.title}
              </h1>
              <div className="flex items-center justify-between gap-5 flex-wrap">
                <div className="delivery">{item.delivery}</div>
                <div className="price">{item.price}</div>
              </div>
              <p className="my-2 font-medium text-lg">Services will Include</p>
              {Array.isArray(item.description) ? (
                <ul className="">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaHandPointRight className="text-sm mt-1" /> {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-fit grid place-items-center gap-5 mb-5">
        {dataList.slice(4, 8).map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-3/4 md:w-1/2 h-full flex flex-col justify-center"
          >
            <div className="seo_package flex flex-col h-full">
              <h1 className="text-xl sm:text-2xl text-center capitalize font-semibold mb-10">
                {item.title}
              </h1>
              <div className="flex items-center justify-between gap-5 flex-wrap">
                <div className="delivery">{item.delivery}</div>
                <div className="price">{item.price}</div>
              </div>
              <p className="my-2 font-medium text-lg">Services will Include</p>
              {Array.isArray(item.description) ? (
                <ul className="">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaHandPointRight className="text-sm mt-1" /> {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Seo;
