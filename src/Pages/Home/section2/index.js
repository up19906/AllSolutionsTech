import React from "react";
import "./stylesection2.scss";
import "./testsyle.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Section2() {
  const { t } = useTranslation();
  const datas = i18next.t("home.section2.services_type", {
    returnObjects: true,
  });
  const datasulotion = i18next.t("home.section2.services_package", {
    returnObjects: true,
  });

  return (
    <>
      <div
        className="section"
        style={{
          backgroundColor: "#ffffff00",
          boxShadow: "0px 6px 13px 3px rgba(0, 0, 255, 0.158)",
        }}
      >
        <div className="h-text" style={{ marginBottom: "10vh" }}>
          <h1 className="heading"> {t("home.section2.header")} </h1>{" "}
        </div>
        <Container>
          <Row>
            <Col lg={9}>
              <Row>
                {datas.map(function (data, i) {
                  return (
                    <Col key={i}>
                      <div data-aos="fade-up">
                        <div className="content-wrapper">
                          <div className="news-card">
                            <Link
                              to="/services"
                              className="news-card__card-link"
                            ></Link>

                            <img
                              src={data.img}
                              alt={data.alt}
                              className="news-card__image"
                            />
                            <div className="news-card__text-wrapper">
                              <h3 className="news-card__title fontthai">
                                {data.title}
                              </h3>

                              <div className="news-card__details-wrapper">
                                <Link
                                  to="/services"
                                  className="news-card__read-more"
                                >
                                  {t("home.section1.button")}{" "}
                                  <i className="fa fa-arrow-right" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>

            <Col lg={3}>
              <div data-aos="fade-up">
                <div className="single-profile mb-30">
                  {/* Back */}
                  <div className="single-profile-back-last">
                    <h3 className="fontthai">{t("home.section2.title1")}</h3>
                    <p className="fontthai">{t("home.section2.detail")}</p>

                    <Link
                      to="/services"
                      className="news-card__read-more"
                      style={{
                        background: "#fff0",
                        color: "#212529",
                        border: "none",
                      }}
                    >
                      <p style={{ fontWeight: "700" }}>
                        {t("home.section2.button")} »
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="section"
        style={{
          boxShadow: " rgba(0, 0, 255, 0.157) 0px 0px 16px 6px",
        }}
      >
        <div
          className="section2-bg"
          style={{
            backgroundImage: "url(Picture/bg3.jpg)",
          }}
        >
          <div className="section2-text">
            <Row style={{ marginRight: "0" }}>
              <Col xs={3} sm={3} md={3} lg={3}>
                <b />
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <h3>{t("home.section2.title2")}</h3>
              </Col>
              <Col s={3} sm={3} md={3} lg={3}>
                <b />
              </Col>
            </Row>
            <p style={{ fontSize: "17px", marginRight: "5vw" }}>
              {t("home.section2.description")}
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "-6vw",
            marginLeft: "2.5vw",
            marginRight: " 2vw ",
          }}
        >
          <Row>
            {datasulotion.map(function (data, i) {
              return (
                <Col lg={4} key={i}>
                  <div
                    className="news-card"
                    style={{
                      borderRadius: "0",
                      height: "auto",
                    }}
                  >
                    <Link
                      to={data.href}
                      className="news-card__card-link"
                    ></Link>

                    <img
                      style={{ maxWidth: "100%", height: "auto" }}
                      src={data.img}
                      alt={data.alt}
                      className="news-card__image"
                    />
                    <div className="news-card__text-wrapper">
                      <h3 className="news-card__title fontthai">
                        {data.title}
                      </h3>

                      <div className="news-card__details-wrapper">
                        <Link to={data.href} className="news-card__read-more">
                          {t("home.section1.button")}{" "}
                          <i className="fa fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}
