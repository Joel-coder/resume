import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import projectsInfoJSON from "./projectsInfo.json";
import { Context } from "../../Context";
//import colors from "./css-colors";

export default function Project() {
  const value = useContext(Context);
  const { selectedColour, setSelectedColour } = value;
  //spread operator to include the elements/objects of the json in a array
  const projectsInfo = [...projectsInfoJSON];

  return (
    <>
      <div
        className={"bg-left"}
        style={{ backgroundColor: selectedColour }}
      ></div>

      <div className={"bg-right"}></div>
      <div className=" ">
        <div className="w-100 h-100 parent-card">
          {projectsInfo.map((info, index) => (
            <div className="child-card h-100" key={index}>
              <Card style={{ width: "18rem" }} className="h-100 mt-4 mb-3">
                <Card.Img variant="top" src={info.img} />

                <Card.Body>
                  <Card.Title className="pb-2">{info.Title}</Card.Title>
                  <Card.Text>{info.Description}</Card.Text>
                  <span className={"font-weight-bold mb-2"}>
                    {"Technologies"}
                  </span>
                  <Card.Text>{info.Technologies}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/*export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["projects"])), // page must wait for this translation file to load
  },
});
*/
