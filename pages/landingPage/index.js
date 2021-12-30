import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router"; // i18n
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import SideBar from "../../components/Sidebar";

export default function LandingPage() {
  return (
    <div className="w-100 vh-100">
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
      <div
        className={
          "d-flex flex-row justify-content-center align-items-center w-100 h-100"
        }
      >
        <div className="middle-container ">
          <div className={"bg-left-inner p-3"}>
            <p className="heading-left-inner">{"Hello"}</p>
            <p className="subheading-left-inner">
              {"What do I do & what I am looking for?"}
            </p>
          </div>
          <div className={"bg-right-inner"}>
            <div className={"p-3"}>
              <img
                src="https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=31c49726c022c1d41ee9b9b6b7254b46"
                alt="Avatar"
                class="avatar"
              />
            </div>
            <span className="name">{"Joel Vargas"}</span>
            <hr className={"line"} />
            <span className="role">{"Software Developer"}</span>
            <div className="footer-left-inner">
              <i class="bi bi-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
