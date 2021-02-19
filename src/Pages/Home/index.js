import React from "react";
import "./style.scss";
import Section2 from "./section2";
import Section1 from "./section1";
import Section3 from "./section3";
import Section4 from "./section4";
// import ScrollToTop from "../../../src/scoll";

export default function Home() {
  return (
    <>
      {/* <ScrollToTop></ScrollToTop> */}
      <div>
        <div>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
      </div>
    </>
  );
}
