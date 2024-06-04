import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <div className="flex justify-center items-center m-20">
      <Link to="/doctor-details">
        <button className="bg-primaryColor p-5 rounded-md text-white  ">
          Doctor details
        </button>
      </Link>
    </div>
  );
};

export default Doctors;
