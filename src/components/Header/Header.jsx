import logomedibridge from "../../assets/images/logo_medibridge.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useContext, useEffect, useRef } from "react";

import { AuthContext } from "./../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const { user, token } = useContext(AuthContext);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header ref={headerRef} className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =========== logo ========== */}
          <Link to="/">
            <div>
              <img
                src={logomedibridge}
                alt="logo"
                className="max-w-full h-auto w-[100px] lg:w-[150px]"
              />
              {/* <h3>MediBridge</h3> */}
            </div>
          </Link>

          {/* ========== nav menu =========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-[#0067FF] font-[800] text-[16px] leading-7"
                        : "text-textColor font-[800] text-[16px] leading-7"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ========= nav right ========== */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={
                    user.role === "doctor"
                      ? `${"/doctors/profile/me"}`
                      : `${"/users/profile/me"}`
                  }
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer ">
                    <img
                      className="w-full rounded-full"
                      src={user?.photo}
                      alt=""
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-white py-2 px-6 rounded-[50px] text-primaryColor font-[600] h-[44px] flex items-center justify-center border border-primaryColor border-solid">
                    Log In
                  </button>
                </Link>

                <Link to="/register">
                  <button className="bg-primaryColor py-2 px-6 rounded-[50px] text-white font-[600] h-[44px] flex items-center justify-center">
                    Sign up
                  </button>
                </Link>
              </>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
