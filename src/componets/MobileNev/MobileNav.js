import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

import { Link } from "react-scroll";

import { FcHome, FcAbout, FcManager, FcBiotech } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { BsFillProjectorFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";

import "./MobileNav.css";



const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // funtion handle

  const handleOpen = () => {
    setOpen(!open);
  };

  // menu click
  
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <CiMenuFries
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <RiMenuFill
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nave-title">My Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <MdCastForEducation /> Education{" "}
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBiotech />
                    Tech Stock
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <BsFillProjectorFill />
                    Project
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work-experience"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcManager />
                    Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <BiSolidContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
