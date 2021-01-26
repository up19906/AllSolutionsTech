import React from "react";
import "./section4.scss";
import Carousel from "react-multi-carousel";
import { Container, Col, Row, Button } from "react-bootstrap";

export default function section4() {
  return (
    <>
      <div className="section4">
        <Container>
          <div className="projcard-section4" style={{ paddingBottom: "30px" }}>
            <Row>
              <Col lg={6}>
                <div className="contact-padding">
                  <h2>ติดต่อเรา</h2>
                  <ul>
                    <li style={{ padding: "15px 0" }}>
                      <i
                        className="fa fa-map-marker"
                        style={{ marginRight: "5px" }}
                      />
                      <span> ที่ตั้ง : </span> สำนักงานใหญ่
                      <br />
                      ที่อยู่ : 47/316 ถ.ป๊อปปูล่า ต.บ้านใหม่ อ.ปากเกร็ด
                      จ.นนทบุรี 11120 <br /> 47/316 Poppular Rd., Ban Mai, Pak
                      Kret, Nonthaburi 11120
                      <br />
                      สำนักงานนครราชสีมา <br /> ที่อยู่ : 3279/25 ถ.สืบศิริ
                      ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000 <br />
                      3279/25 Suebsiri Rd, T.Nimueng, A.Mueng,
                      NakhonRatchasima,Thailand 30000
                    </li>
                    <li>
                      <i
                        className="fa fa-envelope"
                        style={{ marginRight: "5px" }}
                      />
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
                <div className="contact-padding">
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
    </>
  );
}
