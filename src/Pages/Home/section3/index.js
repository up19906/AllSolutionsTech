import React from "react";
import "./section3.scss";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    paritialVisibilityGutter: 10,
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
];

export default function section3() {
  let mapdata = datas.map(function (data, i) {
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
    <>
      <Container style={{ marginBottom: "150px" }}>
        <div className="h-text" style={{ marginBottom: "-10px" }}>
          <h1 className="heading"> ลูกค้าของเรา </h1>{" "}
          <p>
            บริษัท ออลล์โซลูชั่นส์เทค จำกัด เรามีงานดีไซน์ที่หลากหลายทันสมัย
          </p>
        </div>
        <Carousel
          className="cacusol"
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
      </Container>
    </>
  );
}
