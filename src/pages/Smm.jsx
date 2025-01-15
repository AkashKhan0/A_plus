import React, { useEffect } from "react";
import dataList from "../assets/services";

const Smm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="ser-bg"></div>
      <div className="w-full h-fit text-center my-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mb-10">
          Social Media Marketing
          <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>
        <p className="my-10 text-justify">
          We provide expert marketing solutions tailored to your needs: Facebook
          & Social Media Marketing : Connect with your targeted audience by
          engaging them in highly targeted campaigns, appealing content, and ad
          displays on every social media avenue. Google Ads : Get more traffic
          and conversions with high-performance search, display, and shopping
          ads that put your business at the top of search results. YouTube
          Marketing : Give Your Story a Voice through Engaging Videos, Targeted
          Ad Campaigns, and Grow Channel and Audience Strategies for Brands. Let
          us create a winning strategy to grow your online presence, attract
          more leads, and boost your revenue. Partner with us today to make
          every click count!
        </p>
      </div>

      {/* services card */}
      <div className="w-full h-fit flex flex-wrap justify-center gap-5 mb-24">
        {dataList.slice(4, 9).map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 min-w-60 h-80 ser__card"
          >
            <div className="front">
              <img src={item.image} alt="" className="" />

              <h1 className="card-h1 text-3xl font-semibold">{item.title}</h1>
              <p className="card-p py-2 text-center px-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Smm;
