import React from "react";
import "./Project.css";
import img1 from '../../assets/download (1).png'
import img2 from '../../assets/15-Facts-About-Coding-Every-Kid-Should-Know.png'
import img3 from '../../assets/WhatsApp Image 2026-02-11 at 9.34.48 PM.jpeg'
const Project = () => {
  return (
    <div className="container project" id="project">
      <h2 className="text-center mt-3 mb-2 text-uppercase">
        Top Recent Projects
      </h2>
      <hr />

      <p className="text-center pb-3">
        Here are my 3 recent projects with live link and source code <br />
        Developed a fully functional, responsive single-page eCommerce web
        application using React.js Integrated Firebase Authentication for user
        login and sign-up features Used EJS to serve dynamic HTML content such
        as listing page Designed with modern UI principles and built for
        performance and scalability
      </p>

      <div className="row" id="ads">
        {/* Project Card */}
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">Full Stack</span>

              <img
                src={img3}
                alt="project1"
                className="img-fluid"
              />
            </div>

            <div className="card-image-overlay m-auto">
              <span className="card-detail-badge">JavaScript</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">MySQL</span>
              <span className="card-detail-badge">MongoDB</span>
            </div>

            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase">Listing & Traveling</h5>
              </div>

              {/* Add your live link here */}
              <a
                className="ad-btn"
                href="https://github.com/gpankajkumar/Aibnb.git"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">eCommerce</span>
              <img
                src={img2}
                alt="project1"
                className="img-fluid"
              />
            </div>

            <div className="card-image-overlay m-auto">
              <span className="card-detail-badge">React</span>
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">MySQL</span>
            </div>

            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase">User login and SignUp</h5>
              </div>

              {/* Add your live link here */}
              <a
                className="ad-btn"
                href="https://faishion-project.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">Fronted</span>

              <img
                src={img1}
                alt="project1"
                className="img-fluid"
              />
            </div>

            <div className="card-image-overlay m-auto">
              <span className="card-detail-badge">HTML</span>
              <span className="card-detail-badge">CSS</span>
              <span className="card-detail-badge">Bootstrap</span>
            </div>

            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase">Shoping and Buy Clone</h5>
              </div>

              {/* Add your live link here */}
              <a
                className="ad-btn"
                href="https://github.com/gpankajkumar/Amazon-Clone.git"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
