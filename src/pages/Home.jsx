import icon01 from "../assets/images/icon01.png";
import icon04 from "../assets/images/icon04.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import heroimg01 from "../assets/images/hero-img01.png";
import heroimg02 from "../assets/images/hero-img02.png";
import heroimg03 from "../assets/images/hero-img03.png";
import Testimonials from "../components/Testimonials/Testimonials";
import OurServices from "../components/About/OurServices";
import FaqList from "../components/Faq/FaqList";
import faqImg from "../assets/images/faq-img.png";
import Footer from "../components/Footer/Footer";
import DoctorCard from "../components/Doctors/DoctorCard";
import DoctorList from "../components/Doctors/DoctorList";

const Home = () => {
  return (
    <>
      {/* ============== start of hero section ===============*/}
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ============== hero content ===============*/}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text[36px] leading-[68px] text-headingColor font-[800] md:text-[60px]">
                    We help patients live a healthy, longer life
                  </h1>
                  <p className="text__para pt-8 leading-7">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque blanditiis, consectetur molestias animi ut id
                    reprehenderit soluta ad provident? Nisi. reprehenderit
                    soluta ad provident? Nisi.
                  </p>

                  <button className="btn"> Request an Appointment </button>
                </div>
                {/* ============== hero counter ===============*/}
                <div className="mt-[30px] lg:met-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div className="">
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years of Experience</p>
                  </div>

                  <div className="">
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clinic Location</p>
                  </div>

                  <div className="">
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
              {/* ============== hero content ===============*/}

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={heroimg01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img src={heroimg02} alt="" className="w-full mb-[30px]" />
                  <img src={heroimg03} alt="" className="w-full mb-[30px]" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============== end of hero section ===============*/}

        {/* ============== Start of Step by Step ===============*/}
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing the best medical services
              </h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
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
                    to="/signup"
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

        {/* ============== end of Step by Step ===============*/}

        {/* ============== Start Get Virtual appointment ===============*/}
        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              <div className="relative z-10 xl:w-[770px] flex justify-start mt-[30px] lg:mt-0">
                <img
                  src="src/assets/images/feature-img.png"
                  alt="Doctor"
                  className="w-3/4"
                />
              </div>

              <div className="xl:w-[670px] mt-[30px] lg:mt-0 lg:ml-[30px]">
                <h3 className="heading">
                  Get a virtual appointment <br /> anytime
                </h3>
                <ul className="pr-4 pt-4">
                  <li className="text__para">
                    1. Schedule the appointment directly
                  </li>
                  <li className="text__para">
                    2. Search for your physician here
                  </li>
                  <li className="text__para">
                    3. View our physicians who are accepting new patients
                  </li>
                  <li className="text__para">
                    4. Use the online scheduling tool to select an appointment
                  </li>
                </ul>
                <Link to="/doctors">
                  <button className="btn mt-4">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ============== End Get Virtual appointment ===============*/}

        {/* ============== Start of testimonials ===============*/}
        <OurServices />
        {/* ============== End of testimonials ===============*/}

        {/* ============== Start of testimonials ===============*/}
        <Testimonials />
        {/* ============== End of testimonials ===============*/}
        {/* ============== Start of testimonials ===============*/}
        <section>
          <div className="container">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-full md:w-1/2 order-1 md:order-none">
                <img src={faqImg} alt="FAQ illustration" />
              </div>
              <div className="w-full md:w-1/2 px-4 py-8 order-none md:order-1">
                <h2 className="heading">Most frequently asked questions</h2>
                <FaqList />
              </div>
            </div>
          </div>
        </section>
        {/* ============== End of testimonials ===============*/}
        {/* ============== Start of Footer ===============*/}
        {/* <DoctorList />
        <Footer /> */}

        {/* ============== end of Footer ===============*/}
      </>
    </>
  );
};

export default Home;
