import React from "react";
import avatarIcon from "../assets/images/avatarIcon.png";
import avatarIcon2 from "../assets/images/avatarIcon2.png";
import avatarIcon3 from "../assets/images/avatarIcon3.png";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        What our patients say
      </h1>
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={avatarIcon}
            alt="testimonial"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <p className="text-lg text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum."
            </p>
            <br></br>
            <p className="font-bold">-Michael Scott</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
          <img
            src={avatarIcon3}
            alt="testimonial"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:ml-8"
          />
          <div className="flex flex-col justify-between h-full w-full md:w-auto">
            <p className="text-lg text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum."
            </p>
            <p className="font-bold self-start mt-4 md:self-end">
              -Lauren Winter
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={avatarIcon2}
            alt="testimonial"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <p className="text-lg text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum."
            </p>
            <br></br>
            <p className="font-bold">-Hubertus Da Silva</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
