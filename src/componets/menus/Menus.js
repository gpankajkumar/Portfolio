import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";
import { Link} from 'react-scroll';

import { FcHome, FcAbout, FcManager, FcBiotech} from "react-icons/fc";
import { MdCastForEducation,  } from "react-icons/md";
import { BsFillProjectorFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";



function Menus({toggle}) {
  return (
    <>
      {toggle ? (
        <>
        < Zoom >
          <div className="navbar-profile-pic">
            <img src="/1686734377978.jpg" alt="pic" />
          </div>
          </Zoom>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
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
                >
                  <BiSolidContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome title="Home" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title="About" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdCastForEducation title="Education" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech title="Techn Stock" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <BsFillProjectorFill title="Project" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work-experience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcManager title="Work Experience" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <BiSolidContact title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
