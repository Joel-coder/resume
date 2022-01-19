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

var colors = "#fae4cd";
export default function LayOut({ children }) {
  const [selectedColour, setSelectedColour] = useState(colors);
  const [cookies, setCookie] = useCookies(["user"]);

  cookies.color ? (colors = cookies.color) : (colors = selectedColour);

  useEffect(() => {
    setCookie("color", selectedColour, {
      path: "/",
      secure: true,
      sameSite: "none",
    });
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
