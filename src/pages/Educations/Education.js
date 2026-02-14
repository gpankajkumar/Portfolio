import React from "react";
import "./Education.css";
import { MdSchool } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="container education" id="educatin">
      <h2 className="text-center mt-3 mb-2 text-uppercase">
        Education Datails
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
          <h3 className="vertical-timeline-element-subtitle">B Tech</h3>
          <p className="vertical-timeline-element">RGPV</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="Nov-2025 - Jan-2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h5 className="vertical-timeline-element-subtitle">Full Stack</h5>
          <p className="vertical-timeline-element">Apna College</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2021 - 2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h4 className="vertical-timeline-element-subtitle">Java</h4>
          <p className="vertical-timeline-element">Coding Thinker</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
