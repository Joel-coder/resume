import React, { useEffect, useState, useContext } from "react";
//import colors from "./css-colors";
import FadeInSection from "../../components/FadeInSection";
import { Context } from "../../Context";
import resumeInfoJSON from "./resumeInfo.json";
export default function Resume() {
  const value = useContext(Context);
  const { selectedColour } = value;

  const array = [...resumeInfoJSON, { company: "0" }];
  console.log(array);
  return (
    <>
      <div className="h-100 resume-container">
        <div
          className={"bg-left"}
          style={{ backgroundColor: selectedColour }}
        ></div>

        <div className={"bg-right"}></div>
        <div className="main-container">
          {resumeInfoJSON.map((resumeInfoJSON, index) => (
            <FadeInSection key={index}>
              <div className="box" style={{ backgroundColor: selectedColour }}>
                <div className="inner-box">
                  <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <span className="position-title pb-5">
                      {resumeInfoJSON.company}
                    </span>
                    <span className="pb-3">
                      {resumeInfoJSON.position}
                      <hr className={"line w-100"} />
                    </span>
                    <div className="pb-3">
                      <div className="d-flex flex-row ">
                        <span> {resumeInfoJSON.startDate}</span>
                        <span className="mx-1">{"-"}</span>
                        <span> {resumeInfoJSON.endDate}</span>
                      </div>
                      <hr className={"line w-100"} />
                    </div>
                    <span>
                      {resumeInfoJSON.country}
                      <hr className={"line w-100"} />
                    </span>
                  </div>
                </div>
                <div className="role-description">
                  <p className="pb-2">{"Role description"}</p>
                  <div>{resumeInfoJSON.description}</div>
                </div>
              </div>
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
