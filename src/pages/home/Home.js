import React, { useState } from "react";

import { useTheme } from "../../componets/context/ThemeContext";

import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/FullStack Developer.pdf";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

import "./Home.css";
function Home() {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={"30px"} />
          ) : (
            <BsFillSunFill size={"30px"} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hi👋 I'm Pankaj</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "React Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=9771805086"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a className="btn btn-cv" href={Resume} download="Pankaj_pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
