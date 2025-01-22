import React, { useEffect } from "react";
import dataList from "../assets/services";
const selectedItems = [dataList[9]];
const Tech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="ser-bg"></div>
      <div className="w-full h-fit text-center mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mb-10">
          Tech Support
          <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>
        <p className="my-10 text-justify">
          Our in-depth technical support services ensure smooth operations
          custom-made to your business requirements. Our professionals will be
          equipped to heal your IT glitches, keep the system efficient, and
          assured solutions that maintain the flow of the whole procedure. 24/7
          Support : 24 hours an issue would be addressed immediately. Proactive
          Maintenance : Preventive strategies for downtime and improved system
          performance. Tailored Solutions : Customized technical support
          packages tailored just for you. Consult with us to take care of any of
          your technical woes while you keep your attention focused on business
          growth!
        </p>
      </div>

      {/* services card */}
      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-items-center gap-5 mb-24">
        {selectedItems.map((item, index) => (
          <div key={index} className="w-full h-80 ser__card">
            <div className="front">
              <img src={item.image} alt="" className="" />

              <h1 className="card-h1 text-3xl font-semibold">{item.title}</h1>
              <p className="card-p py-2 text-lg text-center px-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tech;
