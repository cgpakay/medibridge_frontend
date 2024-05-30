import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import headerImg from "../assets/images/header-bg.png";
import { MdMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
// import { MdLogin } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the state based on the initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex justify-between w-full p-4 bg-slate-600"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pl-6 font-bold text-xl">MediBridge</div>
      <div className="flex">
        {/* <MdMedicalServices />
        <IoSearchSharp /> */}

        {(isOpen || !isMediumScreen) && (
          <div
            className={`flex gap-6 pt-2 pr-6 font-thin text-xl ${
              isMediumScreen ? "flex-col absolute mt-10" : "flex-row"
            }`}
          >
            <Link to="/">
              <FaHome className="text-3xl" />
            </Link>
            <Link to="/services" className="flex">
              <MdMedicalServices className="text-2xl" />
              &nbsp;
            </Link>
            <Link to="/searchdoctor">
              <IoSearchSharp className="text-2xl" />
            </Link>
            <Link to="/language">
              <MdLanguage className="text-2xl" />
            </Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/login" className="font-semibold">
              Login
            </Link>
            <Link to="/signup" className="font-semibold">
              SignUp
            </Link>
          </div>
        )}

        {/* Hamburger Menu */}
        <div className={`lg:hidden`}>
          <button onClick={toggleMenu}>
            <MdMenu className={`text-3xl`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
