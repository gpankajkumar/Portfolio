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
              date="June-2025 - Oct-2025"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Bharat Homeopathy
              </h3>
              <p className="vertical-timeline-element-subtitle">
                Data Entery Operator pvt ltd
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
              <h5 className="vertical-timeline-element-title">XYZ</h5>
              <p className="vertical-timeline-element-subtitle">Coding</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2021 - 2025"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">B Tech</h3>
              <h4 className="vertical-timeline-element-subtitle">RGPV</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2021 - 2025"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">B Tech</h3>
              <h4 className="vertical-timeline-element-subtitle">RGPV</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default WorkExp;
