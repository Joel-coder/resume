import React, { useContext } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import Image from "next/image";
import ColorPalette from "../../components/ColorPalette";
import { Context } from "../../Context";

export default function LandingPage() {
  const token =
    "AQVsZF130ESO1hsCbTsnQWPSk_EdvkngZCVoftfvSfi4CwlOT0hDg6sZjEwUSMKOAYXM-rS8e7QJmcw89whlasmUN1H7pVZTK8WZXiUwLmp2WhwD1VzVEOJe-zPPcPPSFFZhMCE4aRfIQuuA0mPWJGlb4BMjexxm5LHXdG8hFDflhQrDoRKaeiFDeBrzo6GBFKwW2N-IYcSCcc4VNdsUytOnPUFEZZ2BCymEQzU192GK7at2VM1nwVvh0VcuMCk5CZUwB85vr1nyaNqfJPvqfZY3zNRFOH2ZfhJcQg9iRK_5hnJTaZmplBvwN7ogKXNQQ13Dpj_rT5Kyt57ET87lLioG0wFXAQ";
  const value = useContext(Context);
  const { selectedColour, setSelectedColour } = value;
  const myLoader = ({ src, width, quality }) => {
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
        <span className="middle-container my-3 h-100 ">
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
                "I am an Engineer with almost 5 years of experience in the IT industry. In the last 2 years I started focusing more on developing software solutions, and I spent the last year working exclusively with software development. I strive to develop the highest quality software and I am a declarative paradigm enthusiast, because I believe code should describe itself. I value long term results and take ownership of the work that needs to be done. Due to my curious nature, I excel in places where I am constantly learning and improving."
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
                className="bi bi-linkedin me-2"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/joel-vargas-2540a419a/"
                  );
                }}
              ></i>
              <a
                className="bi bi-file-person-fill ms-2"
                href="assets/Joel_Vargas.pdf"
              ></a>
            </div>
          </div>
        </span>
        <ColorPalette />
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
