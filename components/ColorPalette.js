import React, { useEffect, useRef, useContext } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Context } from "./Context";

export default function ColorPalette() {
  const router = useRouter();

  const value = useContext(Context);

  let { selectedColour, setSelectedColour } = value;

  const defaultColours = [
    "#c0484b",
    "#bad5f0",
    "#fae4cd",
    "#b0abcb",
    "#e3a7c0",
    "#f8efe6",
    "#c2d5a8",
    "#f0d5ba",
  ];

  return (
    <>
      <ul className="icons d-none d-md-block">
        {defaultColours.map((colour, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedColour(colour);
            }}
          >
            <span
              className={`color border-radius ${
                selectedColour === colour ? "selected" : ""
              }`}
              style={{ backgroundColor: colour }}
            ></span>
          </li>
        ))}
      </ul>
    </>
  );
}
