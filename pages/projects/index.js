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
  ];
  return (
    <>
      <div className=" d-flex flex-row justify-content-center align-items-center vh-100">
        <div className=" d-flex flex-row justify-content-around w-75">
          {projectsInfo.map((info, index) => (
            <Card style={{ width: "18rem" }} className="card" key={index}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Text>{info.Description}</Card.Text>
                <Card.Text>{info.Technologies}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
