import React from "react";

import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
export default function NavBar() {
  const router = useRouter();
  console.log("render test");
  return (
    <Navbar expand="md" className={"nav-bar py-3"}>
      <Container fluid>
        <Navbar.Brand className={"ms-2"}>Joel Vargas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end w-100">
            <Nav.Link onClick={() => router.push("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => router.push("/resume")}>
              Experience
            </Nav.Link>
            <Nav.Link onClick={() => router.push("/projects")}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
