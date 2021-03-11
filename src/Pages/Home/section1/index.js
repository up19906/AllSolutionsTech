import React from "react";
import "./section1.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.scss";
import { useTranslation } from "react-i18next";

export default function Section1() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="banner-top"
        style={{
          backgroundImage: `url(${t("home.section1.bgsection1")})`,
        }}
      ></div>
      <div
        className="sectionabout"
        style={{ boxShadow: "none", margin: "10vh 0" }}
      >
        <div className="blockquote">
          <Container>
            <h2
              className="fontthai"
              style={{ marginTop: "35px", fontSize: "30px" }}
            >
              {t("home.section1.header")}
            </h2>
            <p className="fontthai description">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {t("home.section1.descrition")}
            </p>
            <Link to="/aboutus">
              {" "}
              <button className="primary-btn">
                {t("home.section1.button")}
              </button>
            </Link>
          </Container>
        </div>
      </div>
    </>
  );
}
