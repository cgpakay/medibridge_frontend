import { Link } from "react-router-dom";
import heroimg from "../assets/images/heroimg.png";
//import heroImg01 from "../assets/images/hero-img01.png";
// import heroImg02 from "../assets/images/hero-img02.png";
// import heroImg03 from "../assets/images/hero-img03.png";
import icon05 from "../assets/images/icon05.png";
import icon04 from "../assets/images/icon04.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/faq-doctor-img.png";
import { BsArrowRight } from "react-icons/bs";

import Testimonial from "../components/Testimonials/Testimonials.jsx";
import FaqList from "../components/Faq/FaqList";
import doctor from "../assets/images/virtual.jpg";
import OurServices from "../components/About/OurServices.jsx";

<section>
  <div className="container">
    <div className="flex items-center justify-between flex-col lg:flex-row">
      <div className="relative z-10 xl:w-[770px] flex justify-start mt-[30px] lg:mt-0">
        <img src={doctor} alt="Doctor" className="w-full rounded-lg" />
      </div>

      <div className="xl:w-[670px] mt-[30px] lg:mt-0 lg:ml-[30px]">
        <h3 className="heading pb-6">
          Get a virtual appointment <br /> anytime, from anywhere
        </h3>
        <ul className="pr-4 py-4">
          <li className="text__para pb-3">
            <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
              1
            </span>{" "}
            Browse through our database to find your preferred physician
          </li>
          <li className="text__para pb-3">
            <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
              2
            </span>{" "}
            Explore a list of physicians currently accepting new patients
          </li>
          <li className="text__para pb-3">
            <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
              3
            </span>{" "}
            Fill in your details to register for the appointment
          </li>
          <li className="text__para pb-3">
            <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
              4
            </span>{" "}
            Use the online scheduling tool to select an appointment
          </li>
          <li className="text__para pb-3">
            <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
              5
            </span>{" "}
            Receive confirmation of your virtual appointment via email
          </li>
          <li className="text__para pb-3">
            <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
              6
            </span>{" "}
            Log in at the scheduled time and join your virtual appointment with
            ease
          </li>
        </ul>
        <Link to="/doctors">
          <div className="justify-between flex">
            <button className=" border border-primaryColor bg-primaryColor text-white font-[800] py-5 px-52 border-solid mt-4 rounded-full">
              Get Started
            </button>
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>;

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ====== hero content ========== */}
            <div>
              <div className=" lg:w-[570px]">
                <h1 className="text-headingColor text-[36px] leading-[46px] md:text-[60px] md:leading-[70px] font-[800] ">
                  Online doctor consultations made easy
                </h1>
                <p className="text__para pt-5">
                  MediBridge connects patients with doctors for online
                  consultations, providing expert solutions for various diseases
                  and health issues. Access professional medical advice and care
                  from the comfort of your home.
                </p>
                <button className="btn">Book an Appointment </button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-yellowColor block mt-[-14px]"></span>
                  <p className="text__para">Specialization</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    50+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-purpleColor block mt-[-14px]"></span>
                  <p className="text__para">Doctors to help</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    98%
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-irisBlueColor block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* =========== hero img ============ */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroimg} alt="hero_img" />
              </div>
              {/* <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px]"
                  src={heroImg02}
                  alt="hero_img"
                />
                <img className="w-full" src={heroImg03} alt="hero_img" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Exceptional Virtual Medical Services
            </h2>
            <p className="text_para text-center">
              World-class care from the comfort of your home. Our health system
              provides unparalleled, expert healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon05} alt="" width={185} height={185} />
              </div>
              <div className="mt-[30px]">
                <h2 className="tet-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Easily search and find the right doctor for your needs from
                  our network of qualified healthcare professionals.
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
                  Choose a convenient time slot for your virtual consultation
                  and book an appointment in just a few clicks.
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
                  unmatched, expert health care. From the lab to the clinic.
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

      {/* End of step by step guide */}
      {/* Get a virtual appt */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="relative z-10 xl:w-[770px] flex justify-start mt-[30px] lg:mt-0">
              <img src={doctor} alt="Doctor" className="w-full rounded-lg" />
            </div>

            <div className="xl:w-[670px] mt-[30px] lg:mt-0 lg:ml-[30px]">
              <h3 className="heading pb-6">
                Get a virtual appointment <br /> anytime, from anywhere
              </h3>
              <ul className="pr-4 py-4">
                <li className="text__para pb-3">
                  <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
                    1
                  </span>{" "}
                  Browse through our database to find your preferred physician
                </li>
                <li className="text__para pb-3">
                  <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
                    2
                  </span>{" "}
                  Explore a list of physicians currently accepting new patients
                </li>
                <li className="text__para pb-3">
                  <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
                    3
                  </span>{" "}
                  Fill in your details to register for the appointment
                </li>
                <li className="text__para pb-3">
                  <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
                    4
                  </span>{" "}
                  Use the online scheduling tool to select an appointment
                </li>
                <li className="text__para pb-3">
                  <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
                    5
                  </span>{" "}
                  Receive confirmation of your virtual appointment via email
                </li>
                <li className="text__para pb-3">
                  <span className="rounded-full bg-[#9771FF] text-white px-3 py-1 mr-2">
                    6
                  </span>{" "}
                  Log in at the scheduled time and join your virtual appointment
                  with ease
                </li>
              </ul>
              <Link to="/doctors">
                <div className="justify-between flex">
                  <button className=" border border-primaryColor bg-primaryColor text-white font-[800] py-5 px-52 border-solid mt-4 rounded-full">
                    Get Started
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End of virtual appt */}

      <OurServices />
      <Testimonial />

      <section>
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 flex-1 order-1 md:order-none flex items-center justify-center p-4">
              <img
                className="rounded-lg h-auto max-w-full"
                src={faqImg}
                alt="FAQ illustration"
              />
            </div>
            <div className="w-full md:w-1/2 flex-1 px-4 py-8 order-none md:order-1 flex items-center justify-center">
              <div>
                <h2 className="heading mb-4">
                  Most frequently asked questions
                </h2>
                <FaqList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
