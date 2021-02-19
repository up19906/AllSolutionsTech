import React, { useState } from "react";
import "./stylesServics.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Services() {
  const { t } = useTranslation();
  const datas = i18next.t("services.data", { returnObjects: true });
  console.log("testdata ", datas);

  const [activeTab, setActiveTab] = useState([-1, -1]);
  const [activeProduct, setActiveProduct] = useState([-1, -1, -1]);

  const onTitleClick = (subjectIndex, childIndex) => {
    if (activeTab[0] === subjectIndex && activeTab[1] === childIndex) {
      setActiveTab([-1, -1]);
    } else {
      setActiveTab([subjectIndex, childIndex]);
    }
  };
  const onProductClick = (subjectIndex, childIndex, subchildIndex) => {
    if (
      activeProduct[0] === subjectIndex &&
      activeProduct[1] === childIndex &&
      activeProduct[2] === subchildIndex
    ) {
      setActiveProduct([-1, -1, -1]);
    } else {
      setActiveProduct([subjectIndex, childIndex, subchildIndex]);
    }

    // console.log("xxxxxxx", activeTab[0]);
  };

  return (
    <>
      <div>
        <div
          className="hero-service breadcrumb-option set-bg"
          style={{
            backgroundImage: 'url("Picture/servicesimg/solution2.jpg")',
            backgroundPosition: "top center",
          }}
        >
          <Container>
            <Row>
              <div className="col-lg-12 text-center">
                <div className="bg-text">
                  <div className="breadcrumb__text">
                    <h2>{t("header.menu2")}</h2>
                    <div className="breadcrumb__links">
                      <Link to="/">{t("header.menu1")}</Link>
                      <span>{t("header.menu2")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>

        {datas.map(function (data, i) {
          return (
            <div id={data.id} key={i} style={{ width: "100%" }}>
              <div
                className="section"
                style={{
                  boxShadow: " rgba(0, 0, 255, 0.157) 0px 0px 16px 6px",
                  paddingBottom: "0",
                }}
              >
                <div
                  className="section2-bg"
                  style={{
                    backgroundImage: `url(${data.img})`,
                  }}
                >
                  <div
                    className="section2-text projcard-description"
                    style={{
                      backgroundColor: "#ffffff85",
                      padding: "2vw",
                      left: "30%",
                      width: "65vw",
                    }}
                  >
                    <p>{t("services.headdescrition")}</p>
                    <Row>
                      <Col xs={3} sm={3} md={3} lg={3}>
                        <b />
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6}>
                        <h3>{data.textheader}</h3>
                      </Col>
                      <Col s={3} sm={3} md={3} lg={3}>
                        <b />
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div style={{ margin: "5vw 2vw -6vw " }}>
                <Container style={{ padding: "15px 0 70px 0" }}>
                  <div>
                    <Row>
                      <Col lg={12}>
                        <Container>
                          <div className="projcard-textbox">
                            <h3>
                              <span className="textheader">{data.id}.</span>
                              {data.title}
                            </h3>
                            <div className="projcard-bar" />
                            <div className="projcard-description settext">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {data.descrition}
                            </div>
                          </div>
                        </Container>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <div
                          className="projcard-textbox"
                          style={{ margin: "3vw 1vw -10vw" }}
                        >
                          {data.services.map(function (subser, index) {
                            return (
                              <div key={index} style={{ marginBottom: "5vh" }}>
                                <Row
                                  style={{ cursor: "pointer" }}
                                  onClick={() => onTitleClick(i, index)}
                                >
                                  <Col xs={8} sm={8} md={8} lg={8}>
                                    <h3 style={{ marginTop: "10px " }}>
                                      <i
                                        className=" fa fa-check"
                                        style={{ color: "#0e76ba" }}
                                      />
                                      {/* <span className="textheader"> 1 </span> */}{" "}
                                      {subser.servicestitle}
                                    </h3>
                                  </Col>
                                  <Col
                                    xs={4}
                                    sm={4}
                                    md={4}
                                    lg={4}
                                    style={{ textAlign: "right" }}
                                  >
                                    {activeTab[0] === i &&
                                    activeTab[1] === index ? (
                                      <i
                                        className="fa fa-minus-circle"
                                        aria-hidden="true"
                                        style={{
                                          cursor: "pointer",
                                          marginRight: "2vw",
                                          fontSize: "18px",
                                        }}
                                      ></i>
                                    ) : (
                                      <i
                                        className="fa fa-plus-circle"
                                        aria-hidden="true"
                                        style={{
                                          cursor: "pointer",
                                          marginRight: "2vw",
                                          fontSize: "18px",
                                        }}
                                      ></i>
                                    )}
                                  </Col>
                                </Row>
                                <div className="projcard-bar" />

                                {activeTab[0] === i &&
                                activeTab[1] === index ? (
                                  <div>
                                    <Row>
                                      <Col lg={6}>
                                        <div>
                                          <div
                                            className="projcard-description settext "
                                            style={{ marginTop: "1vw" }}
                                          >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {subser.descrition}
                                          </div>
                                        </div>
                                      </Col>
                                      <Col lg={6}>
                                        <img
                                          className="projcard-img"
                                          src={subser.img}
                                          alt={data.alt}
                                        />
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <h3 style={{ marginTop: "2vw" }}>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                          {t("services.product")}
                                        </h3>
                                      </Col>
                                      <Col />
                                    </Row>
                                    <Row style={{ margin: "30px 20px 0" }}>
                                      {subser.product.map(function (
                                        productdata,
                                        subindex
                                      ) {
                                        return (
                                          <Col
                                            xs={6}
                                            sm={4}
                                            md={3}
                                            lg={3}
                                            className="paddingcard"
                                            key={subindex}
                                          >
                                            {activeProduct[0] === i &&
                                            activeProduct[1] === index &&
                                            activeProduct[2] === subindex ? (
                                              <div>
                                                <div
                                                  className="product-bg"
                                                  onClick={() =>
                                                    onProductClick(
                                                      i,
                                                      index,
                                                      subindex
                                                    )
                                                  }
                                                ></div>
                                                <div className="product-detail">
                                                  <div>
                                                    <i
                                                      className="fa fa-times"
                                                      onClick={() =>
                                                        onProductClick(
                                                          i,
                                                          index,
                                                          subindex
                                                        )
                                                      }
                                                      aria-hidden="true"
                                                      style={{
                                                        fontSize: "1.5rem",
                                                        color: "red",
                                                        right: "5%",
                                                        top: "2vh",
                                                        position: "absolute",
                                                        cursor: "pointer",
                                                      }}
                                                    />
                                                  </div>
                                                  <h3> {productdata.name}</h3>
                                                  <Row>
                                                    <Col lg={4}>
                                                      <img
                                                        src={productdata.img}
                                                        alt={productdata.alt}
                                                      />
                                                    </Col>

                                                    <Col lg={8}>
                                                      <p
                                                        style={{
                                                          margin: "2vh 4vh 1vh",
                                                        }}
                                                      >
                                                        <i
                                                          className="fa fa-hand-o-right"
                                                          aria-hidden="true"
                                                          style={{
                                                            color: "#0e76ba",
                                                            fontSize: "18px",
                                                          }}
                                                        ></i>
                                                        &nbsp;&nbsp;&nbsp;
                                                        <b
                                                          style={{
                                                            fontSize: "18px",
                                                          }}
                                                        >
                                                          {t(
                                                            "services.property"
                                                          )}
                                                        </b>
                                                      </p>

                                                      <div
                                                        style={{
                                                          paddingLeft: "6vh",
                                                        }}
                                                      >
                                                        {productdata.property.map(
                                                          function (
                                                            proper,
                                                            indexpro
                                                          ) {
                                                            return (
                                                              <div
                                                                key={indexpro}
                                                              >
                                                                {console.log(
                                                                  "test",
                                                                  proper
                                                                )}
                                                                <i
                                                                  className="fa fa-check-square-o"
                                                                  aria-hidden="true"
                                                                  style={{
                                                                    color:
                                                                      "#0e76ba",
                                                                    fontSize:
                                                                      "18px",
                                                                  }}
                                                                />
                                                                &nbsp;&nbsp;&nbsp;
                                                                {proper.pro}
                                                              </div>
                                                            );
                                                          }
                                                        )}
                                                      </div>
                                                    </Col>
                                                  </Row>
                                                </div>
                                              </div>
                                            ) : null}
                                            <div
                                              className="cardItem"
                                              onClick={() =>
                                                onProductClick(
                                                  i,
                                                  index,
                                                  subindex
                                                )
                                              }
                                            >
                                              <img
                                                className="imgproduct"
                                                src={productdata.img}
                                                alt={productdata.alt}
                                              ></img>

                                              <span className="cardLabel">
                                                {productdata.name}
                                              </span>
                                            </div>
                                          </Col>
                                        );
                                      })}
                                    </Row>
                                    <div
                                      className="projcard-bar"
                                      style={{ marginTop: "8vh" }}
                                    />
                                  </div>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div className="projcard-bar bar" />
              </div>{" "}
            </div>
          );
        })}
      </div>
    </>
  );
}
