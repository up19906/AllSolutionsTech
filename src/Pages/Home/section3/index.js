import React from "react";
import "./section3.scss";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { useTranslation } from "react-i18next";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1141 },
    items: 4,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1140, min: 768 },
    items: 3,
    paritialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    paritialVisibilityGutter: 20,
  },
};
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

export default function Section3() {
  const { t } = useTranslation();

  let mapdata = datas.map(function (data, i) {
    return (
      <div className="container3">
        <div className="cardsection3">
          <img
            draggable={false}
            src={data.img}
            alt="customer"
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
    <>
      <Container className="section3margin">
        <div className="h-text" style={{ marginBottom: "-10px" }}>
          <h1 className="heading"> {t("header.menu3")} </h1>{" "}
          {/* <p>
            บริษัท ออลล์โซลูชั่นส์เทค จำกัด เรามีงานดีไซน์ที่หลากหลายทันสมัย
          </p> */}
        </div>
        <Container>
          <Carousel
            className="cacusol"
            ssr
            partialVisible
            itemClass="image-item"
            responsive={responsive}
            autoPlaySpeed={3000}
            autoPlay={true}
            infinite
          >
            {mapdata}
          </Carousel>
        </Container>
      </Container>
    </>
  );
}
