import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Context } from "../../Context";
//import colors from "./css-colors";

export default function Project() {
  const value = useContext(Context);
  const { selectedColour, setSelectedColour } = value;
  const projectsInfo = [
    {
      Title: "Ads campaigns CRM",
      img: "https://media.sproutsocial.com/uploads/2017/11/Social-Media-Ideas.png",
      Description:
        "Web app for corporate clients to create and manage ad campaigns that are run in the social media sister application. Vendors can manage their audiences and ad campaigns while viewing data about the audiences they've reached",
      Technologies: "React, Next, Jest, Node, Express",
    },
    {
      Title: "Vessel Rental",
      img: "data:image/png;base64,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",
      Description:
        " It's a watercraft rental site. It connects renters with vessel owners, validating the required documents and managing payments and security deposits",
      Technologies: "React, Bootstrap, Next, Jest, Node, Express",
    },
    {
      Title: "Ticketing System",
      img: "data:image/png;base64,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",
      Description:
        "When I was working as a NOC analyst, Service Now ticketing system was being used to distribute the work among the colleagues, but the NOC operates with three shifts; morning shift, afternoon shift and night shift. Therefore, when every shifts starts the tickets needed to be manually share among the people in the entering shift, so they can continue working on the tickets that were not completed by the previous shift. I decided to create a solution to overcome this manual process. This program makes a get request to Service Now API to obtain the pending tickets and distribute them by category (follow up, alerts, pending for troubleshooting) among to people in the current shift.",
      Technologies: "Python, CSS",
    },
    {
      Title: "Survey System",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngzO6qgta3WUUP5bBrK4iNN_Pp_4ojk5-FQ&usqp=CAU",
      Description:
        "This application allow the user to perform a CRUD(Create, Read, Update and delete) information that was inserted in the survey, but in order to do that it needs to be authenticated",
      Technologies: "Bootstrap, Jest, Node, Express, Passport, React, MongoDB",
    },
  ];
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
