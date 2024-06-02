import React from "react";
import { useContext, useState } from "react";
/* import Profile from "./Profile";
import MyAppointments from "./MyAppointments"; */

import doctorimg01 from "../../assets/images/doctor-img01.png";

import Loading from "../../components/Loader/Loading";
/* import Error from "../../components/Error/Error"; */

const MyAccount = () => {
  /* const{ dispatch } = useContext(authContext); */

  const [tab, setTab] = useState("appoitments");

  return (
    <section>
      {Loading /* && !error */ && <Loading />}

      {/* {error && <Error errMessage={"error"} />} */}
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                <img
                  src={doctorimg01}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </figure>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                Jonas Ienco
              </h3>
              <p className="text-textColor text-[15px] leading-6 font-medium">
                exemple@gmail.com
              </p>
              <p className="text-textColor text-[15px] leading-6 font-medium">
                Blood Type:
                <span className="ml-2 text-headingColor text-[22px]">-O</span>
              </p>
            </div>

            <div className="mt-[50px] md:mt-[100px]">
              <button className="w-full bg-black p-3 text-[16px] leading-7 rounded-md text-white">
                Logout
              </button>
              <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                Delete Account
              </button>
            </div>
          </div>

          <div className="md:col-span-2 md:px-[30px]">
            <div>
              <button
                onClick={() => setTab("appointments")}
                className={` ${
                  tab === "appointments" &&
                  "bg-primaryColor text-white font-normal"
                }  p-2 mr-5 rounded-md text-headingColor front-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                My Appointments
              </button>

              <button
                onClick={() => setTab("settings")}
                className={` ${
                  tab === "settings" && "bg-primaryColor text-white font-normal"
                }  p-2 mr-5 rounded-md text-headingColor front-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Profile Settings
              </button>
            </div>

            {tab === "appointments" && <MyAppointments />}
            {tab === "settings" && <Profile />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
