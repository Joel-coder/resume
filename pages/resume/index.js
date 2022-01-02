import React, { useEffect, useState } from "react";
import colors from "./css-colors";
import FadeInSection from "../../components/FadeInSection";
import NavBar from "../../components/NavBar";
export default function Resume() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <h1>All the CSS colors!</h1>

        {colors.map((color) => (
          <FadeInSection key={color}>
            <div className="box" style={{ backgroundColor: color }}>
              <span>{color}</span>
            </div>
          </FadeInSection>
        ))}
      </div>
    </>
  );
}
