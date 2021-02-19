import React from "react";
import "./section3.scss";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
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

export default function Section3() {
  const { t } = useTranslation();
  const datas = i18next.t("customer", { returnObjects: true });

  let mapdata = datas.map(function (data, i) {
    return (
      <div key={i} className="container3">
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
