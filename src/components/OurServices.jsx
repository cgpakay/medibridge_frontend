import React from "react";

const OurServices = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-8">Visual Services available</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pt-10 pb-10">
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Service 1</h2>
          <p className="text-gray-700">Description of service 1</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Service 2</h2>
          <p className="text-gray-700">Description of service 2</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Service 3</h2>
          <p className="text-gray-700">Description of service 3</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Service 4</h2>
          <p className="text-gray-700">Description of service 4</p>
        </div>
      </div>
      <button className="mt-8 px-6 py-3 bg-primaryColor text-white rounded-lg hover:bg-primaryColor transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-opacity-50">
        Get an Appointment
      </button>
    </div>
  );
};

export default OurServices;
