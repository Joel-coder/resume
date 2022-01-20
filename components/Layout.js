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
import { useCookies } from "react-cookie";

const CookiesProvider = (e) => {
  e;
};

export default function LayOut({ children }) {
  const [cookies, setCookie] = useCookies(["color"]);
  const [selectedColour, setSelectedColour] = useState("");
  var colors = "#fae4cd";
  useEffect(() => {
    cookies.color
      ? setSelectedColour(cookies.color)
      : setSelectedColour(colors);
  }, []);

  useEffect(() => {
    setCookie("color", selectedColour, {
      path: "/",
      secure: true,
      sameSite: "none",
      maxAge: 3600,
    });

    console.log(cookies.color);
  }, [selectedColour]);

  return (
    <>
      <Context.Provider
        value={{
          selectedColour: selectedColour,
          setSelectedColour: setSelectedColour,
        }}
      >
        <NavBar />

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
