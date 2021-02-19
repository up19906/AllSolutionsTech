import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./sty.css";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="toppad"
        style={{ boxShadow: " rgba(0, 0, 255, 0.157) 0px 0px 16px 6px" }}
      >
        <div className="sd">
          <br />
          <Container>
            <Row>
              <Col lg={4}>
                <img
                  className="imgfooter"
                  style={{ marginTop: "auto", marginBottom: "5vh" }}
                  src="Picture/logo/ast5.png"
                  alt="logo"
                />
              </Col>
              <Col lg={5}>
                <p className="font-weight-bold" style={{ fontSize: "32px" }}>
                  CONTACT US
                </p>
                <p className="font-weight-bold" style={{ fontSize: "19px" }}>
                  {t("home.section1.header")}
                </p>
                <p style={{ fontSize: "18px" }}>
                  <i
                    className="fa fa-map-marker"
                    style={{ marginRight: "5px" }}
                  />
                  <b>
                    {t("header.head1")}
                    <br />
                  </b>
                  {t("header.Address1")}
                  <br />
                  <br />
                  <i className="fa fa-phone"></i> 02-012-3795 / 065-969-3552 <br />
                  <i
                    className="fa fa-envelope"
                    style={{ paddingRight: "5px" }}
                  />
                  ast.allsolutionstech@gmail.com
                  <br /> <br />
                </p>
              </Col>
              <Col lg={3}>
                <p className="font-weight-bold" style={{ fontSize: "32px" }}>
                  SERVICES
                </p>
                <p style={{ fontSize: "18px" }} className="footerservices">
                  <Link to="/services">{t("footer.ser1")}</Link>
                  <br />
                  <Link to="/services"> {t("footer.ser2")}</Link>
                  <br />
                  <Link to="/services"> {t("footer.ser3")}</Link>
                  <br />
                  <Link to="/services"> {t("footer.ser4")}</Link>
                  <br />
                  <Link to="/services"> {t("footer.ser5")} </Link>
                  <br />
                  <Link to="/services">{t("footer.ser6")}</Link>
                  <br />
                  <Link to="/services"> {t("footer.ser7")}</Link>
                  <br />
                  <Link to="/services">{t("footer.ser8")}</Link>
                  <br />
                  <Link to="/services">{t("footer.ser9")}</Link>
                  <br />
                  <Link to="/services"> {t("footer.ser10")}</Link>
                  <br />
                  <Link to="/services"> {t("footer.ser11")}</Link>
                  <br />
                  <Link to="/services">{t("footer.ser12")}</Link>
                </p>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
      </div>
    </>
  );
}
