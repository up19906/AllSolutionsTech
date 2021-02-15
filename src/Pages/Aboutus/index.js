import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

export default function PrintDesign() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="hero-service breadcrumb-option set-bg"
        style={{
          backgroundImage: 'url("Picture/about/about5.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bg-text">
                <div className="breadcrumb__text">
                  <h2>{t("header.menu4")}</h2>
                  <div className="breadcrumb__links">
                    <Link to="/">{t("header.menu1")}</Link>
                    {/* <span>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span> */}
                    <span>{t("header.menu4")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionabout">
        <div className="blockquote">
          <Container>
            <h2 style={{ marginTop: "35px", fontSize: "28px" }}>
              {t("home.section1.header")}
            </h2>
            <p
              style={{ fontSize: "18px", margin: "4vh 0", textAlign: "center" }}
            >
              {t("aboutus.descrition")}
            </p>
          </Container>
        </div>
      </div>
      <div style={{ width: "99%", paddingLeft: "1.7vw" }}>
        <div
          className="bg-about"
          style={{
            backgroundImage: "url(Picture/bg-about1.jpg)",
          }}
        >
          <Row>
            <Col lg={{ size: 6, offset: 6 }}>
              <div className="about-bgtext">
                <div className="about-text">
                  <h2>{t("aboutus.aboutus_title1")}</h2>
                  <p style={{ fontSize: "17px" }}>
                    {t("aboutus.aboutus_description1")}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Row style={{ margin: "0.5vh 0.25vw 5vh 0.25vw" }}>
          <Col lg={6} style={{ padding: "0.25vw" }}>
            <div
              className="bg-about"
              style={{
                // margin: "0 50px",
                backgroundImage: "url(Picture/bg-about2_1.jpg)",
              }}
            >
              <Row>
                <Col lg={{ size: 6, offset: 2 }}>
                  <div className="about-bgtext">
                    {" "}
                    <div className="about-text">
                      <h2>{t("aboutus.aboutus_title2")}</h2>
                      <p style={{ fontSize: "17px" }}>
                        {t("aboutus.aboutus_description2")}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6} style={{ padding: "0.25vw" }}>
            <div
              className="bg-about"
              style={{
                // margin: "0 50px",
                backgroundImage: "url(Picture/bg-about3_1.jpg)",
              }}
            >
              <Row>
                <Col lg={{ size: 6, offset: 1 }}>
                  <div className="about-bgtext">
                    {" "}
                    <div className="about-text">
                      <h2>{t("aboutus.aboutus_title3")}</h2>
                      <p style={{ fontSize: "17px" }}>
                        {t("aboutus.aboutus_description3")}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
