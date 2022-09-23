import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import { Context } from "./Context";
import { useCookies } from "react-cookie";

export default function LayOut({ children }) {
  const [cookies, setCookie] = useCookies(["user"]);
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
      //secure: true,
      //sameSite: "none",
      maxAge: 3600,
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
        <div
          className={"bg-left"}
          style={{ backgroundColor: selectedColour }}
        ></div>

        <div className={"bg-right"}></div>
        <NavBar />
        {children}
      </Context.Provider>
    </>
  );
}
