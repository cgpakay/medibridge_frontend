import React from "react";
import Testimonials from "../components/Testimonials";
import OurServices from "../components/OurServices";
import SignUpDoctor from "../components/SignUpDoctor";
import SignUpPatient from "../components/SignUpPatient";
import icon01 from "../assets/images/icon01.png";
import icon04 from "../assets/images/icon04.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <OurServices />
      <Testimonials />
      <SignUpDoctor />
      <SignUpPatient />
          {/*======= Get virtual appointment ======== */}

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

      {/*======= Get virtual appointment ======== */}
      {/* ======= Our Services ======== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="tet-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon04} alt="" width={150} height={150} />
              </div>
              <div className="mt-[30px]">
                <h2 className="tet-[26px] leading-9 text-headingColor font-[700] text-center">
                  Register
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="tet-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= End of Our Services ======== */}
    </div>

  );
};

export default Home;
