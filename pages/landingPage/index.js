import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router"; // i18n
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SideBar from "../../components/Sidebar";
export default function LandingPage() {
  return (
    <>
      <Col className="container-all" xs={12}>
        <SideBar />
        <Col className="card-container">
          <Card style={{ width: "50rem", maxHeight: "50px" }}>
            <Card.Img
              variant="top"
              src="https://lh3.googleusercontent.com/proxy/1QMoc28Djm9qai28SMIe0CHX20ifTvtl1Ci-pnVeoZnpXCJrQ_lj731s8rFhh1a0ttxQfk_JKPUCLYwDrnVEt9EsQ5CRWOYMLNkk_WTNWsxHkBA"
            />
            <Card.Body className="d-flex flex-row card-bg">
              <Col>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Col>
              <Col>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Col>
              <Col>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Col>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
