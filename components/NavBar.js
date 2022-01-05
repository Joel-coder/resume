import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavBar({ children }) {
  const router = useRouter();
  return (
    <Navbar bg="light" expand="md" className={"nav-bar py-3"}>
      <Container fluid>
        <Navbar.Brand className={"ms-2"}>Joel Vargas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end w-100">
            <Nav.Link onClick={() => router.push("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => router.push("/resume")}>Resume</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
