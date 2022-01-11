import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import ColorPalette from "../components/ColorPalette";
import { Context } from "../Context";
var colors = "#c0484b";
export default function LayOut({ children }) {
  const [selectedColour, setSelectedColour] = useState(colors);

  colors = selectedColour;

  return (
    <>
      <Context.Provider
        value={{
          selectedColour: selectedColour,
          setSelectedColour: setSelectedColour,
        }}
      >
        <NavBar />
        <ColorPalette />
        {children}
      </Context.Provider>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
