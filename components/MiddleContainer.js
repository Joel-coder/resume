import { Context } from "./Context";
import React, { useContext } from "react";
import Image from "next/image";
export default function MiddleContainer() {
  const value = useContext(Context);
  const { selectedColour } = value;
  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  return (
    <span className="middle-container my-3 h-100 ">
      <div
        className={"bg-left-inner p-3"}
        style={{ backgroundColor: selectedColour }}
      >
        <p className="heading-left-inner ">{"Hello!"}</p>
        <p className="subheading-left-inner">
          {"What do I do & what I am looking for?"}
        </p>
        <p className="text-left-inner">{}</p>
      </div>
      <div className={"bg-right-inner h-100"}>
        <div className={"p-3"}>
          <Image
            width={100}
            height={100}
            className={"avatar"}
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
              window.open("https://www.linkedin.com/in/joel-vargas-2540a419a/");
            }}
          ></i>

          <a
            className="bi bi-file-person-fill ms-2"
            href="assets/Joel_Vargas.pdf"
          ></a>
        </div>
      </div>
    </span>
  );
}
