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
      technologies: "Technologies",
      color: colors[0],
    },
    {
      company: "mGage a Vivial Company",
      position: "NOC Analyst",
      startDate: "Nov, 2017",
      endDate: "May, 2021",
      country: "USA",
      description: "Description",
      technologies: "Technologies",
      color: colors[1],
    },
    ,
    {
      company: "mGage a Vivial Company",
      position: "NOC Analyst",
      startDate: "Nov, 2017",
      endDate: "May, 2021",
      country: "USA",
      description: "Description",
      technologies: "Technologies",
      color: colors[1],
    },

    {
      company: "mGage a Vivial Company",
      position: "NOC Analyst",
      startDate: "Nov, 2017",
      endDate: "May, 2021",
      country: "USA",
      description: "Description",
      technologies: "Technologies",
      color: colors[1],
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
                  <span> {profileInfo.technologies}</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </>
  );
}
