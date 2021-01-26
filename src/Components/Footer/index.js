import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./sty.css";

export default function Footer() {
  return (
    <>
      <div
        className="toppad"
        style={{ boxShadow: " rgba(0, 0, 255, 0.157) 0px 0px 16px 6px" }}
      >
        <div className="sd">
          <br />
          <Container>
            <Row>
              <Col lg={4}>
                <img
                  className="imgfooter"
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                  src="Picture/logo/ast2.png"
                  alt="logo-navbaer"
                />
              </Col>
              <Col lg={5}>
                <p class="font-weight-bold" style={{ fontSize: "2.5vw" }}>
                  CONTACT US
                </p>
                <p class="font-weight-bold" style={{ fontSize: "1.2vw" }}>
                  {" "}
                  บริษัท ออลล์โซลูชั่นส์เทค จำกัด
                  <br />
                  ALL SOLUTIONS TECH CO.,LTD.
                </p>
                <p style={{ fontSize: "1vw" }}>
                  <b>
                    สำนักงานใหญ่
                    <br />
                  </b>
                  ที่อยู่ : 47/316 ถ.ป๊อปปูล่า ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี
                  11120
                  <br />
                  47/316 Poppular Rd., Ban Mai, Pak Kret, Nonthaburi 11120{" "}
                  <br />
                  <br />
                  <b>สำนักงานนครราชสีมา </b>
                  <br />
                  ที่อยู่ : 3279/25 ถ.สืบศิริ ต.ในเมือง อ.เมือง จ.นครราชสีมา
                  30000
                  <br />
                  3279/25 Suebsiri Rd, T.Nimueng, A.Mueng,
                  NakhonRatchasima,Thailand 30000 <br />
                  <br />
                  โทรศัพท์/แฟ็กซ์ 02-012-3795 / 065-969-3552 <br />
                  Tel./Fax. +662-012-3795 <br />
                  Mobile : +665-969-3552
                  <br />
                  Email : ast.allsolutionstech@gmail.com
                  <br /> <br />
                </p>
              </Col>
              <Col lg={3}>
                <p class="font-weight-bold" style={{ fontSize: "2.5vw" }}>
                  SERVICES
                </p>
                <p style={{ fontSize: "1vw" }}>
                  {" "}
                  กล้องวงจรปิด <br />
                  จำหน่ายกล้องวงจรปิด <br />
                  เครื่องสแกนลายนิ้วมือ <br />
                  สัญญาณกันขโมยบ้าน <br /> ตู้สาขาโทรศัพท์ <br /> วางระบบ
                  Network <br />
                  ติดตั้งประตู AutoDoor <br /> แผงไม้กั้น <br />
                  วางระบบ CarPark <br />
                  ออกแบบระบบขายหน้าร้าน POS <br />
                  ระบบซื้อมาขายไป <br />
                  ระบบจ่ายเงินเดือนและอีกมากมาย
                </p>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
      </div>
    </>
  );
}
