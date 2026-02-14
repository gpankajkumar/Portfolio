
import React from "react";
import "./TechStark.css";
import "../../utils/TechStarkList"
import TechStarkList from "../../utils/TechStarkList";

const TechStark = () => {
  return (
    <>
      <div className="container techStark" id="skills">
        <h2 className="text-center mt-3 mb-2 text-uppercase">
          Technologies Stark
        </h2>
        <hr />
        <p className="text-center pb-3">
          👉 Including programming languages, frameworks, databases, front-end
          and back-end tools, and APIs.
        </p>
        <div className="row">
          {TechStarkList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-contaent">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStark;
