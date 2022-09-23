import React, { useContext } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import ColorPalette from "../../components/ColorPalette";
import MiddleContainer from "../../components/MiddleContainer";
export default function LandingPage() {
  return (
    <>
      <div
        className={
          "d-flex  justify-content-center align-items-center w-100 h-100"
        }
      >
        <MiddleContainer />
        <ColorPalette />
        <div className="side-text d-none d-md-block h-100">
          {"Select a color to change the theme"}
        </div>
      </div>
    </>
  );
}
