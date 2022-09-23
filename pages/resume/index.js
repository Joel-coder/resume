import React, { useEffect, useState, useContext } from "react";
//import colors from "./css-colors";
import FadeInSection from "../../components/FadeInSection";
import { Context } from "../../components/Context";
import resumeInfoJSON from "./resumeInfo.json";
import ExperienceContent from "../../components/ExperienceContent";
export default function Resume() {
  const value = useContext(Context);
  const { selectedColour } = value;

  const array = [...resumeInfoJSON];
  console.log(array);
  return (
    <>
      <div className="h-100 resume-container">
        <div className="main-container">
          {resumeInfoJSON.map((resumeInfoJSON, index) => (
            <FadeInSection key={index}>
              <ExperienceContent
                resumeInfoJSON={resumeInfoJSON}
                selectedColour={selectedColour}
              />
            </FadeInSection>
          ))}
        </div>
      </div>
    </>
  );
}
/*export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["resume"])), // page must wait for this translation file to load
  },
});*/
