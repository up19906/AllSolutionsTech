import React from "react";
import "./stylecustomer.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Customer() {
  const { t } = useTranslation();
  const datas = i18next.t("customer", { returnObjects: true });

  return (
    <div>
      <div
        className="hero-service breadcrumb-option set-bg"
        style={{
          backgroundImage: 'url("Picture/customer/customer5_1.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bg-text">
                <div className="breadcrumb__text">
                  <h2>{t("header.menu3")}</h2>
                  <div className="breadcrumb__links">
                    <Link to="/">{t("header.menu1")}</Link>
                    <span>{t("header.menu3")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <ul className="card-list">
          <Row>
            {datas.map(function (data, i) {
              return (
                <Col xs={4} sm={4} md={4} lg={3} xl={3} key={i}>
                  <div className="card">
                    <img
                      className="card-image"
                      src={data.img}
                      alt="Psychopomp"
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </ul>
      </Container>
    </div>
  );
}
