import React from "react";
import "./stylesection2.scss";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const datas = [
  {
    img: "http://allsolutionstech.com/images/stories/sk-0103.jpg",
    title: "บริการติดตั้งตู้สาขาโทรศัพท์",
    descrition:
      "บริการติดตั้งตู้สาขาโทรศัพท์ที่ได้มาตรฐาน มีให้เลือกหลากหลายยี่ห้อ หลากหลายราคา ",
    href: "/printdesign",
  },
  {
    img: "http://allsolutionstech.com/images/stories/sk-0106-1.jpg",
    title: "เครื่องสแกนลายนิ้วมือ เครื่องสแกนแบบบัตรทาบ",
    descrition: "ระบบรักษาความปลอดภัย และระบบลงเวลาของพนักงาน",
    href: "/printdesign",
  },
  {
    img: "http://allsolutionstech.com/images/stories/sk-0109.jpg",
    title: "สัญญาณกันขโมย",
    descrition:
      " บริการออกแบบ ให้คำแนะนำและบริการติดตั้งสัญญาณกันขโมย  สำหรับที่อยู่อาศัย อาคาร สำนักงาน โรงงาน แบบครบวงจร",
    href: "/printdesign",
  },
  {
    img: "http://allsolutionstech.com/images/stories/sk-0105.jpg",
    title: "ป้ายไฟ",
    descrition: "จัดทำป้ายไฟต่างๆหลากหลายแบบ",
    href: "/printdesign",
  },
  {
    img: "http://allsolutionstech.com/images/stories/sk-0108.jpg",
    title: "เครื่องสำรองไฟ",
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
              <h2 style={{ marginTop: "35px", fontSize: "2.7vw" }}>
                บริษัท ออลล์โซลูชันส์เทค จำกัด
              </h2>
              <p style={{ fontSize: "1.2vw", textAlign: "left" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ออลล์โซลูชันส์เทค
                ให้บริการดูแลระบบงานสารสนเทศของสำนักงานทั้งหมดแบบครบวงจร
                อาทิเช่น ออกแบบสร้างเว็บไซต์ ด้วยการดีไซน์ที่สวยงาม
                ทันสมัยและน่าเชื่อถือ
                เหมาะกับทุกท่านที่อยากมีเว็บไซต์เป็นของตัวเอง
                สามารถนำเว็บไซต์ของท่าน ไปใช้ประโยชน์ได้ในหลายรูปแบบ
                เราพร้อมจะนำพาธุรกิจของท่านไปสู่โลกของพาณิชย์อิเล็คทรอนิกส์
                ขอเพียงความไว้วางใจให้เราเป็นผู้ให้บริการ,ผู้ให้คำปรึกษา,ผู้ออกแบบ(webdesign)
                และเป็นผู้ที่เดินเคียงข้างท่านเข้าสู่โลก world wide Marketing
                เรามีทีมงานที่จะวิเคราะห์ความต้องการและแก้ไขปัญหาจากระบบงานเดิม,การจัดการด้าน
                Network เพื่อเพิ่มประสิทธิภาพในการทำงานได้อย่างรวดเร็ว
                เพิ่มเติมช่องทางการทำธุรกิจโดยการจัดทำ Search Engine
                Optimization หรือ SEO เป็นกระบวนการพัฒนาเว็บไซต์
                เพื่อเพิ่มประสิทธิภาพให้กับเว็บไซต์ของท่านสำหรับการค้นหาผ่าน
                Search Engine เช่น
                Google,Yahooโดยการใช้คีย์เวิร์ดในการค้นหาเว็บไซต์ให้ท่านได้อย่างรวดเร็ว
                และ มีประสิทธิภาพมากยิ่งขึ้น
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div
        className="section"
        style={{ boxShadow: " rgba(0, 0, 255, 0.157) 0px 0px 16px 6px" }}
      >
        <Container>
          <div className="h-text ">
            <h1 className="heading">บริการของเรา</h1>
            <p>
              บริษัท ออลล์โซลูชั่นส์เทค จำกัด เรามีงานดีไซน์ที่หลากหลายทันสมัย
            </p>
          </div>
          <Container>
            <Row>
              {datas.map(function (data, i) {
                return (
                  <Col xs={12} sm={6} md={5} lg={4}>
                    <Link
                      to={data.href}
                      className="cardsection2"
                      style={{ maxWidth: "26rem", maxHeight: "25rem" }}
                    >
                      <div className="img-card">
                        <img src={data.img} />
                      </div>
                      <div className="card-content">
                        <h4 className="card-title">{data.title}</h4>
                        <div
                          className="projcard-bar"
                          style={{ backgroundColor: "#0e76ba" }}
                        />
                        <p className>{data.descrition}</p>
                      </div>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}
