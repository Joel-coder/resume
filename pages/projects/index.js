import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import colors from "./css-colors";

export default function Project() {
  const projectsInfo = [
    {
      Title: "Confidential",
      Description:
        "web app for corporate clients to create and manage ad campaigns that are run in the social media sister application. Vendors can manage their audiences and ad campaigns while viewing data about the audiences they've reached",
      Technologies: "React, Next, Jest, Node, Express",
    },
    {
      Title: "Confidential",
      Description: "website for renting vessels",
      Technologies: "React, Bootstrap, Next, Jest, Node, Express",
    },
    {
      Title: "Confidential",
      Description: "ticketing system",
      Technologies: "React, Bootstrap, Next, Jest, Node, Express",
    },
  ];
  return (
    <>
      <div className=" ">
        <div className="w-100 h-100 parent-card">
          {projectsInfo.map((info, index) => (
            <div className="child-card h-100">
              <Card
                style={{ width: "18rem" }}
                key={index}
                className="h-100 mt-5"
              >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Text>{info.Description}</Card.Text>
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