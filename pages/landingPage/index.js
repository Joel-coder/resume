import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router"; // i18n
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NavBar from "../../components/NavBar";

export default function LandingPage() {
  const router = useRouter();
  const [selectedColour, setSelectedColour] = useState("#c0484b");
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
  useEffect(() => {
    console.log(selectedColour);
  }, [selectedColour]);

  return (
    <>
      <div
        className={"bg-left"}
        style={{ backgroundColor: selectedColour }}
      ></div>

      <div className={"bg-right"}></div>
      <div
        className={
          "d-flex flex-row justify-content-center align-items-center w-100 vh-100 "
        }
      >
        <span className="middle-container">
          <div
            className={"bg-left-inner p-3"}
            style={{ backgroundColor: selectedColour }}
          >
            <p className="heading-left-inner">{"Hello!"}</p>
            <p className="subheading-left-inner">
              {"What do I do & what I am looking for?"}
            </p>
            <p className="text-left-inner">
              {
                "You’ve always had a penchant for solving puzzles and problems—especially when it comes to technology. Not only that, but friends and family frequently come to you for help with all their tech troubles. And you’re typically the first one in line when a new gadget is released."
              }
            </p>
          </div>
          <div className={"bg-right-inner"}>
            <div className={"p-3"}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGr5cpe10CWFQ/profile-displayphoto-shrink_200_200/0/1613929200670?e=1646265600&v=beta&t=VtKFsjL5w0b9svVrxb1_zcrrp4-lMUFRbUrdtc5sNKM"
                alt="Avatar"
                class="avatar"
              />
            </div>
            <span className="name">{"Joel Vargas"}</span>
            <hr className={"line"} />
            <span className="role">{"Software Developer"}</span>
            <div className="d-flex flex-row justify-content-around align-items-center w-100 h-100 px-4">
              <div></div>
            </div>
            <div className="footer-left-inner">
              <i
                class="bi bi-linkedin"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/joel-vargas-2540a419a/"
                  );
                }}
              ></i>
            </div>
          </div>
        </span>
        <ul className="icons">
          {defaultColours.map((colour, index) => (
            <li key={index} onClick={() => setSelectedColour(colour)}>
              <span
                className={`color border-radius ${
                  selectedColour === colour ? "selected" : ""
                }`}
                style={{ backgroundColor: colour }}
              ></span>
            </li>
          ))}
        </ul>
        <div className="side-text">{"Select a color to change the theme"}</div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
