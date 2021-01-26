import React from "react";
import { Container } from "react-bootstrap";
import "./style.scss";
import { Link } from "react-router-dom";
export default function PrintDesign() {
  return (
    <div>
      <div
        className="hero-service breadcrumb-option set-bg"
        style={{
          backgroundImage: 'url("Picture/about/about.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bg-text">
                <div className="breadcrumb__text">
                  <h2>เกี่ยวกับเรา</h2>
                  <div className="breadcrumb__links">
                    <Link to="/">หน้าแรก</Link>
                    <span>เกี่ยวกับเรา</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="sectionabout">
          <div className="blockquote">
            <h2 style={{ marginTop: "35px", fontSize: "2.7vw" }}>
              บริษัท ออลล์โซลูชันส์เทค จำกัด
            </h2>
            <p style={{ fontSize: "1.2vw", textAlign: "left" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ออลล์โซลูชันส์เทค
              ให้บริการดูแลระบบงานสารสนเทศของสำนักงานทั้งหมดแบบครบวงจร อาทิเช่น
              ออกแบบสร้างเว็บไซต์ ด้วยการดีไซน์ที่สวยงาม ทันสมัยและน่าเชื่อถือ
              เหมาะกับทุกท่านที่อยากมีเว็บไซต์เป็นของตัวเอง
              สามารถนำเว็บไซต์ของท่าน ไปใช้ประโยชน์ได้ในหลายรูปแบบ
              เราพร้อมจะนำพาธุรกิจของท่านไปสู่โลกของพาณิชย์อิเล็คทรอนิกส์
              ขอเพียงความไว้วางใจให้เราเป็นผู้ให้บริการ,ผู้ให้คำปรึกษา,ผู้ออกแบบ(webdesign)
              และเป็นผู้ที่เดินเคียงข้างท่านเข้าสู่โลก world wide Marketing
              เรามีทีมงานที่จะวิเคราะห์ความต้องการและแก้ไขปัญหาจากระบบงานเดิม,การจัดการด้าน
              Network เพื่อเพิ่มประสิทธิภาพในการทำงานได้อย่างรวดเร็ว
              เพิ่มเติมช่องทางการทำธุรกิจโดยการจัดทำ Search Engine Optimization
              หรือ SEO เป็นกระบวนการพัฒนาเว็บไซต์
              เพื่อเพิ่มประสิทธิภาพให้กับเว็บไซต์ของท่านสำหรับการค้นหาผ่าน
              Search Engine เช่น
              Google,Yahooโดยการใช้คีย์เวิร์ดในการค้นหาเว็บไซต์ให้ท่านได้อย่างรวดเร็ว
              และ มีประสิทธิภาพมากยิ่งขึ้น
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
