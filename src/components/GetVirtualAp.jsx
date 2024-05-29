import React from "react";

function GetVirtualAp() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-center my-12 p-6 bg-slate-100">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="src/assets/images/feature-img.png"
            alt="Doctor"
            className="w-full h-auto md:max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <h3 className="text-3xl font-bold mb-12">
            Get a virtual appointment anytime
          </h3>
          <ol className="list-decimal pl-5 space-y-4 ml-4 mb-12">
            <li>Schedule the appointment directly</li>
            <li>Search for your physician here</li>
            <li>View our physician who are accepting new patients</li>
            <li>Use the online scheduling tool to select an appointment</li>
          </ol>
          <div className="flex md:justify-start justify-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetVirtualAp;
