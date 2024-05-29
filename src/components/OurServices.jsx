import React from "react";

const Services = () => {
  return (
    <div className="bg-white-100 py-12 px-4">
      <div className="container mx-auto bg-white rounded-lg ">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Virtual Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* First Row */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">
              Online Appointment Booking
            </h2>
            <p className="text-gray-700 mb-6">
              Easily schedule your appointments online, eliminating the need for
              phone calls or in-person visits.
            </p>
            <button className="mt-auto bg-primaryColor hover:bg-primaryColorHover text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">Virtual Consultations</h2>
            <p className="text-gray-700 mb-6">
              Access healthcare professionals through video calls for medical
              advice, diagnosis, and treatment plans from the comfort of your
              home.
            </p>
            <button className="mt-auto bg-primaryColor hover:bg-primaryColorHover text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">Remote Monitoring</h2>
            <p className="text-gray-700 mb-6">
              Stay connected with your healthcare team through remote monitoring
              devices that track vital signs and health indicators.
            </p>
            <button className="mt-auto bg-primaryColor hover:bg-primaryColorHover text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Second Row */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">Prescription Refills</h2>
            <p className="text-gray-700 mb-6">
              Request prescription refills online and have your medications
              delivered to your doorstep for convenience.
            </p>
            <button className="mt-auto bg-primaryColor hover:bg-primaryColorHover text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">
              Health Record Management
            </h2>
            <p className="text-gray-700 mb-6">
              Access and manage your medical records securely online, including
              test results, diagnoses, and treatment history.
            </p>
            <button className="mt-auto bg-primaryColor hover:bg-primaryColorHover text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">
              Health Education Resources
            </h2>
            <p className="text-gray-700 mb-6">
              Access a wealth of educational materials and resources to empower
              yourself with knowledge about your health and wellness.
            </p>
            <button className="mt-auto bg-primaryColor hover:bg-primaryColorHover text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
