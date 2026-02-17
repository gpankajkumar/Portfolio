import React from "react";
import "./Menus.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { FcHome, FcAbout, FcManager, FcBiotech } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { BsFillProjectorFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";

function Menus({ toggle }) {
  // Animation for profile image (Zoom effect replacement)
  const imageAnimation = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  // Menu animation (slide from left)
  const menuAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemAnimation = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      {toggle ? (
        <>
          {/* Profile Image Animation */}
          <motion.div
            className="navbar-profile-pic"
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
          >
            <img src="/1686734377978.jpg" alt="pic" />
          </motion.div>

          {/* Menu Items */}
          <motion.div
            className="nav-items"
            variants={menuAnimation}
            initial="hidden"
            animate="visible"
          >
            <div className="nav-item">
              <motion.div className="nav-link" variants={itemAnimation}>
                <Link to="home" spy smooth offset={-100} duration={100}>
                  <FcHome /> Home
                </Link>
              </motion.div>

              <motion.div className="nav-link" variants={itemAnimation}>
                <Link to="about" spy smooth offset={-100} duration={100}>
                  <FcAbout /> About
                </Link>
              </motion.div>

              <motion.div className="nav-link" variants={itemAnimation}>
                <Link to="education" spy smooth offset={-100} duration={100}>
                  <MdCastForEducation /> Education
                </Link>
              </motion.div>

              <motion.div className="nav-link" variants={itemAnimation}>
                <Link to="skills" spy smooth offset={-100} duration={100}>
                  <FcBiotech /> Tech Stack
                </Link>
              </motion.div>

              <motion.div className="nav-link" variants={itemAnimation}>
                <Link to="project" spy smooth offset={-100} duration={100}>
                  <BsFillProjectorFill /> Project
                </Link>
              </motion.div>

              <motion.div className="nav-link" variants={itemAnimation}>
                <Link
                  to="work-experience"
                  spy
                  smooth
                  offset={-100}
                  duration={100}
                >
                  <FcManager /> Work Experience
                </Link>
              </motion.div>

              <motion.div className="nav-link" variants={itemAnimation}>
                <Link to="contact" spy smooth offset={-100} duration={100}>
                  <BiSolidContact /> Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          {/* Collapsed Menu */}
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy smooth offset={-100} duration={100}>
                  <FcHome title="Home" />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="about" spy smooth offset={-100} duration={100}>
                  <FcAbout title="About" />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="education" spy smooth offset={-100} duration={100}>
                  <MdCastForEducation title="Education" />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="skills" spy smooth offset={-100} duration={100}>
                  <FcBiotech title="Tech Stack" />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="project" spy smooth offset={-100} duration={100}>
                  <BsFillProjectorFill title="Project" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="work-experience"
                  spy
                  smooth
                  offset={-100}
                  duration={100}
                >
                  <FcManager title="Work Experience" />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="contact" spy smooth offset={-100} duration={100}>
                  <BiSolidContact title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menus;
