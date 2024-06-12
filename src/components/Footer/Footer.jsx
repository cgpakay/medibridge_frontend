import { Link } from "react-router-dom";
import {
  RiLinkedinFill,
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";
import logomedibridge from "../../assets/images/logo_medibridge.png";

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
  // {
  //   path: "/home",
  //   display: "Home",
  // },
  {
    path: "/",
    display: "How it works",
  },
  {
    path: "/contact",
    display: "About us",
  },
];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/login",
    display: "Book an Appointment",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "FAQ",
  },
  {
    path: "/contact",
    display: "Contact us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-customBackground">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
            <Link to="/">
              <img
                src={logomedibridge}
                alt="logo"
                className="max-w-full h-auto w-[100px] lg:w-[150px]"
              />
            </Link>
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
              Overview
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
              Services
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
              Resources
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
