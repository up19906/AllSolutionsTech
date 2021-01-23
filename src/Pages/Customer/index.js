import React from "react";
import "./stylecustomer.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Table } from "@material-ui/core";

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
        data-setbg="https://ecommerce-solution.co.th/img/breadcrumb/service.jpg"
        style={{
          backgroundImage:
            'url("https://ecommerce-solution.co.th/img/breadcrumb/service.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>ลูกค้าของเรา</h2>
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
        <ul className="card-list">
          <Row>
            {datas.map(function (data, i) {
              return (
                <Col lg={3}>
                  <div className="card">
                    <img
                      className="card-image"
                      src={data.img}
                      alt="Psychopomp"
                    />
                    <div className="card-description">
                      <h2 style={{ fontSize: "1.5vw" }}>{data.title}</h2>
                      <p style={{ fontSize: "1vw" }}>{data.descrition}</p>
                    </div>
                  </div>
                </Col>
              );
            })}

            {/* <Table
              style={{ marginLeft: "auto", marginRight: "auto" }}
              border={0}
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-38.png"
                      border={0}
                    />
                  </td>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-38.png"
                      border={0}
                    />
                  </td>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-38.png"
                      border={0}
                    />
                  </td>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-38.png"
                      border={0}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-38.png"
                      border={0}
                    />
                  </td>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-38.png"
                      border={0}
                    />
                  </td>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-40.png"
                      border={0}
                    />
                  </td>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-41.png"
                      border={0}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-37.png"
                      border={0}
                    />
                  </td>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-09.png"
                      border={0}
                    />
                  </td>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-02.png"
                      border={0}
                    />
                  </td>
                  <td>
                    <img
                      src="https://allweb.co.th/2019/images/customers/cus-04.png"
                      border={0}
                    />
                  </td>
                </tr>
              </tbody>
            </Table> */}
          </Row>
        </ul>
      </Container>
    </div>
  );
}
