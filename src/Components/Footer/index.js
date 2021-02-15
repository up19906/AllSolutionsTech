import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

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
                <p class="font-weight-bold" style={{ fontSize: "32px" }}>
                  CONTACT US
                </p>
                <p class="font-weight-bold" style={{ fontSize: "19px" }}>
                  {t("home.section1.header")}
                  {/* <br />
                  ALL SOLUTIONS TECH CO.,LTD. */}
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
                  {/* <br />
                  47/316 Poppular Rd., Ban Mai, Pak Kret, Nonthaburi 11120{" "} */}
                  <br />
                  {/* <i
                    className="fa fa-map-marker"
                    style={{ marginRight: "5px" }}
                  />
                  <b> {t("header.head2")} </b>
                  <br />
                  {t("header.Address2")} */}
                  {/* <br />
                  3279/25 Suebsiri Rd, T.Nimueng, A.Mueng,
                  NakhonRatchasima,Thailand 30000 <br /> */}
                  <br />
                  <i class="fa fa-phone"></i> 02-012-3795 / 065-969-3552 <br />
                  {/* Tel./Fax. +662-012-3795 <br />
                  Mobile : +665-969-3552 */}
                  {/* <br /> */}
                  <i
                    className="fa fa-envelope"
                    style={{ paddingRight: "5px" }}
                  />
                  ast.allsolutionstech@gmail.com
                  <br /> <br />
                </p>
              </Col>
              <Col lg={3}>
                <p class="font-weight-bold" style={{ fontSize: "32px" }}>
                  SERVICES
                </p>
                <p style={{ fontSize: "18px" }}>
                  {" "}
                  {t("footer.ser1")} <br />
                  {t("footer.ser2")}
                  <br />
                  {t("footer.ser3")}
                  <br />
                  {t("footer.ser4")} <br /> {t("footer.ser5")} <br />{" "}
                  {t("footer.ser6")} <br />
                  {t("footer.ser7")} <br /> {t("footer.ser8")} <br />
                  {t("footer.ser9")} <br />
                  {t("footer.ser10")}
                  <br />
                  {t("footer.ser11")} <br />
                  {t("footer.ser12")}
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
