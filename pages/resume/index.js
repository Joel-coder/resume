import React, { useEffect, useState } from "react";
import colors from "./css-colors";
import FadeInSection from "../../components/FadeInSection";

export default function Resume() {
  return (
    <>
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
