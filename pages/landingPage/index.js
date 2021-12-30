import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router"; // i18n
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import SideBar from "../../components/Sidebar";
const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split(".");
  return remaining.length
    ? (deepPick(remaining.join("."), object[first]), console.log(first))
    : object[first];
};
const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon",
      },
    },
  },
};

deepPick("data.info.fullname.first", dan); // "Dan"

export default function LandingPage() {
  return (
    <>
      <Navbar bg="light" expand="md" className={"nav-bar py-3"}>
        <Container fluid>
          <Navbar.Brand href="#home" className={"ms-2"}>
            Joel Vargas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-end w-100">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Resume</Nav.Link>
              <Nav.Link href="#home">Projects</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={"bg-left"}></div>

      <div className={"bg-right"}></div>
      <div className="d-flex flex-row justify-content-center align-items-center h-100 ">
        <div className="middle-container d-flex flex-row">
          <div className={"bg-right-inner"}></div>
          <div className={"bg-left-inner"}></div>
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
