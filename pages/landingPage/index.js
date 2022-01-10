import React, { useEffect, useState, useContext } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router"; // i18n
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NavBar from "../../components/NavBar";
import API from "../api/baseApiIinstance";
import Image from "next/image";
import ColorPalette from "../../components/ColorPalette";
import { Context } from "../../components/Context";
export default function LandingPage() {
  const token =
    "AQVsZF130ESO1hsCbTsnQWPSk_EdvkngZCVoftfvSfi4CwlOT0hDg6sZjEwUSMKOAYXM-rS8e7QJmcw89whlasmUN1H7pVZTK8WZXiUwLmp2WhwD1VzVEOJe-zPPcPPSFFZhMCE4aRfIQuuA0mPWJGlb4BMjexxm5LHXdG8hFDflhQrDoRKaeiFDeBrzo6GBFKwW2N-IYcSCcc4VNdsUytOnPUFEZZ2BCymEQzU192GK7at2VM1nwVvh0VcuMCk5CZUwB85vr1nyaNqfJPvqfZY3zNRFOH2ZfhJcQg9iRK_5hnJTaZmplBvwN7ogKXNQQ13Dpj_rT5Kyt57ET87lLioG0wFXAQ";
  const [selectedColour, setSelectedColour] = useContext(Context);
  useEffect(() => {
    API()
      .get(`me/`, {
        headers: {
          // authorization: "Bearer " + token,
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Content-Type": "application/x-www-form-urlencoded",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        },
      })
      .then(async (response) => {
        if ((response.status = 200)) {
          console.log("successful post request");
          console.log("res", response.data);
        }
      })
      .catch((e) => {
        console.log("message", e);
        //router.push("/404");
      });
  }, []);
  const router = useRouter();

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div
        className={"bg-left"}
        style={{ backgroundColor: selectedColour }}
      ></div>

      <div className={"bg-right"}></div>
      <div
        className={
          "d-flex flex-row justify-content-center align-items-center w-100 h-100"
        }
      >
        <span className="middle-container my-3">
          <div
            className={"bg-left-inner p-3"}
            style={{ backgroundColor: selectedColour }}
          >
            <p className="heading-left-inner ">{"Hello!"}</p>
            <p className="subheading-left-inner">
              {"What do I do & what I am looking for?"}
            </p>
            <p className="text-left-inner">
              {
                "You’ve always had a penchant for solving puzzles and problems—especially when it comes to technology. Not only that, but friends and family frequently come to you for help with all their tech troubles. And you’re typically the first one in line when a new gadget is released."
              }
            </p>
          </div>
          <div className={"bg-right-inner h-100"}>
            <div className={"p-3 "}>
              <Image
                width={100}
                height={100}
                className={"avatar"}
                loader={myLoader}
                src={
                  "https://media-exp1.licdn.com/dms/image/C4E03AQGr5cpe10CWFQ/profile-displayphoto-shrink_200_200/0/1613929200670?e=1646265600&v=beta&t=VtKFsjL5w0b9svVrxb1_zcrrp4-lMUFRbUrdtc5sNKM"
                }
                alt="Avatar"
              />
            </div>
            <span className="name">{"Joel Vargas"}</span>
            <hr className={"line"} style={{ color: selectedColour }} />
            <span className="role">{"Software Developer"}</span>

            <div className="footer-left-inner">
              <i
                className="bi bi-linkedin"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/joel-vargas-2540a419a/"
                  );
                }}
              ></i>
            </div>
          </div>
        </span>

        <div className="side-text d-none d-md-block h-100">
          {"Select a color to change the theme"}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
