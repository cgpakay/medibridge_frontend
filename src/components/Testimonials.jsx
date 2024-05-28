import React from "react";
import patientAvatar from "../assets/images/patient-avatar.png";
import patientAvatar2 from "../assets/images/avatar-icon.png";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Testimonials</h1>
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={patientAvatar}
            alt="testimonial"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
          <img
            src={patientAvatar2}
            alt="testimonial"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:ml-8"
          />
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={patientAvatar}
            alt="testimonial"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
