import React, { useEffect, useState } from "react";
import demodata, { categories } from "../assets/demodata";
import { useNavigate } from "react-router-dom";
import serbg from "../assets/u_bg.jpg";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("website");
  const [selectedImage, setSelectedImage] = useState(null);

  const selectedCategory = categories.find(
    (cat) => cat.name === activeCategory
  );
  const filteredData = selectedCategory
    ? demodata.slice(selectedCategory.range[0], selectedCategory.range[1])
    : [];

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="" />
      </div>
      <div className="w-full h-full py-10 relative text-black">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-5 items-center justify-center my-10">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`gall cursor-pointer px-4 py-2 mx-2 ${
                activeCategory === category.name
                  ? "bg-red-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="w-full grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-5 px-4">
          {filteredData.map((review, index) => (
            <div
              className="u_card2 u_box hover_up_img overflow-hidden bg-white shadow-md rounded-lg p-3"
              key={index}
            >
              <img
                src={review.image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full max-h-[300px] rounded-md object-contain cursor-pointer"
                onClick={() => setSelectedImage(review.image)}
              />

              {/* Show description & link only for website category */}
              {activeCategory === "website" && (
                <div className="my-3 text-center">
                  {review.description && (
                    <p className="text-sm text-white mb-2">
                      {review.description}
                    </p>
                  )}

                  {review.link && (
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-800 transition"
                    >
                      🔗 Live Link
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90%] max-h-[90%] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Contact Section */}
        <div className="flex flex-col items-center justify-center my-20 text-white">
          <p className="w-fit tspan text-2xl mb-10 text-center">
            For any questions or concerns regarding this Privacy Policy, please
            contact us
          </p>
          <div className="btn1 w-40">
            <button onClick={() => navigate("/contact")}>Contact</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;