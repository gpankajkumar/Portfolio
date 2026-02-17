import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";

import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact" id="contact">
      {/* Heading Animation */}
      <motion.div
        initial={{ rotate: -180, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Contact Me
        </h2>
        <hr />
      </motion.div>

      <div className="row">
        {/* Left Side Info */}
        <motion.div
          className="col-md-6 contact-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <h5>Connect With🤝</h5>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithubSquare />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookSquare />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          className="col-md-6 contact-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Send Message</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
