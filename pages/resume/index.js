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
      technolgies: "Technologies",
      color: colors[0],
    },
    {
      company: "Centennial College",
      position: "Front-end Developer",
      startDate: "May, 2021",
      endDate: "Dec, 2021",
      country: "Canada",
      description: "Description",
      technolgies: "Technologies",
      color: colors[1],
    },
  ]);

  return (
    <>
      <div className="main-container">
        <h1>All the CSS colors!</h1>

        {profileInfo.map((profileInfo, index) => (
          <FadeInSection key={index}>
            <div className="box" style={{ backgroundColor: profileInfo.color }}>
              <span>{profileInfo.company}</span>
            </div>
          </FadeInSection>
        ))}
      </div>
    </>
  );
}
