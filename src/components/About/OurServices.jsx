const OurServices = () => {
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
              phone calls or in-person visits. Make your healthcare experience
              better.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">Virtual Consultations</h2>
            <p className="text-gray-700 mb-6">
              Access healthcare professionals through video calls for medical
              advice, diagnosis, and treatment plans from the comfort of your
              home.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">
              Diverse Medical Specialties
            </h2>
            <p className="text-gray-700 mb-6">
              Our platform connects you with various medical specialists. Access
              expert care from top doctors across multiple fields.
            </p>
          </div>

          {/* Second Row */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">
              AI-Driven Health Monitoring
            </h2>
            <p className="text-gray-700 mb-6">
              We are developing AI-based tools to continuously monitor your
              health metrics. This will provide real-time insights and proactive
              health management.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">Real-Time Translating</h2>
            <p className="text-gray-700 mb-6">
              We're creating real-time translating subtitles to enhance
              communication between patients and doctors, breaking language
              barriers.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl font-bold mb-4">
              Health Education Resources
            </h2>
            <p className="text-gray-700 mb-6">
              Access a wealth of educational materials and resources to empower
              yourself with knowledge about your health and wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
