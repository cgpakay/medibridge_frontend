import { useState } from "react";
import doctorImg from "../../assets/images/doctor-details.jpg";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import DoctorReviews from "./DoctorReviews";
import DoctorCalendar from "./DoctorCalendar";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="" className="" />
              </figure>
              <div>
                <span className="bg-[#f5ead2] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Psychologist
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Dr. Laura Williams
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} /> 4.9
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    (35)
                  </span>
                </div>

                <p className="text_para text-[14px] md:text-[15px] lg:max-w-[390px]">
                  Dr. Laura Williams is a clinical psychologist with extensive
                  experience in therapy and counseling, specializing in
                  cognitive-behavioral therapy - CBT.
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b border-solid-[10px]  border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" &&
                  "border-b-2 border-solid border-primaryColor"
                }py-2 px-5 mr-5 text-[18px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("reviews")}
                className={`${
                  tab === "reviews" &&
                  "border-b-2 border-solid border-primaryColor"
                }py-2 px-5 mr-5 text-[18px] leading-7 text-headingColor font-semibold`}
              >
                Reviews
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "reviews" && <DoctorReviews />}
            </div>
          </div>
          <div>
            <DoctorCalendar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
