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
          <div className="relative bg-white p-6 rounded-lg shadow-md max-w-lg">
            <p className="text-lg text-gray-700">
              "MediBridge has completely changed my life. The personalized care
              plans and the attention to detail by the doctors have made
              managing my chronic condition so much easier. I feel truly cared
              for."
            </p>
            <br />
            <p className="font-bold text-left">Michael Scott</p>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 w-0 h-0 border-t-8 border-b-8 border-r-8 border-r-white border-t-transparent border-b-transparent"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
          <img
            src={avatarIcon3}
            alt="testimonial"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:ml-8"
          />
          <div className="relative bg-white p-6 rounded-lg shadow-md max-w-lg">
            <p className="text-lg text-gray-700">
              "I can't say enough good things about MediBridge. The online
              consultations are incredibly convenient, and the medical team is
              always professional and compassionate. It's the future of
              Medicare."
            </p>
            <p className="font-bold md:text-right mt-4">Lauren Winter</p>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-6 w-0 h-0 border-t-8 border-b-8 border-l-8 border-l-white border-t-transparent border-b-transparent"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={avatarIcon2}
            alt="testimonial"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div className="relative bg-white p-6 rounded-lg shadow-md max-w-lg">
            <p className="text-lg text-gray-700">
              "As someone with a busy schedule, MediBridge's seamless
              appointment scheduling and virtual visits have been a lifesaver.
              The quality of care is exceptional, and I always feel listened
              to."
            </p>
            <br />
            <p className="font-bold text-left">Hubertus Da Silva</p>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 w-0 h-0 border-t-8 border-b-8 border-r-8 border-r-white border-t-transparent border-b-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
