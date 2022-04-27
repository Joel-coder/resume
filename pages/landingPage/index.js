import React, { useContext } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import Image from "next/image";
import ColorPalette from "../../components/ColorPalette";
import { Context } from "../../Context";

export default function LandingPage() {
  const value = useContext(Context);
  const { selectedColour } = value;
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
                className={"avatars"}
                loader={myLoader}
                src={"/assets/images/1613929200670.jpg"}
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
