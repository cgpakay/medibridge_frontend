import { Link } from "react-router-dom";
import {
  RiLinkedinFill,
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

const socialLinks = [
  {
    path: "#",
    icon: <RiLinkedinFill className="group-hover:text-white w-8 h-8" />,
  },
  {
    path: "#",
    icon: <RiFacebookFill className="group-hover:text-white w-8 h-8" />,
  },
  {
    path: "#",
    icon: <RiTwitterXFill className="group-hover:text-white w-8 h-8" />,
  },
  {
    path: "#",
    icon: <RiInstagramFill className="group-hover:text-white w-8 h-8" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "About us",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Book an Appointment",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/about-us",
    display: "Contact us",
  },
];

const Footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
            <p className="text-primaryColor font-bold">MediBridge</p>
            <p className="text-[16px] leading-7 font-[400] text-textColor">
              Copyright © {year} developed by Cahide, Jonas, Hinal, Lucas,
              Ophelia. All rights reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 flex items-center justify-center"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden lg:block ">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block ">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block ">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
