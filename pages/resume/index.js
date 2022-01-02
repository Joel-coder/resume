import React, { useEffect, useState } from "react";
import colors from "./css-colors";
import FadeInSection from "../../components/FadeInSection";

export default function Resume() {
  const [profileInfo, setProfileInfo] = useState([
    {
      company: "Centennial College",
      position: "Front-end Developer",
      startDate: "May, 2021",
      endDate: "Dec, 2021",
      country: "Canada",
      description: "Description",
      technologies: "klk",
      color: colors[0],
    },
    {
      company: "mGage a Vivial Company",
      position: "NOC Analyst",
      startDate: "Nov, 2017",
      endDate: "May, 2021",
      country: "USA",
      description:
        "As an analyst in the network operation center my main responsibilities are detect and troubleshoot servers, network, and software problems. In case the issue or incident correspond to another internal or external team, follow the appropriate escalation channels. Also, create custom queries as per the client requirements and provide assistance to any inquiry regarding technical matters.",
      technologies: "",
      color: colors[1],
    },
    ,
    {
      company: "Nexton",
      position: "IT Talent Specialist",
      startDate: "Jan, 2020",
      endDate: "Feb, 2021",
      country: "USA",
      description:
        "I used my technical and academic background in the IT industry to analyze prospects' profiles and define a suitable opportunity for them, based on area of expertise, technologies, current and past industries.",
      technologies: "technologies",
      color: colors[2],
    },
    {
      company: "FDH",
      position: "Technical Support Representative",
      startDate: "Jul, 2017",
      endDate: "Nov, 2017",
      country: "USA",
      description:
        "My main role as a technical support specialist was to provide technical assistance to either businesses or customers that are experiencing hardware or software issues. Also, managed credentials and privileges of the user within the domain.",
      technologies: "Technologies",
      color: colors[3],
    },
  ]);

  return (
    <>
      <div className="main-container">
        {profileInfo.map((profileInfo, index) => (
          <FadeInSection key={index}>
            <div className="box" style={{ backgroundColor: profileInfo.color }}>
              <div className="inner-box">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                  <span className="position-title">{profileInfo.company}</span>
                  <span> {profileInfo.position}</span>
                  <div className="d-flex flex-row">
                    <span> {profileInfo.startDate}</span>
                    <span className="mx-1">{"-"}</span>
                    <span> {profileInfo.endDate}</span>
                  </div>

                  <span> {profileInfo.country}</span>
                </div>
              </div>
              <div className="role-description">
                <p className="pb-2">{"Role description"}</p>
                <div>{profileInfo.description}</div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </>
  );
}
