const DoctorAbout = () => {
  return (
    <div>
      <div>
        <p className="text_para">
          Dr. Laura Williams earned her PhD in Clinical Psychology from Stanford
          University. With over 10 years of experience, she specializes in
          cognitive-behavioral therapy - CBT, and works with patients to manage
          anxiety, depression, and stress through virtual sessions.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[18px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                17 September 2014
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Clinical Psychology
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Standford University
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                21 June 2011
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Master in Clinical Psychology
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              University of Berlin
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[18px] leading-[30px text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#caf7fb]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              January 20, 2020 — May 24, 2023
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">
              Senior Psychologist
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              Müller Counseling Center
            </p>
          </li>
          <li className="p-4 rounded bg-[#caf7fb]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              February 1, 2015 — December 21, 2019
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">
              Licensed Psychologist
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              Welness Therapy Group
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
