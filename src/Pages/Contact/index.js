import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./style.scss";
import { Link } from "react-router-dom";
export default function Contact() {
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
                  <h2>ติดต่อเรา</h2>

                  <div className="breadcrumb__links">
                    <Link to="/">หน้าแรก</Link>
                    <span>ติดต่อเรา</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container style={{ marginTop: "50px", marginBottom: "20px" }}>
        <div className="projcard" style={{ paddingBottom: "30px" }}>
          <Row>
            <Col lg={6}>
              <div className="contact-padding">
                <h2>ติดต่อเรา</h2>
                <ul>
                  <li style={{ padding: "15px 0" }}>
                    <i className="fa fa-map-marker" />
                    <span> ที่ตั้ง : </span> <b>สำนักงานใหญ่</b>
                    <br />
                    ที่อยู่ : 47/316 ถ.ป๊อปปูล่า ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี
                    11120 <br /> 47/316 Poppular Rd., Ban Mai, Pak Kret,
                    Nonthaburi 11120
                    <br />
                    <b>สำนักงานนครราชสีมา</b> <br /> ที่อยู่ : 3279/25 ถ.สืบศิริ
                    ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000 <br />
                    3279/25 Suebsiri Rd, T.Nimueng, A.Mueng,
                    NakhonRatchasima,Thailand 30000
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <span className="padding-5"> อีเมล : </span>
                    <a
                      href="mailto:ast.allsolutionstech@gmail.com"
                      className="contact-padding"
                    >
                      {" "}
                      ast.allsolutionstech@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <form
                  id="main-contact-form"
                  name="contact-form"
                  method="post"
                  action="sendemail.php"
                >
                  <div
                    className="row  wow fadeInUp animated"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1000ms",
                      animationDelay: "300ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={11}
                      placeholder="Enter your message"
                      required="required"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group" style={{ textAlign: "right" }}>
                    <Button
                      type="button"
                      className=" primary-btn"
                      // onclick="sendContactForm()"
                    >
                      ส่งข้อความ
                    </Button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
