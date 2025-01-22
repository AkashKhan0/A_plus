import React, { useEffect } from "react";
import { FaHandPointRight } from "react-icons/fa";
import marketingData from "../assets/marketing";

const Googleads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="ser-bg"></div>
      <div className="w-full h-fit text-center my-10 relative text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-semibold relative w-fit m-auto mb-10">
          googleAds packages
          <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>
      </div>

      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5 mb-24 text-white">
        {marketingData.slice(0, 3).map((item, index) => (
          <div key={index} className="w-full h-full flex flex-col">
            <div className="seo_package flex flex-col h-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold mb-10">
                {item.title}
              </h1>
              <div className="flex items-center justify-between gap-5 flex-wrap">
                <div className="delivery">{item.package}</div>
                <div className="price">{item.price}</div>
              </div>
              <p className="my-2 text-balance font-medium text-lg mb-5">
                {item.about_p}
              </p>
              {Array.isArray(item.description) ? (
                <ul className="">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaHandPointRight className="text-sm" /> {desc}
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

export default Googleads;
