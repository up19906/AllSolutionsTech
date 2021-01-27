import React from "react";
import "./stylesServics.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const datas = [
  {
    img: "Picture/cctv.jpg",
    title: "Security System",
    descrition:
      "1.เครื่องสแกนลายนิ้วมือ บันทึกการเข้าออกงานของพนักงานนอกจากบันทึกเวลาเข้าออกงานจากลายนิ้วมือแล้วนั้นเครื่องแสกนลายนิ้วมือบางรุ่นยังสามารถเข้าออกงานจากบัตรคีย์การ์ด",
  },
  {
    img: "http://allsolutionstech.com/media/images/system/57-013.png",
    title: "ร้านอาหาร Soshabuki",
    descrition: "ติดตั้งกล้องวงจรปิด",
  },
  {
    img: "http://allsolutionstech.com/media/images/system/7-010.png",
    title: "สถาบันการพลศึกษา จ.ชัยภูมิ",
    descrition: "ติดตั้งเครื่องสแกนลายนิ้วมือ",
  },
  {
    img: "http://allsolutionstech.com/media/images/system/6-003.png",
    title: "Advice นครราชสีมา สาขาสืบศิริ",
    descrition: "ติดตั้งกล้องวงจรปิด",
  },
  {
    img: "http://allsolutionstech.com/media/images/system/7-004.png",
    title: "LAND & HOUSES",
    descrition: "ติดตั้งระบบกล้องวงจรปิด",
  },
  {
    img: "http://allsolutionstech.com/media/images/system/7-005.png",
    title: "สำนักงานประกันสังคม นครราชสีมา",
    descrition: "ติดตั้งสแกนลายนิ้วมือ,เครื่องนับธนบัตร",
  },
];

export default function Services() {
  return (
    <div>
      <div
        className="hero-service breadcrumb-option set-bg"
        style={{
          backgroundImage: 'url("Picture/servicesimg/solution2.jpg")',
          backgroundPosition: "top center",
        }}
      >
        <Container>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bg-text">
                <div className="breadcrumb__text">
                  <h2>บริการของเรา</h2>
                  <div className="breadcrumb__links">
                    <Link to="/">หน้าแรก</Link>
                    <span>บริการของเรา</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="projcard-container">
          {datas.map(function (data, i) {
            return (
              <div>
                <Container style={{ padding: "15px 0 70px 0" }}>
                  <div>
                    <Row>
                      <Col lg={8}>
                        <Container>
                          <div className="projcard-textbox">
                            <h3 style={{ marginTop: "10px " }}>
                              {/* <span className="textheader"> 1 </span> */}
                              {data.title}
                            </h3>
                            <div className="projcard-bar" />
                            <div className="projcard-description">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {data.descrition}
                            </div>
                          </div>
                        </Container>
                      </Col>

                      <Col lg={4} style={{ textAlign: "center" }}>
                        <img className="projcard-img" src={data.img} />
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={12}>
                        <div
                          className="projcard-title"
                          style={{ marginTop: "30px" }}
                        >
                          สินค้าที่เกี่ยวข้อง
                        </div>
                      </Col>
                      <Col />
                    </Row>
                    <Row style={{ margin: "30px 20px 0" }}>
                      {datas.map(function (data, i) {
                        return (
                          <Col xs={6} sm={4} md={3} lg={2} className="border">
                            <div className="cardItem">
                              <i
                                className="fa fa-arrow-right"
                                aria-hidden="true"
                              />
                              <span className="cardLabel">Title</span>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </Container>
                <div className="projcard-bar" />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
