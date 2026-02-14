import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return toast.error("Please provide all fields");
    }

    try {
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        message,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          {/* LEFT IMAGE */}
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <LightSpeed>
                  <img
                    src="https://animpet.com/wp-content/uploads/2024/09/contact_us.jpg"
                    alt="contact us"
                    className="image"
                  />
                </LightSpeed>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-6 col-md-6">
            <Rotate>
              <div className="card2 d-flex card border-0 px-4 py-5">
                <h6>
                  Contact With
                  <a href="https://www.linkedin.com/in/pankaj-gupta-28-741ab0293/">
                    <FaLinkedin className="ms-2" size={"25px"} />
                  </a>
                  <a href="https://github.com/gpankajkumar">
                    <FaGithubSquare className="ms-2" size={"25px"} />
                  </a>
                  <a href="https://www.facebook.com/Pankajsahu28">
                    <FaFacebookSquare className="ms-2" size={"25px"} />
                  </a>
                  <a href="https://www.instagram.com/er_pankaj_gupta_28/">
                    <FaSquareInstagram className="ms-2" size={"25px"} />
                  </a>
                </h6>

                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>

                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                  placeholder="Write your message"
                  className="mb-3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <button className="button" onClick={handleSubmit}>
                  SEND MESSAGE
                </button>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
