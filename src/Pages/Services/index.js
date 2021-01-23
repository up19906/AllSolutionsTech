import React from "react";
import "./stylesServics.scss";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 769 },
    items: 4,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 768, min: 426 },
    items: 3,
    paritialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 2,
    paritialVisibilityGutter: 40,
  },
};

const dataproduct = [
  {
    img: "http://allsolutionstech.com/media/images/system/7-008.png",
    title: "โรงแรมราชพฤกษ์",
    descrition: "ติดตั้งระบบกล้องวงจรปิด",
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
const datas = [
  {
    img: "http://allsolutionstech.com/media/images/system/7-008.png",
    title: "โรงแรมราชพฤกษ์",
    descrition:
      "1.เครื่องสแกนลายนิ้วมือ บันทึกการเข้าออกงานของพนักงานนอกจากบันทึกเวลาเข้าออกงานจากลายนิ้วมือแล้วนั้นเครื่องแสกนลายนิ้วมือบางรุ่นยังสามารถเข้าออกงานจากบัตรคีย์การ์ด หรือกดรหัสเข้างานได้ฟรี !! โปรแกรมเข้าออกงาน ภาษาไทยใหม่ล่าสุดการบันทึกเวลาด้วยสแกนลายนิ้วมือสามารถป้องกันการตอกบัตรแทนกันได้ 100%และไม่ต้องยุงยากในการสรุปการขาด ลา มาสาย ของพนักงาน เพราะโปรแกมสามารถบริหารจัดการให้ได้อย่างครบ สมบูรณ์แบบ2. เครื่องอ่านลายนิ้วมือ ควบคุมการเปิด-ปิดประตู พร้อมโปรแกรมควบคุม สามารถกำหนด Time Zoneในแต่ละลายนิ้วมือได้ ติดตั้งได้หลายรูปแบบ เช่น ประตูไม้อลูมิเนียม หรือประตูกระจกบานเปลือย เป็นต้น นอกจากนี้ ระบบ Access Control ประตูนี้ ยังสามารถต่อเชื่อมกับ VideoDoor Phoneกริ่งสนทนาไฮเทคเห็นทั้งภาพและเสียงของผู้ที่มาติดต่อจากภายนอกรองรับการสั่งเปิดประตูที่จอมอนิเตอร์ไปยังชุดล็อคอิเล็กทรอนิกส์ของเครื่องสแกนลายนิ้วมือหรือระบบคีย์การ์ดได้เหมาะสำหรับบ้าน ทาวน์เฮ้าส์ คอนโด หน่วยงานราชการและสำนักงานยุคใหม่ 3.เครื่องสแกนลายนิ้วมือ จาก DigitalDoor Lock ทำหน้าที่แทนกกลอนประตูแบบเดิมๆเป็นกลอนประตูติจิตอล ปลดล็อคประดูได้จากลายนิ้วมือ กดรหัสคีย์การ์ด และกุญแจมาสเตอร์   1.เครื่องสแกนลายนิ้วมือ บันทึกการเข้าออกงานของพนักงานนอกจากบันทึกเวลาเข้าออกงานจากลายนิ้วมือแล้วนั้นเครื่องแสกนลายนิ้วมือบางรุ่นยังสามารถเข้าออกงานจากบัตรคีย์การ์ด หรือกดรหัสเข้างานได้ฟรี !! โปรแกรมเข้าออกงาน ภาษาไทยใหม่ล่าสุดการบันทึกเวลาด้วยสแกนลายนิ้วมือสามารถป้องกันการตอกบัตรแทนกันได้ 100%และไม่ต้องยุงยากในการสรุปการขาด ลา มาสาย ของพนักงาน เพราะโปรแกมสามารถบริหารจัดการให้ได้อย่างครบ สมบูรณ์แบบ2. เครื่องอ่านลายนิ้วมือ ควบคุมการเปิด-ปิดประตู พร้อมโปรแกรมควบคุม สามารถกำหนด Time Zoneในแต่ละลายนิ้วมือได้ ติดตั้งได้หลายรูปแบบ เช่น ประตูไม้อลูมิเนียม หรือประตูกระจกบานเปลือย เป็นต้น นอกจากนี้ ระบบ Access Control ประตูนี้ ยังสามารถต่อเชื่อมกับ VideoDoor Phoneกริ่งสนทนาไฮเทคเห็นทั้งภาพและเสียงของผู้ที่มาติดต่อจากภายนอกรองรับการสั่งเปิดประตูที่จอมอนิเตอร์ไปยังชุดล็อคอิเล็กทรอนิกส์ของเครื่องสแกนลายนิ้วมือหรือระบบคีย์การ์ดได้เหมาะสำหรับบ้าน ทาวน์เฮ้าส์ คอนโด หน่วยงานราชการและสำนักงานยุคใหม่ 3.เครื่องสแกนลายนิ้วมือ จาก DigitalDoor Lock ทำหน้าที่แทนกกลอนประตูแบบเดิมๆเป็นกลอนประตูติจิตอล ปลดล็อคประดูได้จากลายนิ้วมือ กดรหัสคีย์การ์ด และกุญแจมาสเตอร์",
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
  let mapdata = dataproduct.map(function (data, i) {
    return (
      <div className="container3">
        <div className="cardsection3">
          <img
            draggable={false}
            src={data.img}
            alt="Sora"
            className="cardsection3-img-top"
          />
          <div className="cardsection3-body">
            <h5 className="cardsection3-title">{data.title}</h5>
            <p className="cardsection3-text">{data.descrition}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div
        className="hero-service breadcrumb-option set-bg"
        style={{
          backgroundImage:
            'url("https://ecommerce-solution.co.th/img/breadcrumb/service.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>บริการของเรา</h2>
                <div className="text-services">
                  <h4>All Solutions Tech co.,Ltd</h4>
                </div>
                {/* <div className="breadcrumb__links">
                  <a href="./index.html">หน้าแรก</a>
                  <span>บริการของเรา</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="projcard-container">
          {datas.map(function (data, i) {
            return (
              <div className="projcard">
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    <img
                      className="projcard-img"
                      src="http://allsolutionstech.com/images/stories/sk-0103.jpg"
                    />
                  </Col>
                </Row>
                <div className="projcard-textbox">
                  <div className="projcard-title">{data.title}</div>
                  <div className="projcard-bar" />
                  <div className="projcard-description">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {data.descrition}
                  </div>
                  {/* <div className="projcard-tagbox">
                        <span className="projcard-tag">HTML</span>
                        <span className="projcard-tag">CSS</span>
                      </div> */}
                </div>

                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <div
                      className="projcard-title"
                      style={{ marginTop: "30px" }}
                    >
                      สินค้าที่เกี่ยวข้อง
                    </div>
                  </Col>
                  <Col />
                </Row>
                <Row>
                  <Col>
                    <div>
                      <Carousel
                        // className="cacusol"
                        ssr
                        partialVisbile
                        itemClass="image-item"
                        responsive={responsive}
                        autoPlaySpeed={3000}
                        autoPlay={true}
                        infinite
                      >
                        {mapdata}
                      </Carousel>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
