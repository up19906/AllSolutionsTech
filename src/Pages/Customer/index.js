import React from "react";
import "./stylecustomer.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function WebDesign() {
  const { t } = useTranslation();
  const datas = [
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
    {
      img: "http://allsolutionstech.com/media/images/system/7-002.png",
      title: "กรุงไทย แอกซ่า",
      descrition: "ติดตั้งระบบโทรศัพท์",
    },
    {
      img: "http://allsolutionstech.com/media/images/system/7-001.png",
      title: "JVC",
      descrition: "ติดตั้งกล้องวงจรปิด",
    },
    {
      img: "http://allsolutionstech.com/media/images/system/7-006.png",
      title: "โรงพยาบาลกรุงเทพราชสีมา",
      descrition: "ติดตั้งเครื่องสแกนลายนิ้วมือ",
    },
    {
      img: "http://allsolutionstech.com/media/images/system/7-009.png",
      title: "CP จ.ร้อยเอ็ด จ.บึงกาฬ จ.ยโสธร",
      descrition: "ติดตั้งกล้องวงจรปิด",
    },
    {
      img: "http://allsolutionstech.com/media/images/system/7-003.png",
      title: "อู่เชิดชัย",
      descrition: "ติดตั้งกล้องวงจรปิด,เครื่องทาบบัตร",
    },
    {
      img: "http://allsolutionstech.com/media/images/system/7-013.png",
      title: "วิทยาลัยสารพัดช่างบรรหาร จ.สุพรรณบุรี ",
      descrition: "ติดตั้งกล้องวงจรปิด 41 ตัว",
    },
    {
      img: "http://allsolutionstech.com/media/images/system/7-007.png",
      title: "สถาบันวิจัยแสงซินโครตรอน กระทรวงวิทยาศาสตร์และเทคโนโลยี",
      descrition: "ติดตั้งเครื่องสแกนลายนิ้วมือ",
    },
    {
      img: "http://allsolutionstech.com/media/images/system/7-017.png",
      title: "บริษัท ซัมซุง อิเล็คโทร-แม็คคานิคส์ นครราชสีมา จำกัด",
      descrition: "ติดตั้งกล้องวงจรปิด",
    },

    {
      img: "http://allsolutionstech.com/media/images/system/7-016.png",
      title: "เพ ลา เพลิน บูติค รีสอร์ท",
      descrition: "ติดตั้งกล้องวงจรปิด",
    },
    {
      img: "http://allsolutionstech.com/media/images/system/079.png",
      title: "บริษัท ไทยสมุทรประกันชัวิต จำกัด",
      descrition: "งานติดตั้งเครื่องสแกนลายนิ้วมือ",
    },
    {
      img: "http://allsolutionstech.com/media/images/system/082.png",
      title: "สหกรณ์ออมทรัพย์ครูนครราชสีมา",
      descrition: "ติดตั้งระบบตู้สาขาโทรศัพท์อัตโนมัติ",
    },

    {
      img: "http://allsolutionstech.com/media/images/system/080.png",
      title: "หจก.พงษ์กิต",
      descrition: "ติดตั้งเครื่องสแกนลายนิ้วมือ",
    },

    {
      img: "http://allsolutionstech.com/media/images/system/074.png",
      title: "บริษัท โชควิวัฒน์ พร๊อพเพอร์ตี้ จำกัด",
      descrition: "ติดตั้งกล้องวงจรปิด, สแกนลายนิ้วมือ",
    },

    {
      img: "http://allsolutionstech.com/media/images/system/077.png",
      title: "Mata House บ้านคุณแม่",
      descrition: "ติดตั้งกล้องวงจรปิด",
    },
  ];

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
                <Col xs={4} sm={4} md={4} lg={3} xl={3}>
                  <div className="card">
                    <img
                      className="card-image"
                      src={data.img}
                      alt="Psychopomp"
                    />
                    {/* <div className="card-description">
                      <h2 style={{ fontSize: "1.5vw" }}>{data.title}</h2>
                      <p style={{ fontSize: "1vw" }}>{data.descrition}</p>
                    </div> */}
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
