import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Context } from "../Context";
import { useCookies } from "react-cookie";

export default function LayOut({ children }) {
  const [cookies, setCookie] = useCookies(["color"]);
  const [selectedColour, setSelectedColour] = useState(undefined);
  var defaultColor = "#fae4cd";
  useEffect(() => {
    cookies.color
      ? setSelectedColour(cookies.color)
      : setSelectedColour(defaultColor);
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
