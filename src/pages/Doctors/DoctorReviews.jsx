import avatarIcon from "../../assets/images/avatarIcon.png";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const DoctorReviews = () => {
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[18px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (35)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatarIcon} alt="" />
            </figure>
            <div>
              <h5 className="text-[15px] leading-6 text-primaryColor font-bold">
                Priyanka S.
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                Jun 1, 2024
              </p>
              <p className="text_para">
                Great doctor! I have made great progress thanks to her guidance.
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#FEB60D" />
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatarIcon} alt="" />
            </figure>
            <div>
              <h5 className="text-[15px] leading-6 text-primaryColor font-bold">
                Henri A.
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                Jun 7, 2024
              </p>
              <p className="text_para">
                Dr. Laura's advice is empowering. Highly recommend!
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#FEB60D" />
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatarIcon} alt="" />
            </figure>
            <div>
              <h5 className="text-[15px] leading-6 text-primaryColor font-bold">
                Emma M.
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                Jun 10, 2024
              </p>
              <p className="text_para">
                Doctor has helped me through tough times. I am grateful!
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#FEB60D" />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/login">
          <button className="btn">Leave a review</button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorReviews;
