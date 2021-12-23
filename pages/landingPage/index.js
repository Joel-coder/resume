import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router"; // i18n


export default function LandingPage() {
  
  return (
       <>
      <div className={"sidebar"}>
        <div className="header-container">
          <div className={"header-name"}>{"Joel Vargas"}</div>
          <div className={"header-constrast"}></div>
        </div>
        <div className="ms-4">
          <div className={"sidebar-font-heading"}>{"ABOUT"}</div>
          <div className={"sidebar-font-heading"}>{"EXPERIENCES"}</div>
          <div className={"sidebar-font-heading"}>{"EDUCATION"}</div>
          <div className={"sidebar-font-heading"}>{"SKILLS"}</div>
        </div>
      </div>
      <div className="container">
        <div className="me-4"></div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
