import React from 'react'
import"./WorkExp.css"

import { MdSchool } from "react-icons/md";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work-experience">
        <div className="container work-exp">
          <h2 className="text-center mt-3 mb-2 text-uppercase">
            WORK EXPERIENCE
          </h2>
          <hr />
          <VerticalTimeline lineColor="#138781">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2021 - 2025"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">Fresher</h3>
              <p className="vertical-timeline-element-subtitle">
                Full Stack Developer (Fresher) skilled in MERN stack (React.js,
                Node.js, Express.js, MongoDB) with hands-on experience in
                building responsive web applications and RESTful APIs.
                Passionate about clean coding, problem-solving, and continuous
                learning.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="June-2025 - Oct-2025"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Bharat Homeopathy Pvt. Ltd. in HUDA City, Gurugram.
              </h3>
              <p className="vertical-timeline-element-subtitle">
                Maintained and updated inventory and billing data using MS Excel
                and internal software Generated daily and monthly reports for
                management and accounts department. <br />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="Nov-2025 - Jan-2025"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h5 className="vertical-timeline-element-title">
                Som Company ( Reatil Company)
              </h5>
              <p className="vertical-timeline-element-subtitle">
                {" "}
                I worked as a Data Entry Operator at Bharat Homeopathy Pvt.
                Ltd.I handled large volumes of data using MS Excel and internal
                software, verified entries to avoid errors, and generated daily
                reports for management I handled large volumes of data using MS
                Excel and internal software, verified entries to avoid errors,
                and generated daily reports for management This role helped me
                develop strong attention to detail, data management skills, and
                efficiency in handling administrative tasks.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default WorkExp;
