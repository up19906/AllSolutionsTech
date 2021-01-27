import React from "react";
import "./stylesection2.scss";
import "./testsyle.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const datas = [
  {
    img:
      "https://image.freepik.com/free-photo/cctv-security-camera_1359-621.jpg",
    title: " Security System",
    descrition:
      "บริการติดตั้งตู้สาขาโทรศัพท์ที่ได้มาตรฐาน มีให้เลือกหลากหลายยี่ห้อ หลากหลายราคา ",
    href: "/printdesign",
  },
  {
    img: "https://www.secom.co.th/wp-content/uploads/2019/02/Gate-Barrier5.jpg",
    title: "Car Park System",
    descrition: "ระบบรักษาความปลอดภัย และระบบลงเวลาของพนักงาน",
    href: "/printdesign",
  },
  {
    img:
      "https://image.freepik.com/free-photo/man-is-reaching-his-hand-push-fire-alarm-hand-station_1150-6644.jpg",
    title: "Alarm System Solution",
    descrition:
      " บริการออกแบบ ให้คำแนะนำและบริการติดตั้งสัญญาณกันขโมย  สำหรับที่อยู่อาศัย อาคาร สำนักงาน โรงงาน แบบครบวงจร",
    href: "/printdesign",
  },
  {
    img:
      "https://image.freepik.com/free-photo/global-connections_53876-89039.jpg",
    title: "Communication Solution",
    descrition: "Communication Solution",
    href: "/printdesign",
  },
  {
    img:
      "https://image.freepik.com/free-photo/man-clicking-icon-house_1134-149.jpg",
    title: "Home & Office Automation",
    descrition:
      "จำหน่ายเครื่องสำรองไฟฟ้า สำหรับคอมพิวเตอร์ตั้งโต๊ะ คุณภาพดี ราคาประหยัด มีหลากหลายยี่ห้อให้เลือกส",
    href: "/printdesign",
  },
];

export default function section2() {
  return (
    <>
      <div
        className="section"
        style={{
          backgroundColor: "#ffffff00",
          paddingTop: "50px",
          boxShadow: "0px 6px 13px 3px rgba(0, 0, 255, 0.158)",
        }}
      >
        <Container>
          <div className="sectionabout">
            <div className="blockquote">
              <h2
                className="fontthai"
                style={{ marginTop: "35px", fontSize: "2.7vw" }}
              >
                บริษัท ออลล์โซลูชันส์เทค จำกัด
              </h2>
              <p
                className="fontthai"
                style={{
                  fontSize: "1.2vw",
                  marginTop: "10px",
                  textAlign: "left",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ออลล์โซลูชันส์เทค
                ให้บริการดูแลระบบงานสารสนเทศของสำนักงานทั้งหมดแบบครบวงจร
                อาทิเช่น ออกแบบสร้างเว็บไซต์ ด้วยการดีไซน์ที่สวยงาม
                ทันสมัยและน่าเชื่อถือ
                เหมาะกับทุกท่านที่อยากมีเว็บไซต์เป็นของตัวเอง
                สามารถนำเว็บไซต์ของท่าน ไปใช้ประโยชน์ได้ในหลายรูปแบบ
              </p>
              <button className="button fontthai">อ่านเพิ่มเติม</button>
            </div>
          </div>
        </Container>
      </div>
      <div
        className="section"
        style={{ boxShadow: " rgba(0, 0, 255, 0.157) 0px 0px 16px 6px" }}
      >
        <Container>
          <Row>
            <Col lg={9}>
              <Row>
                {datas.map(function (data, i) {
                  return (
                    <Col>
                      <div data-aos="fade-up">
                        <div className="content-wrapper">
                          <div className="news-card">
                            <a href="#" className="news-card__card-link" />
                            <img
                              src={data.img}
                              alt
                              className="news-card__image"
                            />
                            <div className="news-card__text-wrapper">
                              <h2 className="news-card__title fontthai">
                                {data.title}
                              </h2>

                              <div className="news-card__details-wrapper">
                                <p className="news-card__excerpt fontthai">
                                  {data.descrition}
                                </p>
                                <a href="#" className="news-card__read-more">
                                  Read more <i className="fa fa-arrow-right" />
                                </a>
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
                    <h2 className="fontthai">สินค้า และ บริการของเรา</h2>
                    <p className="fontthai">
                      สอบถามข้อมูลเรื่องกล้องวงจรปิด, จำหน่ายกล้องวงจรปิด,
                      เครืองสแกนลายนิวมีอ, สัญญาณกันขโมยบ้าน, ตู้สาขา โทรศัพท์,
                      วางระบบ Network, ติดตั้งประตู AutoDoor, แผงไม้กั้น,
                      วางระบบ CarPark, ออกแบบ ระบบขายหน้าร้าน POS
                      ระบบซื่อมาขายไป ระบบจ่ายเงินเดือน และอีกมากมาย
                    </p>
                    <a href="#" className="fontthai">
                      ดูสินค้าเพิ่มเติม »
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
