import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18next from "i18next";

import "./sty.css";

export default function Footer() {
  const { t } = useTranslation();
  const datas = i18next.t("footer.services", { returnObjects: true });
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
                  src={t("footer.logo")}
                  alt="logo"
                />
              </Col>
              <Col lg={5}>
                <p className="font-weight-bold" style={{ fontSize: "32px" }}>
                  {t("footer.namecontact")}
                </p>
                <p className="font-weight-bold" style={{ fontSize: "19px" }}>
                  {t("footer.name")}
                </p>
                <p style={{ fontSize: "18px" }}>
                  <i
                    className="fa fa-map-marker"
                    style={{ marginRight: "5px" }}
                  />
                  <b>
                    {t("footer.head1")}
                    <br />
                  </b>
                  {t("footer.Address1")}
                  <br />
                  <br />
                  <i className="fa fa-phone"></i> {t("footer.tel")}
                  <br />
                  <i
                    className="fa fa-envelope"
                    style={{ paddingRight: "5px" }}
                  />
                  {t("footer.email")}
                  <br /> <br />
                </p>
              </Col>
              <Col lg={3}>
                <p className="font-weight-bold" style={{ fontSize: "32px" }}>
                  {t("footer.nameservices")}
                </p>
                <p style={{ fontSize: "18px" }} className="footerservices">
                  {datas.map(function (data, i) {
                    return (
                      <div key={i}>
                        <Link to="/services">{data}</Link>
                        <br />
                      </div>
                    );
                  })}
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
