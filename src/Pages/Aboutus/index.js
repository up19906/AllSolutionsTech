import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

export default function Aboutus() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="hero-service breadcrumb-option set-bg"
        style={{
          backgroundImage: `url(${t("aboutus.bgAboutus")})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bg-text">
                <div className="breadcrumb__text">
                  <h2>{t("aboutus.titleAboutus")}</h2>
                  <div className="breadcrumb__links">
                    <Link to="/">{t("aboutus.titleHome")}</Link>
                    <span>{t("aboutus.titleAboutus")}</span>
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
              {t("aboutus.header")}
            </h2>
            <p
              style={{ fontSize: "18px", margin: "4vh 0", textAlign: "center" }}
            >
              {t("aboutus.descrition")}
            </p>
          </Container>
        </div>
      </div>
      <div style={{ width: "98%", paddingLeft: "1.7vw" }}>
        <div
          className="bg-about"
          style={{
            backgroundImage: `url(${t("aboutus.img1")})`,
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
                backgroundImage: `url(${t("aboutus.img2")})`,
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
                backgroundImage: `url(${t("aboutus.img3")})`,
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
