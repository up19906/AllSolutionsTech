import React from "react";
import "./stylecustomer.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function WebDesign() {
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
  return (
    <div>
      <div
        className="hero-service breadcrumb-option set-bg"
        // data-setbg="https://ecommerce-solution.co.th/img/breadcrumb/service.jpg"
        style={{
          backgroundImage: 'url("Picture/customer/customer5.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bg-text">
                <div className="breadcrumb__text">
                  <h2>ลูกค้าของเรา</h2>
                  <div className="breadcrumb__links">
                    <Link to="/">หน้าแรก</Link>
                    <span>ลูกค้าของเรา</span>
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
