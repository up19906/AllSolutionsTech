import React, { useState } from "react";
import "./stylesServics.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const datas = [
  {
    id: "1",
    img: "Picture/house2.jpg",
    alt: "securityforhome",
    textheader: "บ้านและที่อยู่อาศัย",
    descriptionheader: "ระบบความปลอดภัยสำหรับ",
    title: "ระบบความปลอดภัยสำหรับ บ้านและที่อยู่อาศัย",
    descrition:
      "บริษัท ออลล์โซลูชันส์เทค จำกัด ให้คำปรึกษา และติดตั้ง ระบบSmartHome สัญญาณกันขโมย และระบบกล้องวงจรปิด ภายในและภายนอกบ้าน",

    services: [
      {
        servicestitle: "SMART HOME",
        descrition:
          "Smart home หรือ บ้านอัจฉริยะ คือการใช้เทคโนโลยีมาควบคุมเครื่องใช้ไฟฟ้าภายในบ้าน ผ่านกล่องควบคุมและอุปกรณ์ Sensor ตรวจจับการทำงานแบบต่างๆ รวมกันแล้วเรียกว่าระบบ Home Automation ช่วยอำนวยความสะดวกให้เจ้าของบ้าน ด้วยระบบควบคุมการเปิดปิดไฟหรือปรับระดับความสว่าง สั่งงานเครื่องปรับอากาศ เปิดปิดม่านตามสภาพแสง สั่งเปิดปิดประตูรั้ว อีกทั้งยังเป็นระบบกันขโมย ซึ่งทุกการสั่งงานและการแจ้งเตือนนั้นสามารถทำผ่าน แอพพลิเคชั่นบนสมาร์ทโฟนได้อย่างสบาย ระบบ Home Automation จำเป็นต้องใช้งานผ่านเครือข่ายไร้สาย ซึ่งผู้ใช้จะต้องมีระบบ Internet เพื่อสั่งงานได้ทุกที่ ด้วยการส่งคำสั่งผ่านเข้าไปยังกล่องควบคุมหลักให้ส่งข้อมูลให้เครื่องใช้ไฟฟ้าทำงานตามที่ต้องการ",
        img: "Picture/home/smarthome2.jpg",
        alt: "smarthome",
        product: [
          {
            name: "HomeXpert รีโมทประตูรั้ว",
            img: "Picture/home/smarthome4.jpg",
            alt: "HomeXpert รีโมทประตูรั้ว",
            property: [
              {
                pro:
                  "ชุดควบคุม อยู่ภายในกล่องมิดชิด ป้องกันฝุ่น ความชื้น ความร้อน และแมลง",
              },
              {
                pro: "ชิ้นส่วนอิเล็กทรอนิกส์ใช้เฉพาะจากโรงงานระดับโลกเท่านั้น",
              },
              {
                pro: "มอเตอร์มีพละกำลังสูงแต่กินไฟน้อย",
              },
              {
                pro: "ระบบขับเคลื่อนหล่อลื่นด้วยระบบจารบีตัดปัญหาการดูแลรักษา",
              },
              {
                pro:
                  "ขั้วต่อไฟสปอตไลท์พร้อมฟิวส์ป้องกันเจ้าของบ้านสามารถต่อไฟและใช้รีโมทควบคุมได้ทันที",
              },
            ],
          },
          {
            name: "สวิทซ์ Motion sensor",
            img: "Picture/home/smarthome1.jpg",
            alt: "สวิทซ์ Motion sensor",
            property: [
              {
                pro: "พื้นที่ตรวจจับ 110 องศา ระยะ 4 เมตร",
              },
              {
                pro: "ปรับเวลาหน่วงปิดไฟ 30 วินาที-10 นาที",
              },
              {
                pro:
                  "ปรับระดับความสว่างห้อง(มืด-สว่าง) ที่สวิทซ์ไฟจะเริ่มทำงาน",
              },
              {
                pro:
                  "ใช้งานได้แบบAuto(จับความเคลื่อนไหว) หรือ On-Off (สวิทซ์ทั่วไป)",
              },
              {
                pro:
                  "เปลี่ยนแทนที่สวิทซ์เดิมได้ทันที ใช้กับหลอดไฟไม่เกิน 600 วัตต์",
              },
            ],
          },
          {
            name: "สวิทซ์ Timer",
            img: "Picture/home/smarthom2.png",
            alt: "สวิทซ์ Timer",
            property: [
              {
                pro:
                  "เหมาะกับบ้านอยู่อาศัย หรือสำนักงาน สำหรับคุมไฟได้ถึง 3 สวิทซ์อิสระต่อกัน",
              },
              {
                pro: "LED สีฟ้าสวยงาม ใช้งานง่าย",
              },
              {
                pro: "LED แสดงสถานะของสวิทซ์ไฟแต่ละสวิทซ์",
              },
              {
                pro: "Weekly Timer ขนาด 1 ปุ่มสวิทซ์",
              },
              {
                pro: "เปิด - ปิดได้ 12 โปรแกรม",
              },
              {
                pro: "2 mode : Auto - Manual",
              },
              {
                pro: "กำลังไฟ(สูงสุด) 600 วัตต์",
              },
              {
                pro: "พร้อม Battery backup",
              },
            ],
          },
          {
            name: "ระบบ บ้านอัจฉริยะ",
            img: "Picture/home/smarthome4.png",
            alt: "ระบบ บ้านอัจฉริยะ",
            property: [
              {
                pro: "มีความปลอดภัยสูง เพราะใช้คลื่นความถี่เฉพาะแบบเข้ารหัส",
              },
              {
                pro: "สามารถใช้ร่วมกับสวิทช์ และปลั๊กไฟทั่วไปตามท้องตลาดได้",
              },
              {
                pro: "ไม่มีข้อจำกัดเรื่องของการใช้กระแสไฟ",
              },
              {
                pro: "ทนทาน อายุการใช้งานยาวนาน",
              },
            ],
          },
        ],
      },
      {
        servicestitle: "สัญญาณกันขโมย",
        img: "Picture/home_burglar.jpg",
        alt: "homeburglar",
        descrition:
          "สัญญาณกันขโมยบ้าน คือ อุปกรณ์แจ้งเตือนภัยเมื่อมีเหตุบุกรุกจากบุคคลภายนอกก้าวล้ำเข้ามาภายในบ้านของเรา ที่จะทำหน้าที่ตรวจจับการบุกรุกที่จะเข้ามาขโมยทรัพย์สิน หรือก่อเหตุด้วยเจตนาที่ไม่ดี ซึ่งจะมีการแจ้งเตือนไปยังเจ้าของบ้าน เพื่อให้สามารถยับยั้งเหตุให้ทันท่วงที ซึ่งจะประกอบด้วยอุปกรณ์หลัก 3 ส่วนหลัก ได้แก่ ชุดควบคุม อุปกรณ์ตรวจจับต่าง ๆ และอุปกรณ์แสดงผล แต่ละส่วนจะทำงานร่วมกันโดยมีซอร์ฟแวร์ ทำหน้าที่บริหารจัดการระบบ เพราะฉะนั้น สัญญาณกันขโมยบ้านจะเปรียบเสมือนยามที่คอยตรวจตราสิ่งปกติที่เข้ามาในบริเวณบ้านของคุณให้ปลอดภัย และ digital door lock เป็นปราการและแจ้งเตือนให้ผู้ใช้นั่นเอง",
        product: [
          {
            name: "LIGHTSYS LCD KEYPAD",
            img: "Picture/home/homeburglar/product1.jpg",
            alt: "LIGHTSYS LCD KEYPAD",
            property: [
              {
                pro:
                  "Graphic LCD keypad with or without proximity reader. Compatible with LightSYS and all ProSYS panels",
              },
            ],
          },
          {
            name: "SHOCKTEC™ PLUS DIGITAL SHOCK DETECTORS ",
            img: "Picture/home/homeburglar/product2.jpg",
            alt: "SHOCKTEC™ PLUS DIGITAL SHOCK DETECTORS ",
            property: [
              {
                pro:
                  "Digital Microprocessor with Intelligent Digital Signal Processing",
              },
              {
                pro: "Gross Attack detection",
              },
              {
                pro:
                  "Incorporates a door/window magnetic contact for shock and contact protection (separate zones)",
              },
              {
                pro:
                  "Attempts to defeat the contact with large magnets cause a tamper alarm",
              },
              {
                pro:
                  "Intelligent Digital Signal processing – differentiates between naturally caused vibrations and cuts out frequencies that cannot be caused by an illegal entry attempt",
              },
              {
                pro: "Ideal for windows, doors, walls and roofs",
              },
              {
                pro: "Encapsulated bi-morph piezo electric sensor",
              },
              {
                pro: "Model name: RK601SM Shocktec™ Plus with Contact",
              },
            ],
          },
          {
            name: "VITRON™ PLUS ACOUSTIC GLASS BREAK DETECTORS",
            img: "Picture/home/homeburglar/product3.jpg",
            alt: "VITRON™ PLUS ACOUSTIC GLASS BREAK DETECTORS",
            property: [
              {
                pro: "Flush, wall or ceiling mount",
              },
              {
                pro: "Provides reliable perimeter glass break detection",
              },
              {
                pro:
                  "Detects breakage of all glass types: plate, tempered, laminated and wired",
              },
              {
                pro: "Microprocessor-based Dual Frequency Pattern Recognition",
              },
              {
                pro: "9 m (30 ’) range with omni-directional microphone",
              },
              {
                pro: "Dead microphone supervision",
              },
              {
                pro: "Remote test without opening unit",
              },
            ],
          },
          {
            name: "INDUSTRIAL LUNAR™",
            img: "Picture/home/homeburglar/product4.jpg",
            alt: "INDUSTRIAL LUNAR™",
            property: [
              {
                pro:
                  "Coverage: 360° by 18m (60’) diameter: Coverage pattern consists of 192 fingers (96 Fresnel facets) divided into 3 lens sections. Each lens section has 4 vertical positions for variable mounting height and customized coverage.",
              },
              {
                pro:
                  "Variable Mounting Height: From 2.7m to 8.6m (9’ to 28') 4 lens positions according to installation height.",
              },
              {
                pro:
                  "Intruder Detection Method: Dual Technology (PIR+MW) with Anti-Cloak™ Technology",
              },
              {
                pro: "Anti-Mask: 3 Active IR channels",
              },
              {
                pro: "Maximum 40mA with all LEDs on",
              },
            ],
          },
          {
            name: "อุปกรณ์ตรวจจับการทุบกระจก",
            img: "Picture/home/homeburglar/product5.jpg",
            alt: "อุปกรณ์ตรวจจับการทุบกระจก",
            property: [
              {
                pro:
                  "ตรวจจับจากเสียงกระจกแตก จึงไม่ False Alarm จากแรงสั่นสะเทือน",
              },
              {
                pro: "ใช้ได้กับกระจกแบบธรรมดา Temper และ Laminate",
              },
              {
                pro: "มีสวิทช์ป้องกันการรื้อถอนอุปกรณ์ (Temper Switch)",
              },
              {
                pro: "แบตเตอรี่ Lithium CR123A",
              },
            ],
          },
          {
            name: "อุปกรณ์ตรวจจับความเคลื่อนไหว+กล้อง แบบไร้สาย EYEWAVE",
            img: "Picture/home/homeburglar/product6.jpg",
            alt: "อุปกรณ์ตรวจจับความเคลื่อนไหว+กล้อง แบบไร้สาย EYEWAVE",
            property: [
              {
                pro:
                  "นวัตกรรมล่าสุดที่ตรวจจับการบุกรุกพร้อมส่งภาพไปยังสมาร์ทโฟน (iphone/Android)",
              },
              {
                pro: "สั่งถ่ายภาพจากโทรศัพท์มือถือ",
              },
              {
                pro: "ถ่ายภาพในตอนกลางคืนหรือในที่มืดได้",
              },
              {
                pro:
                  "คลื่นความถี่ 2 ย่าน แยกระหว่างสัญญาณการรับส่งภาพออกจากสัญญาณตรวจจับการบุกรุก",
              },
              {
                pro:
                  "แบตเตอรี่ CR1234 x 2 ก้อน สามารถถ่ายภาพได้ 2,000 ครั้ง หรือ ประมาณ 3 ปี*(คำนวณจากการใช้งานเฉลี่ย 2 ครั้ง/วัน)",
              },
            ],
          },
        ],
      },
      {
        servicestitle: "ระบบกล้องวงจรปิด",
        img: "Picture/cctv3.jpg",
        alt: "cctv",
        descrition:
          "กล้องวงจรปิด CCTV (Closed Circuit Television System) คือ ระบบการบันทึกภาพ เคลื่อนไหวที่ถูกจับภาพโดยกล้องวงจรปิด ที่ได้ติดตั้งตามบริเวณต่างๆ มายังเครื่องบันทึก (DVR) และ ส่วนรับภาพดูภาพซึ่งเรียกว่า จอภาพ (Monitor) และบันทึกลงไปยังเครื่องบันทึก เป็นระบบสำหรับใช้เพื่อการรักษาความ ปลอดภัย หรือ ใช้เพื่อการสอดส่องดูแลเหตุการณ์หรือ สถานการณ์ต่างๆ   ",
        product: [
          {
            name: "กล้องวงจรปิดHikvision DS-2CD2021G1-I",
            img: "Picture/cctv/product1.jpg",
            alt: "กล้องวงจรปิดHikvision DS-2CD2021G1-I",
            property: [
              {
                pro: "1/2.7″ Progressive Scan CMOS",
              },
              {
                pro: "1920 × 1080 @30fps",
              },
              {
                pro: "8/4/6 mm fixed lens",
              },
              {
                pro: "Backlight Compensation",
              },
              {
                pro: "3D Digital Noise Reduction",
              },
              {
                pro: "Digital Wide Dynamic Range",
              },
            ],
          },
          {
            name: "กล้องวงจรปิด Hikvision DS-2CD1123G0E-I",
            img: "Picture/cctv/product2.jpg",
            alt: "กล้องวงจรปิด Hikvision DS-2CD1123G0E-I",
            property: [
              {
                pro: "1/2.8″ progressive scan CMOS",
              },
              {
                pro: "3D DNR",
              },
              {
                pro: "1920 × 1080@30fps",
              },
              {
                pro: "Up to 30 m IR range",
              },
              {
                pro: "2.8 mm/4 mm fixed lens",
              },
              {
                pro: "IP67, IK10",
              },
            ],
          },
          {
            name: "กล้องวงจรปิดHikvision DS-2CD1023G0E-I",
            img: "Picture/cctv/product3.jfif",
            alt: "กล้องวงจรปิดHikvision DS-2CD1023G0E-I",
            property: [
              {
                pro: " 1/2.8 Progressive SCAN CMOS",
              },
              {
                pro: "1920 x 1080 @ 30fps",
              },
              {
                pro: "3D DNR , Up to 30 m IR range",
              },
              {
                pro: "2.8 mm./4 mm. fixed lens , IP67",
              },
            ],
          },
          {
            name: "กล้องวงจรปิด HikVision รุ่น  DS-2CE16D0T-IR",
            img: "Picture/cctv/product4.jpg",
            alt: "กล้องวงจรปิด HikVision รุ่น  DS-2CE16D0T-IR",
            property: [
              {
                pro: "2 Megapixel high-performance CMOS",
              },
              {
                pro: "Analog HD output, up to 1080P resolution",
              },
              {
                pro: "True Day/Night",
              },
              {
                pro: "Smart IR",
              },
              {
                pro: " Up to 20m IR distance",
              },
              {
                pro: "IP66 weatherproof",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "2",
    img: "Picture/office3.jpg",
    alt: "securityforoffice",
    textheader: "สำนักงานและองค์กร",
    descriptionheader: "ระบบความปลอดภัยสำหรับ",
    title: "ระบบความปลอดภัยสำหรับ สำนักงานและองค์กร",
    descrition:
      "บริษัท ออลล์โซลูชันส์เทค จำกัด ให้คำปรึกษา และติดตั้ง ระบบกล้องวงจรปิด ระบบที่จอดรถ ระบบแจ้งเตือนเพลิงไหม้ และเครื่องสแกนลายนิ้วมือ",
    services: [
      {
        servicestitle: "ระบบกล้องวงจรปิด",
        img: "Picture/cctv2.jpg",
        alt: "cctv",
        descrition:
          "กล้องวงจรปิด CCTV (Closed Circuit Television System) คือ ระบบการบันทึกภาพ เคลื่อนไหวที่ถูกจับภาพโดยกล้องวงจรปิด ที่ได้ติดตั้งตามบริเวณต่างๆ มายังเครื่องบันทึก (DVR) และ ส่วนรับภาพดูภาพซึ่งเรียกว่า จอภาพ (Monitor) และบันทึกลงไปยังเครื่องบันทึก เป็นระบบสำหรับใช้เพื่อการรักษาความ ปลอดภัย หรือ ใช้เพื่อการสอดส่องดูแลเหตุการณ์หรือ สถานการณ์ต่างๆ   ",
        product: [
          {
            name: "กล้องวงจรปิด ยี่ห้อ HIP รุ่น CMVR1",
            img: "Picture/cctv/product5.jfif",
            alt: "กล้องวงจรปิด ยี่ห้อ HIP รุ่น CMVR1",
            property: [
              {
                pro: "กล้อง IP 1.3MP",
              },
              {
                pro: "ระบบ wifi มุมมอง 360 องศา",
              },
              {
                pro:
                  "สามารถใช้ได้ทั้งเดินสาย Lan และสัญญาณ wifi ที่มีอยู่แล้วที่บ้าน",
              },
              {
                pro:
                  "ติดตั้งบนฝ้าเพดานสามารถมองเห็นได้รอบห้อง สั่งหมุนซ้ายขวาได้ 360 องศา มีไมค์ และลำโพงในตัว",
              },
              {
                pro:
                  "กล้องสามารถพูดโต้ตอบกันได้ผ่านอินเตอร์เน็ตพร้อมดูภาพออนไลน์ได้บนมือถือ",
              },
              {
                pro:
                  "รองรับสูงสุด 32G บันทึกได้ด้วยตัวเองไม่ต้องใช้เครื่องบันทึก ดูย้อนหลังออนไลน์บนมือหรือคอมพิวเตอร์ได้",
              },
              {
                pro: "มีอินฟาเรดมองเห็นในที่มืดได้ 5-10 เมตร",
              },
            ],
          },
          {
            name: "กล้องวงจรปิด HikVision รุ่น DS-2CD2385FWD-I",
            img: "Picture/cctv/product6.jpg",
            alt: "กล้องวงจรปิด HikVision รุ่น DS-2CD2385FWD-I",
            property: [
              {
                pro: "Up to 8 megapixel high resolution",
              },
              {
                pro: "Max. 3840 × 2160@20fps",
              },
              {
                pro: "2.8 mm/4 mm/6 mm/8 mm/12 mm fixed lens, optional",
              },
              {
                pro: "120dB Wide Dynamic Range",
              },
              {
                pro: "3D Digital Noise Reduction",
              },
              {
                pro: "DC12V & PoE (802.3af)",
              },
              {
                pro: "IR range: up to 30m",
              },
              {
                pro: "Support on-board storage, up to 128 GB",
              },
            ],
          },
          {
            name: "กล้องวงจรปิด AVTECH AVM542B",
            img: "Picture/cctv/product7.jpg",
            alt: "กล้องวงจรปิด AVTECH AVM542B",
            property: [
              {
                pro:
                  "3-axis mechanism for flexible ceiling and wall-mount installation",
              },
              {
                pro: "MicroSD card support (up to 64GB) for video storage",
              },
              {
                pro: "External alarm I/O device connection",
              },
              {
                pro:
                  "POE (Power-over-Ethernet) support to eliminate the use of power cables andreduce installation costs",
              },
              {
                pro: "ONVIF standard supported to simplify system integration",
              },
              {
                pro:
                  "IK10 rated, vandal-resistant case to withstand attempts to open or damage the camera",
              },
            ],
          },
          {
            name: "กล้องวงจรปิด Bosch รุ่น NDE-4502-AL",
            img: "Picture/cctv/product8.jpg",
            alt: "กล้องวงจรปิด AVTECH AVM542B",
            property: [
              {
                pro: "ความละเอียด 2MP",
              },
              {
                pro: "เลนส์ 3-10mm",
              },
              {
                pro: "รองรับระบบ H.265",
              },
              {
                pro: "มาตรฐาน IP66",
              },
              {
                pro: "ระยะอินฟาเรด 30 เมตร",
              },
            ],
          },
        ],
      },
      {
        servicestitle: "ระบบที่จอดรถ (Car Park System)",
        img: "Picture/solution/carpark1.jpg",
        alt: "Car Park System",
        descrition:
          "ระบบที่จอดรถ (Car Park System) เป็นระบบที่จะช่วยเพิ่มความปลอดภัย ให้กับพื้นที่จอดรถ และอาคารขนาดใหญ่ ใช้งานสะดวกสบาย ดูภาพผ่านมอนิเตอร์ได้คมชัด ละเอียด รวดเร็ว แม่นยำ และตรวจจับป้ายทะเบียนรถยนต์ได้หลายประเภท ตั้งแต่ รถเก๋ง, รถกระบะ และรถบรรทุก",
        product: [
          {
            name: "ระบบไม้กั้นรถยนต์ CMHD363 และ CMHD366",
            img: "Picture/carpark/product1.jfif",
            alt: "ระบบไม้กั้นรถยนต์ CMHD363 และ CMHD366",
            property: [
              {
                pro: "มีระบบป้องกันความเสียหายจากการชนไม้กั้น",
              },
              {
                pro: "ตัวถังไม้กั้นรถยนต์อัตโนมัติทำจากเหล็กกล้า",
              },
              {
                pro:
                  "ชุบและเคลือบสีจากโรงงานมีความทนทานกว่า มอเตอร์มีความแข็งแรงทนทานสูง",
              },
              {
                pro: "กลไกลการยกไม้ขึ้นลงมีเซ็นเซอร์ในการควบคุม",
              },
            ],
          },
          {
            name: "ไม้กั้นรถยนต์ HIP รุ่น CMB 3061/3063/ 3066",
            img: "Picture/carpark/product2.jpg",
            alt: "ไม้กั้นรถยนต์ HIP รุ่น CMB 3061/3063/ 3066",
            property: [
              {
                pro: "ขนาดความยาวแขนกั้น 3 -6 เมตร",
              },
              {
                pro: "ความเร็วในการเปิด 1.5-6 วินาที ตามขนาดความยาวไม้",
              },
              {
                pro: "แขนกั้น รุ่น3เมตร แขนกลม(Swing Out)",
              },
              {
                pro: "รุ่น 4และ6 เมตร แบบ 8 เหลี่ยม ทำจากอลูมิเนียมอัลลอยด์",
              },
              {
                pro: "กำลังมอเตอร์ 90 Watt 220 V.",
              },
              {
                pro: "อัตราการหมุนมอเตอร์ 1400 รอบ/นาที",
              },
              {
                pro: "มาตรฐานการป้องกัน IP55",
              },
              {
                pro: "ขนาดตู้ 348 x 268 x 1050มม.",
              },
            ],
          },
          {
            name: "ระบบไม้กั้นรถยนต์ CMHD053 และ CMHD056",
            img: "Picture/carpark/product3.jpg",
            alt: "ระบบไม้กั้นรถยนต์ CMHD053 และ CMHD056",
            property: [
              {
                pro: "มีไม้กั้นที่เพิ่มขอบยางกันกระแทก",
              },
              {
                pro: "มาพร้อมไฟ LED มองเห็นได้ชัดเจน",
              },
              {
                pro: "หน้าจอ LED แสดงการทำงาน ของเครื่อง",
              },
              {
                pro: "มาพร้อมกับไม้กั้นปุยางกันกระแทกป้องกัน",
              },
              {
                pro: "เหตุการณ์ที่ไม่คาดฝันไม้กั้นเพิ่ม",
              },
              {
                pro: "ของยางกันกระแทกและมีไฟ LED ในตัว",
              },
              {
                pro: "มีดีไซน์ที่มีความแตกต่างจากท้องตลาด",
              },
            ],
          },
        ],
      },
      {
        servicestitle: "ประตูตรวจจับโลหะ Walkthrough",
        img: "Picture/walkthrough/product4.jpg",
        alt: "Walkthrough",
        descrition:
          "ปัจจุบันการก่อวินาศกรรมเป็นภัยร้ายที่น่ากลัว ก่อให้เกิดความเสียต่อชีวิตและทรัพย์สินเป็นจำนวนมาก สถานที่ๆมีความเสี่ยงในการเป็นเป้าหมาย ได้แก่ สนามบิน ศาล เรือนจำ คลังอาวุธ ธนาคาร สถานทูตรัฐสภา หน่วยงานราชการ โรงไฟฟ้า คลังน้ำมัน  สถานีสื่อสาร หรือแม่แจ่อาคารสูงๆขึ้นไป ก็อยู่ในข่ายที่มีโอกาศเสี่ยงสูงเช่นกัน ดังนั้นสถานที่ดังกล่าวจึงจำเป็น ที่จะต้องมีการรักษาระบบความปลอดภัย ที่เข้างวดเป็นพิเศษ สิ่งที่ต้องเฝ้าระวังการก่อเหตุไม่ว่าจะเป็นวุตถระเบิด อาวุธ มีด ปืน สิ่งของแหลมคม จำเป็นต้องมีการตรวจสอบ หากเกิดกับหน่วยงาน อาคารสถานที่ของท่านแล้ว  อาจสร้างความเสียหายทั้งชีวิตและทรัพย์สิน รวมไปถึงชื่อเสียงตามไปด้วย",
        product: [
          {
            name: "เครื่องตรวจจับโลหะ ประตูตรวจจับโลหะ Walkthrough CMZ2202",
            img: "Picture/walkthrough/product1.jpg",
            alt: "เครื่องตรวจจับโลหะ ประตูตรวจจับโลหะ Walkthrough CMZ2202",
            property: [
              {
                pro: "สภาพการติดตั้ง In Door",
              },
              {
                pro: "แสดงผลการแจ้งเตือน 9,999 (ครั้ง)",
              },
              {
                pro: "ใช้ไฟ AC 220 V",
              },
            ],
          },
          {
            name: "เครื่องตรวจจับโลหะ ประตูตรวจจับโลหะ Walkthrough CMZ2200",
            img: "Picture/walkthrough/product2.jpg",
            alt: "เครื่องตรวจจับโลหะ ประตูตรวจจับโลหะ Walkthrough CMZ2200",
            property: [
              {
                pro: "สภาพการติดตั้ง In Door",
              },
              {
                pro: "หน้าจอ LCD 5.7(นิ้ว)",
              },
              {
                pro: "แสดงผลการตรวจนับคน 9,999(คน)",
              },
              {
                pro: "กำหนดคลื่นความถี่ 1-50(KHz)",
              },
              {
                pro: " ใช้ไฟ AC 220 V",
              },
            ],
          },
          {
            name: "เครื่องตรวจจับโลหะ ประตูตรวจจับโลหะ Walk through CMC600T",
            img: "Picture/walkthrough/product3.jpg",
            alt: "เครื่องตรวจจับโลหะ ประตูตรวจจับโลหะ Walk through CMC600T",
            property: [
              {
                pro: "6 independent metal detection regions with LCD Screen",
              },
              {
                pro: "Body Temperture detection",
              },
              {
                pro: "Alarm temperature setting",
              },
            ],
          },
        ],
      },
      {
        servicestitle: "ระบบแจ้งเตือนเพลิงไหม้",
        img: "Picture/solution/firealam.jpg",
        alt: "firealam",
        descrition:
          "ระบบสัญญาณเตือนไฟไหม้ (Fire Alarm System) คือ ระบบสำหรับแจ้งเตือนเมื่อมีเปลวไฟ หรือเหตุเพลิงไหม้ภายในอาคาร โดยใช้เซนเซอร์หรืออุปกรณ์ตรวจจับชนิดต่างๆ ตามความเหมาะสม เช่น อุปกรณ์ตรวจจับควันไฟ (Smoke Detector) อุปกรณ์ตรวจจับความร้อน (Heat Detector) อุปกรณ์แจ้งเหตุเพลิงไหม้ด้วยมือผู้ใช้ (Manual Pull Station หรือ Manual Call Point) เป็นต้น ซึ่งระบบสัญญาณเตือนไฟไหม้นี้จะทำให้ผู้ที่อยู่ในอาคารสามารถรับรู้และแก้ไขได้อย่างทันท่วงที ป้องกันไม่ให้ไฟไหม้นั้นลุกลามจนไม่สามารถควบคุมได้",
        product: [
          {
            name: "อุปกรณ์ตรวจจับความร้อน รุ่น CL-181",
            img: "Picture/firealam/product1.jpg",
            alt: "อุปกรณ์ตรวจจับความร้อน รุ่น CL-181",
            property: [
              {
                pro: "ตรวจจับความร้อนอุณหภูมิคงที่ 70 องศาเซลเซียส",
              },
              {
                pro: "วัสดุเป็นพลาสติกทนความร้อนสีขาว",
              },
              {
                pro: "กินกระแสไฟตอนทำอลาม 60 มิลลิแอมป์",
              },
              {
                pro: "มีไฟ LED บอกสถานะการทำงาน",
              },
              {
                pro: "สถานะตอนทำอลามจะมีไฟ LED สีแดงติดค้าง",
              },
            ],
          },
          {
            name: "อุปกรณ์ Smoke แบบใส่ถ่าน",
            img: "Picture/firealam/product3.jpg",
            alt: "อุปกรณ์ Smoke แบบใส่ถ่าน",
            property: [
              {
                pro:
                  "อุปกรณ์ตรวจจับควัน แบบไม่ต้องเดินสายนำสัญญาณ และ ไม่ต้องต่อกับตู้ควบคุมระบบใดๆ",
              },
              {
                pro:
                  "ตรวจจับควัน โดยใช้ลำแสง (Photoelectric Technology) ในการตรวจจับ",
              },
              {
                pro:
                  "มีความปลอดภัยไม่เสี่ยงต่อสารกัมมันตภาพรังสี เหมือน (Ionization Technology)",
              },
              {
                pro: "มี Chamber ห้องดักจับควัน แบบ จุดเดียว",
              },
              {
                pro: "สามารถตรวจจับควัน ได้ทั้งแบบ มองเห็น และ มองไม่เห็น",
              },
              {
                pro:
                  "สามารถตรวจจับควันครอบคลุมพื้นที่ได้สูงสุด 60 ตารางเมตร ในพื้นที่สูงไม่เกิน 4 เมตร",
              },
            ],
          },
          {
            name: "ระบบสัญญาณแจ้งเหตุเพลิงไหม้ Bosch FPC-500",
            img: "Picture/firealam/product2.jpg",
            alt: "ระบบสัญญาณแจ้งเหตุเพลิงไหม้ Bosch FPC-500",
            property: [
              {
                pro: "ดูล้ำค่าทันสมัย – ง่ายสำหรับการใช้ แก่บุคคลทั่วไป",
              },
              {
                pro: "เป็นระบบขนาดเล็กสุดที่ง่ายต่อการใช้งานและการติดตั้ง",
              },
              {
                pro: "หน้าจอ LCD แสดงเป็นตัวอักษรภาษาอังกฤษ",
              },
              {
                pro:
                  "สามารถแบ่งเป็นโซนได้ 2, 4 or 8 โซน และติดอุปกรณ์ตรวจจับได้สูงสุด  64, 128 หรือ 256 อุปกรณ์",
              },
              {
                pro:
                  "อุปกรณ์คร่อมสายปลายทางเป็นอุปกรณ์เผื่อเลือก EOL module (EN 54-13 requirement)",
              },
            ],
          },
          {
            name: "ระบบป้องกันอัคคีภัย Vigilant",
            img: "Picture/firealam/product8.jpg",
            alt: "ระบบป้องกันอัคคีภัย Vigilant",
            property: [
              {
                pro:
                  "ระบบแจ้งเหตุเพลิงไหม้แบรนด์ GE เป็นแบรนด์สินค้าจาก ประเทศสหรัฐอเมริกา (U.S.A.) เป็นชุด Vigilant ซึ่งพัฒนาขึ้นมาสำหรับการรวมศูนย์กลางในระบบเครือข่าย โดยพัฒนาจากชุด EST (EDWARDS) เดิม ซึ่งจะเป็นแบรนด์ที่มีชื่อเสียงดีมาก และมีผู้ติดตั้ง กับใช้งานระบบอุปกรณ์เป็นจำนวนมาก ด้วยคุณภาพที่ดีของระบบการทำงาน และอุปกรณ์ประกอบการทำงานที่ ได้ผ่านการรับรองมาตรฐานตรงตาม ข้อกำหนด ของ NFPA เช่น UL และ FM โดยระบบแจ้งเหตุเพลิงไหม้แบรนด์ GE ชุด Vigilant นี้ จะมีระบบอุปกรณ์ต่างๆ ให้เลือกนำไป ออกแบบวางระบบ และติดตั้งป้องกันอัคคีภัย ให้เหมาะสมกับอาคารสถานที่ต่างๆ",
              },
            ],
          },
        ],
      },
      {
        servicestitle: "เครื่องสแกนลายนิ้วมือ",
        img: "Picture/fingerscan/fingerscan.png",
        alt: "เครื่องสแกนลายนิ้วมือ",
        descrition:
          "เทคโนโลยีการสแกนลายนิ้วมือนี้เรียกเป็นวิชาการว่า ไบโอเมตริก (Biomatrics) เป็นการผสมผสานเทคโนโลยีทางด้านชีวภาพกับเทคโนโลยีด้านคอมพิวเตอร์เข้าด้วยกัน เพื่อนำมาใช้ในการระบุตัวตนของบุคคลนั้นๆ (Identification) ซึ่งการระบุตัวตนนี้ปัจจุบันมีอยู่หลายวิธีที่นิยมนำมาใช้มากได้แก่ ลายนิ้วมือ (Fingerprint), ลายฝ่ามือ, ใบหน้า (Face), ม่านตา (Iris), ดีเอ็นเอ (DNA) หรือแม้กระทั้งลายเซ็นต์ เสียงพูด เมื่อนำข้อมูลเหล่านี้เทียบกับข้อมูลคุณลักษณะที่ได้ถูกบันทึกไว้ในฐานข้อมูลก่อนหน้านี้แล้ว ก็สามารถแยกแยะบุคคลนั้นจากบุคคลอื่น ๆ ได้",
        product: [
          {
            name: "เครื่องสแกนลายนิ้วมือHIP Ci806u",
            img: "Picture/fingerscan/product1.jpg",
            alt: "เครื่องสแกนลายนิ้วมือHIP Ci806u",
            property: [
              {
                pro: "รองรับลายนิ้วมือ 3,000 ลายนิ้วมือ",
              },
              {
                pro: "เก็บบันทึกการเข้าออกได้ 100,000 รายการ",
              },
              {
                pro: "รองรับ id card",
              },
              {
                pro: "เชื่อมต่อผ่านระบบแลนด์, usb flash drive",
              },
              {
                pro: "เมนูภาษาไทย /อังกฤษ",
              },
              {
                pro: "มีเสียงตอบรับภาษาไทย",
              },
              {
                pro:
                  "สามารถตั้งเวลาในการเปิด ปิดประตูได้ (ด้วยการเชื่อมต่อกับโปรแกรมผ่านคอมพิวเตอร์)",
              },
            ],
          },
          {
            name: "เครื่องสแกนลายนิ้วมือHIP Ci F69TS Touch",
            img: "Picture/fingerscan/product3.jpg",
            alt: "เครื่องสแกนลายนิ้วมือHIP Ci F69TS Touch",
            property: [
              {
                pro: "4.3 TFT color touch screen",
              },
              {
                pro: "3,000 User",
              },
              {
                pro: "3,000 Face (10,000 Finger & 3,000 ID Card)",
              },
              {
                pro: "200,000 Record",
              },
              {
                pro: "TCP/IP, USB, U disk download",
              },
              {
                pro: "ID Card",
              },
              {
                pro: "Access Control",
              },
            ],
          },
          {
            name: "เครื่องสแกนลายนิ้วมือHIP Ci P66S",
            img: "Picture/fingerscan/product2.jfif",
            alt: "เครื่องสแกนลายนิ้วมือHIP Ci P66S",
            property: [
              {
                pro: "1,000 Face (1,000 Finger & Plam 2,000 Plan)",
              },
              {
                pro: "เก็บบันทึกการเข้าออกได้ 200,000 รายการ",
              },
              {
                pro: "2.8 TFT Graphic Interface",
              },
              {
                pro: "TCP/IP,USB,U disk download",
              },
              {
                pro: "ID Card",
              },
            ],
          },
          {
            name: "เครื่องสแกนลายนิ้วมือ CMI880",
            img: "Picture/fingerscan/product4.jpg",
            alt: "เครื่องสแกนลายนิ้วมือ CMI880",
            property: [
              {
                pro: "รองรับลายนิ้วมือได้ 100,000 ลายนิ้วมือ",
              },
              {
                pro: "หน้าจอรุ่นใหม่ 3.5 inch TFT Touch Screen ใหม่ล่าสุด",
              },
              {
                pro: "รองรับ USB ในการดึงข้อมูล",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    textheader: "โรงงานและธุรกิจขนาดใหญ่",
    descriptionheader: "ระบบความปลอดภัยสำหรับ",

    img: "Picture/factory2.jpg",
    alt: "securityforfactory",
    title: "ระบบความปลอดภัยสำหรับ โรงงานและธุรกิจขนาดใหญ่",
    descrition:
      "บริษัท ออลล์โซลูชันส์เทค จำกัด ให้คำปรึกษา และติดตั้ง ระบบกล้องวงจรปิด ระบบแจ้งเตือนเพลิงไหม้ และระบบที่จอดรถ",
    services: [
      {
        servicestitle: "IP CAMERA",
        img: "Picture/cctv.jpg",
        alt: "cctv",
        descrition:
          " IP Camera (Internet Protocol Camera) คือ กล้องวงจรปิดที่รวมเอา คุณสมบัติของ Web Server ไว้ในตัวกล้อง (คล้ายกับเป็นการนำเอาความสามารถบางส่วนของเครื่องคอมพิวเตอร์บรรจุลงไปในตัวกล้องวงจรปิด) เพื่อให้สามารถ ดูภาพสดบนระบบ internet หรือ ระบบเครือข่ายได้ โดยผู้ใช้งานสามารถ ดูภาพจากระยะไกลเพื่อใช้ในการรักษาความปลอดภัย และ เฝ้าระวัง ภายใน บ้าน สำนักงาน โรงงาน ห้างสรรพสินค้า และอื่นๆ ได้ IP Camera มีทั้งแบบใช้สาย (Wiring) และแบบไร้สาย (Wireless)",
        product: [
          {
            name: "กล้องวงจรปิด AVTECH AVM583",
            img: "Picture/cctv/product9.jpg",
            alt: "กล้องวงจรปิด AVTECH AVM583",
            property: [
              {
                pro:
                  "Zoom lens of f4.7 ~ 94mm with 20x optical zoom, 16x digital zoom and auto focus, suitable for various monitoring environments",
              },
              {
                pro: "MicroSD card support (up to 64GB) for video storage",
              },

              {
                pro: "External alarm I/O device connection",
              },
              {
                pro:
                  "POE (Power-over-Ethernet) support to eliminate the use of power cables and reduce installation costs",
              },
              {
                pro:
                  "ONVIF ( ) standard supported to simplify system integration",
              },
              {
                pro:
                  "WDR to increase image recognizability in overexposure and dark areas",
              },
            ],
          },
          {
            name: "กล้องวงจรปิด ยี่ห้อ KENPRO รุ่น KP-IP622X-1080P",
            img: "Picture/cctv/product12.png",
            alt: "กล้องวงจรปิด ยี่ห้อ KENPRO รุ่น KP-IP622X-1080P",
            property: [
              {
                pro: "กล้องสปีดโดมติดตั้งภายนอก (IP Camera)",
              },
              {
                pro: "คมชัดระดับ 2 ล้านพิกเซล 1080P (1920x1080) พิกเซล",
              },
              {
                pro: "ระยะอินฟราเรด 150 เมตร",
              },
              {
                pro: "ระยะโฟกัส 5-90 mm",
              },

              {
                pro: "Optical Focus 22X",
              },
              {
                pro:
                  "Roatation Range Horizontal 360° unlimited rotation, Vertical 90° , auto reversal",
              },
              {
                pro: "ระบบป้องกันฝุ่นและน้ำ IP66",
              },
            ],
          },
          {
            name: "กล้องวงจรปิด AVTECH AVM571P",
            img: "Picture/cctv/product10.jpg",
            alt: "กล้องวงจรปิด AVTECH AVM571P",
            property: [
              {
                pro:
                  "Zoom lens of f6.0 ~ 60mm with 10x optical zoom, 16x digital zoom and auto focus, suitable for various monitoring environments",
              },
              {
                pro:
                  "WDR to increase image recognizability in overexposure and dark areas",
              },
              {
                pro:
                  "POE (Power-over-Ethernet) support to eliminate the use of power cables and reduce installation costs",
              },
              {
                pro: "External alarm I/O device connection",
              },

              {
                pro:
                  "ONVIF ( ) standard supported to simplify system integration",
              },
            ],
          },
          {
            name: "กล้องวงจรปิด AVTECH AVM561P",
            img: "Picture/cctv/product11.jpg",
            alt: "กล้องวงจรปิด AVTECH AVM561P",
            property: [
              {
                pro: "ความคมชัดระดับ HD 1080p",
              },
              {
                pro: "ใช้เลนส์ Vari-focal",
              },
              {
                pro: "สามารถซูมได้ถึง 10X",
              },
              {
                pro: "มีหลอดอินฟาเรดสามารถมองเห็นในที่มืดได้",
              },

              {
                pro: "รองรับระบบ iPhone/iPad/Android",
              },
              {
                pro: "รองรับระบบ POE",
              },
              {
                pro: "รองรับระบบ ONVIF",
              },
            ],
          },
        ],
      },
      {
        servicestitle: "SMART FIRE ALARM",
        img: "Picture/smartfirealarm.jpg",
        alt: "smartfirealarm",
        descrition:
          "ระบบแจ้งเตือนเหตุเพลิงไหม้แบบทั่วไปนั้นหากได้อัพเกรดระบบ SMART FIRE ALARM เข้าไปก็จะสามารถแจ้งเตือนเจ้าหน้าที่ผู้ดูแลได้ตลอดเวลา โดยแจ้งเตือนผ่านทาง Application บนสมาร์ทโฟน ซึ่งสามารถบอกได้ว่าโซนไหนบริเวณใดที่กำลังเกิดเหตุไฟไหม้นอกจากนี้ยังสามารถนำไปประยุกต์ใช้เป็นระบบกันขโมย แจ้งเตือนหากมีการบุกรุกในโซนต่างๆ บนสมาร์ทโฟน เพิ่มความปลอดภัยและป้องกันความเสียหายให้แก่ผู้ประกอบการได้อย่างเต็มประสิทธิภาพ ระบบ SMART FIRE ALARM ยังสามารถประหยัดพลังงาน ควบคุมเครื่องใช้ไฟฟ้า เครื่องปรับอากาศ ระบบแสงสว่างให้เหมาะสมกับพื้นที่ที่มีพนักงานทำงานได้อีกด้วย ระบบ SMART FIRE ALARM สามารถใช้งานร่วมกับสัญญาณกันขโมยเดิมได้ เหมาะสำหรับโรงงาน โกดัง ตึกสำนักงาน และอาคารที่มีขนาดใหญ่ ",
        product: [
          {
            name: "ระบบสัญญานแจ้งเพลิงไหม้ Chung-Mei",
            img: "Picture/firealam/product4.jpg",
            alt: "ระบบสัญญานแจ้งเพลิงไหม้ Chung-Mei",
            property: [
              {
                pro:
                  "ตู้ Control Panel ประกอบด้วยวงจรที่ตรวจสอบการทำงานของอุปกรณ์ตรวจจับ ในแต่ละโซน พร้อมวงจรมอนิเตอร์ การทำงานไม่ว่าเป็นวงจร Short Circuit หรือ Open Circuit โดยจะโชว์ Status ต่างๆของระบบบนแผง Display ด้านหน้าของระบบ ",
              },
              {
                pro:
                  "ระบบมีการตรวจสอบการทำงานของแบตเตอรี่พร้อมประจุไฟฟ้า แบตเตอรี่ เพื่อให้พร้อมใช้งานได้ตลอดเวลา รวมทั้งมอนิเตอร์การทำงานของแบตเตอรี่ว่ายังคงพร้อมใช้งานอยู่หรือไม่",
              },
              {
                pro:
                  "ระบบมีปุ่มสำหรับทดสอบ การทำงานของแต่ละวงจรว่ายังคงทำงานตามปกติอยู่หรือไม่ เพื่อให้เกิดความสะดวกในการดูแลบำรุงรักษา",
              },
              {
                pro:
                  "ระบบมีปุ่ม Key Lock เพื่อป้องกันการกดปุ่ม Touch Screen ผิดพลาดโดยไม่ได้ตั้งใจ เพื่อไม่ให้ส่งผลเสียต่อการทำงานของระบบฯ",
              },
              {
                pro:
                  "ตู้ Control Panel จะโชว์สถานะการทำงานของอุปกรณ์เมนหลักของระบบไม่ว่าจะเป็นหลอดไฟแสดงการทำ งานของแต่ละโซน ,Power Supply และสถานะอื่นๆที่สำคัญของระบบเพื่อให้สามารถรู้ว่า ระบบยังคงทำงานอยู่ปกติหรือไม่",
              },
            ],
          },
          {
            name: "ตู้ควบคุมระบบป้องกันอัคคีภัย รุ่น SFP-2402(E)",
            img: "Picture/firealam/product5.gif",
            alt: "ตู้ควบคุมระบบป้องกันอัคคีภัย รุ่น SFP-2402(E)",
            property: [
              {
                pro:
                  "SFP-2402(E) ตู้ควบคุมระบบป้องกันอัคคีภัย แบบธรรมดา (Conventional – Hard-Wire) แบบมี 2 โซน  สำหรับอุปกรณ์ตรวจจับ และ 1 โซน สำหรับอุปกรณ์แจ้งสัญญาณเตือน Fire Alarm Control Panel – Conventional 2 Detector Zone , 1 Alarm Bell Zone",
              },
            ],
          },
          {
            name: "ระบบป้องกันอัคคีภัย CL-9600",
            img: "Picture/firealam/product6.jpg",
            alt: "ระบบป้องกันอัคคีภัย CL-9600",
            property: [
              {
                pro:
                  "ตู้ควบคุมระบบป้องกันอัคคีภัย แบบธรรมดา (Conventional or Hard-Wire) ซึ่งมีให้เลือกใช้งานทั้งแบบ 5 โซน ถึง 80 โซน โดยภายใน 1 โซนสามารถต่ออุปกรณ์ตรวจจับ Smoke Detector ได้ 25 ตัว กับอุปกรณ์ Heat Detector ได้ไม่จำกัดจำนวนและสามารถตรวจเช็คสายกับอุปกรณ์เชื่อมต่อในระบบได้ พร้อมแบตเตอรี่ 24 โวล์ท  Conventional Fire Alarm Control Panel 5 – 80 Detector Zone ,1 Alarm Bell Zone",
              },
            ],
          },
          {
            name: "อุปกรณ์ป้องกันการระเบิด EX",
            img: "Picture/firealam/product7.jpg",
            alt: "อุปกรณ์ป้องกันการระเบิด EX",
            property: [
              {
                pro:
                  "ระบบแจ้งเหตุเพลิงไหม้ แบรนด์ GE เป็นแบรนด์สินค้าจาก ประเทศ สหรัฐอเมริกา (U.S.A.)ซึ่งจะเป็นแบรนด์ที่มีชื่อเสียงดีมากๆ และมีผู้ติดตั้ง กับใช้งานระบบอุปกรณ์เป็นจำนวนมาก ด้วยคุณภาพที่ดี ของระบบการทำงาน และอุปกรณ์ประกอบในการทำงานที่ ได้รับมาตรฐานตรงตามข้อกำหนดของ NFPA เช่น UL กับ FM โดยระบบแจ้งเหตุเพลิงไหม้แบรนด์ Notifier นี้จะมีระบบอุปกรณ์ต่างๆ ให้เลือกนำไปออกแบบวางระบบ และติดตั้งระบบ เพื่อป้องกันอัคคีภัยให้เหมาะสมกับอาคารสถานที่ต่างๆ มากมาย",
              },
            ],
          },
          {
            name: "ระบบป้องกันอัคคีภัย Vigilant",
            img: "Picture/firealam/product8.jpg",
            alt: "ระบบป้องกันอัคคีภัย Vigilant",
            property: [
              {
                pro:
                  "ระบบแจ้งเหตุเพลิงไหม้แบรนด์ GE เป็นแบรนด์สินค้าจาก ประเทศสหรัฐอเมริกา (U.S.A.) เป็นชุด Vigilant ซึ่งพัฒนาขึ้นมาสำหรับการรวมศูนย์กลางในระบบเครือข่าย โดยพัฒนาจากชุด EST (EDWARDS) เดิม ซึ่งจะเป็นแบรนด์ที่มีชื่อเสียงดีมาก และมีผู้ติดตั้ง กับใช้งานระบบอุปกรณ์เป็นจำนวนมาก ด้วยคุณภาพที่ดีของระบบการทำงาน และอุปกรณ์ประกอบการทำงานที่ ได้ผ่านการรับรองมาตรฐานตรงตาม ข้อกำหนด ของ NFPA เช่น UL และ FM โดยระบบแจ้งเหตุเพลิงไหม้แบรนด์ GE ชุด Vigilant นี้ จะมีระบบอุปกรณ์ต่างๆ ให้เลือกนำไป ออกแบบวางระบบ และติดตั้งป้องกันอัคคีภัย ให้เหมาะสมกับอาคารสถานที่ต่างๆ",
              },
            ],
          },
        ],
      },
      {
        servicestitle: "ระบบที่จอดรถ (Car Park System)",
        img: "Picture/solution/carpark1.jpg",
        alt: "Car Park System",
        descrition:
          "ระบบที่จอดรถ (Car Park System) เป็นระบบที่จะช่วยเพิ่มความปลอดภัย ให้กับพื้นที่จอดรถ และอาคารขนาดใหญ่ ใช้งานสะดวกสบาย ดูภาพผ่านมอนิเตอร์ได้คมชัด ละเอียด รวดเร็ว แม่นยำ และตรวจจับป้ายทะเบียนรถยนต์ได้หลายประเภท ตั้งแต่ รถเก๋ง, รถกระบะ และรถบรรทุก",
        product: [
          {
            name: "ระบบไม้กั้นรถยนต์ CMHD363 และ CMHD366",
            img: "Picture/carpark/product1.jfif",
            alt: "ระบบไม้กั้นรถยนต์ CMHD363 และ CMHD366",
            property: [
              {
                pro: "มีระบบป้องกันความเสียหายจากการชนไม้กั้น",
              },
              {
                pro: "ตัวถังไม้กั้นรถยนต์อัตโนมัติทำจากเหล็กกล้า",
              },
              {
                pro:
                  "ชุบและเคลือบสีจากโรงงานมีความทนทานกว่า มอเตอร์มีความแข็งแรงทนทานสูง",
              },
              {
                pro: "กลไกลการยกไม้ขึ้นลงมีเซ็นเซอร์ในการควบคุม",
              },
            ],
          },
          {
            name: "ไม้กั้นรถยนต์ HIP รุ่น CMB 3061/3063/ 3066",
            img: "Picture/carpark/product2.jpg",
            alt: "ไม้กั้นรถยนต์ HIP รุ่น CMB 3061/3063/ 3066",
            property: [
              {
                pro: "ขนาดความยาวแขนกั้น 3 -6 เมตร",
              },
              {
                pro: "ความเร็วในการเปิด 1.5-6 วินาที ตามขนาดความยาวไม้",
              },
              {
                pro: "แขนกั้น รุ่น3เมตร แขนกลม(Swing Out)",
              },
              {
                pro: "รุ่น 4และ6 เมตร แบบ 8 เหลี่ยม ทำจากอลูมิเนียมอัลลอยด์",
              },
              {
                pro: "กำลังมอเตอร์ 90 Watt 220 V.",
              },
              {
                pro: "อัตราการหมุนมอเตอร์ 1400 รอบ/นาที",
              },
              {
                pro: "มาตรฐานการป้องกัน IP55",
              },
              {
                pro: "ขนาดตู้ 348 x 268 x 1050มม.",
              },
            ],
          },
          {
            name: "ระบบไม้กั้นรถยนต์ CMHD053 และ CMHD056",
            img: "Picture/carpark/product3.jpg",
            alt: "ระบบไม้กั้นรถยนต์ CMHD053 และ CMHD056",
            property: [
              {
                pro: "มีไม้กั้นที่เพิ่มขอบยางกันกระแทก",
              },
              {
                pro: "มาพร้อมไฟ LED มองเห็นได้ชัดเจน",
              },
              {
                pro: "หน้าจอ LED แสดงการทำงาน ของเครื่อง",
              },
              {
                pro: "มาพร้อมกับไม้กั้นปุยางกันกระแทกป้องกัน",
              },
              {
                pro: "เหตุการณ์ที่ไม่คาดฝันไม้กั้นเพิ่ม",
              },
              {
                pro: "ของยางกันกระแทกและมีไฟ LED ในตัว",
              },
              {
                pro: "มีดีไซน์ที่มีความแตกต่างจากท้องตลาด",
              },
            ],
          },
        ],
      },
      {
        servicestitle: "รั้วเลื่อนอัตโนมัติ",
        img: "Picture/autodoor/product5.jpg",
        alt: "รั้วเลื่อนอัตโนมัติ",
        descrition:
          "ระบบประตูอัตโนมัติที่ได้รับการยอมรับว่า มีความเสถียรภาพและความมั่นคง ในการทำงานสูง ผลิตจากวัสดุที่มีความแข็งแรง ทนทาน ต่อ แสงแดด ฝน และลมที่ความแรงระดับพายุได้ เพราะมีการใช้งานโดยปกติในพื้นที่ประเทศที่มีปัญหาด้านอุทกภัยอย่างมากมาย มาพร้อมด้วยเทคโนโลยีที่มีระบบป้องกันการชนวัตถุต่างๆ เช่น รถยนต์ หรือ บุคคลได้ การทำงานของระบบมอเตอร์ ที่คงทนมีการเลื่อนของแผงประตูที่ราบรื่นดูสวยงามภายใต้ความแข็งแกร่งจาก โครงวัสดุของประตู ที่ช่วยป้องกันผู้ที่ไม่ได้รับอนุญาติในการเข้ามาในพื้นที่ขององค์กรได้เป็น อย่างดี อีกทั้งยังมีระบบป้องกันผู้บุกรุกที่พยายามปีนข้าม ประตูจะมีระบบ Sensor Alarm แจ้งเตือนว่ามีผู้พยายามบุกรุกทันที ซึ่งให้ท่านสามารถวางใจกับการใช้งานอย่างเต็มที่กับ HIP Auto Gate",
        product: [
          {
            name: "รั้วเลื่อนอัตโนมัติ CM-GX01S",
            img: "Picture/autodoor/product1.jpg",
            alt: "รั้วเลื่อนอัตโนมัติ CM-GX01S",
            property: [
              {
                pro:
                  "ควบคุมการทำงานได้อย่างง่ายดายด้วย Remote Control ได้มากถึง 2,000 จุด",
              },
              {
                pro: "ใช้วัสดุ แสตนเลส 304 มั่นใจในคุณภาพความคงทน",
              },
              {
                pro:
                  "ตัวล้อทำจากวัสดุ PA ทนทานและเสียงเงียบมากกว่าเหล็กอายุการทำงานยาวนานเพิ่มมากขึ้น",
              },
              {
                pro: "การติดตั้งง่ายดาย รวดเร็ว ไม่ต้องกรีดพื้น",
              },
              {
                pro:
                  "ตัวเครื่องที่ใช้วัสดุ Stanless มีความสูงได้ถึง 1.8 เมตร และที่ทำด้วย Zinc Alloy สามารถมีความสูงได้ถึง 2.5 เมตร",
              },
              {
                pro: "สามารถเลือกเพิ่มเติมระบบป้องกันสุนัขได้(Option)",
              },
              {
                pro:
                  "ไฟ LED สามารถสร้างข้อความได้เองพร้อมเลือกได้หลากหลายภาษา เช่น ไทย, จีน, อังกฤษ เป็นต้น",
              },
              {
                pro: "พร้อมรับประกันมอเตอร์ตลอดอายุการใช้ง่าย",
              },
            ],
          },
          {
            name: "รั้วเลื่อนอัตโนมัติ CM-HX02S",
            img: "Picture/autodoor/product2.jpg",
            alt: "รั้วเลื่อนอัตโนมัติ CM-HX02S",
            property: [
              {
                pro:
                  "ควบคุมการทำงานได้อย่างง่ายดายด้วย Remote Control ได้มากถึง 2,000 จุด",
              },
              {
                pro: "ใช้วัสดุ แสตนเลส 304 มั่นใจในคุณภาพความคงทน",
              },
              {
                pro:
                  "ตัวล้อทำจากวัสดุ PA ทนทานและเสียงเงียบมากกว่าเหล็กอายุการทำงานยาวนานเพิ่มมากขึ้น",
              },
              {
                pro: "การติดตั้งง่ายดาย รวดเร็ว ไม่ต้องกรีดพื้น",
              },
              {
                pro:
                  "ตัวเครื่องที่ใช้วัสดุ Stanless มีความสูงได้ถึง 1.8 เมตร และที่ทำด้วย Zinc Alloy สามารถมีความสูงได้ถึง 2.5 เมตร",
              },
              {
                pro: "สามารถเลือกเพิ่มเติมระบบป้องกันสุนัขได้(Option)",
              },
              {
                pro:
                  "ไฟ LED สามารถสร้างข้อความได้เองพร้อมเลือกได้หลากหลายภาษา เช่น ไทย, จีน, อังกฤษ เป็นต้น",
              },
              {
                pro: "พร้อมรับประกันมอเตอร์ตลอดอายุการใช้ง่าย",
              },
            ],
          },
          {
            name: "รั้วเลื่อนอัตโนมัติ CM-LX02",
            img: "Picture/autodoor/product3.jpg",
            alt: "รั้วเลื่อนอัตโนมัติ CM-LX02",
            property: [
              {
                pro:
                  "ควบคุมการทำงานได้อย่างง่ายดายด้วย Remote Control ได้มากถึง 2,000 จุด",
              },
              {
                pro: "ใช้วัสดุ แสตนเลส 304 มั่นใจในคุณภาพความคงทน",
              },
              {
                pro:
                  "ตัวล้อทำจากวัสดุ PA ทนทานและเสียงเงียบมากกว่าเหล็กอายุการทำงานยาวนานเพิ่มมากขึ้น",
              },
              {
                pro: "การติดตั้งง่ายดาย รวดเร็ว ไม่ต้องกรีดพื้น",
              },
              {
                pro:
                  "ตัวเครื่องที่ใช้วัสดุ Stanless มีความสูงได้ถึง 1.8 เมตร และที่ทำด้วย Zinc Alloy สามารถมีความสูงได้ถึง 2.5 เมตร",
              },
              {
                pro: "สามารถเลือกเพิ่มเติมระบบป้องกันสุนัขได้(Option)",
              },
              {
                pro:
                  "ไฟ LED สามารถสร้างข้อความได้เองพร้อมเลือกได้หลากหลายภาษา เช่น ไทย, จีน, อังกฤษ เป็นต้น",
              },
              {
                pro: "พร้อมรับประกันมอเตอร์ตลอดอายุการใช้ง่าย",
              },
            ],
          },
          {
            name: "รั้วเลื่อนอัตโนมัติ GM-HX02B",
            img: "Picture/autodoor/product4.jpg",
            alt: "รั้วเลื่อนอัตโนมัติ GM-HX02B",
            property: [
              {
                pro:
                  "เทคโนโลยีการตรวจสอบเป็นเส้นตรง 4 ทิศทางในแนวนอน ซึ่งทำการตรวจสอบได้อย่างสมบูรณ์แบบและมีสมรรถนะที่เชื่อถือได้",
              },
              {
                pro:
                  "แต่ละช่องของวัสดุที่สามารถยืดและหดได้ติดตั้งโดยสวมPA bush เพื่อป้องกันการสึกหรอ นอกจากนี้ยังกำจัดเสียงรบกวนระหว่างการทำงานของระบบ วัสดุที่สามารถยืดและหดได้ได้ผ่านการทดสอบ 1 ล้านครั้งในมุมเอียง 45 องศา และไม่มีส่วนที่เสียหายเกิดขึ้น",
              },
              {
                pro:
                  "เทคโนโลยี การเชื่อมต่อเพื่อล๊อคตัวเองที่ปรากฏปฏิวัติการเชื่อมต่อแบบเดิม เจาะรูเพื่อเชื่อมต่อกับโครงสร้างที่บิด ทำให้มีความแข็งแรงมากยิ่งขึ้นและทนทาน",
              },
              {
                pro:
                  "จดสิทธิบัตรเทคโนโลยีป้องกันลม ซึ่งอิเลคทรอนิกส์ Gate สามารถทำงานได้ตามปกติแม้อยู่ในสภาวะที่มีลมแรง ขณะที่อิเลคทรอนิกส์ Gate แบบเดิมอาจส่ายไปมาหรือกลิ้งเพราะแรงลมปะทะ",
              },
              {
                pro:
                  "ตัวเครื่องที่ใช้วัสดุ Stanless มีความสูงได้ถึง 1.8 เมตร และที่ทำด้วย Zinc Alloy สามารถมีความสูงได้ถึง 2.5 เมตร",
              },
              {
                pro:
                  "อิเลคทรอนิกส์คีย์ คลัตซ์สามารถเปลี่ยนได้ด้วยตนเองอย่างง่ายดายระหว่างที่เครื่องหยุดทำงาน โดยสวมกุญแจพิเศษไปในแม่กุญแจของคลัตซ์และหมุนเป็นมุม 90 องศา",
              },
              {
                pro:
                  "ล้อหมุนได้ผ่านการทดสอบกว่า 300,000 ครั้ง ในระยะ 10 เมตร และไม่ปรากฏการสึกหรอหรือฉีกขาดใด ๆ ทั้งสิ้น ทราย หรือก้อนกรวดในระหว่างที่ฝนตก หรือพายุไม่มีผลต่อการทำงานของเครื่องอิเลคทรอนิกส์ Gate ตามปกติ",
              },
              {
                pro:
                  "การเชื่อมต่อสายไฟได้รับการป้องกันโดยการหุ้มอย่างดีและกลมกลืนกับประตู",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function Services() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState([-1, -1]);
  const [activeProduct, setActiveProduct] = useState([-1, -1, -1]);

  const onTitleClick = (subjectIndex, childIndex) => {
    if (activeTab[0] === subjectIndex && activeTab[1] === childIndex) {
      setActiveTab([-1, -1]);
    } else {
      setActiveTab([subjectIndex, childIndex]);
    }
  };
  const onProductClick = (subjectIndex, childIndex, subchildIndex) => {
    if (
      activeProduct[0] === subjectIndex &&
      activeProduct[1] === childIndex &&
      activeProduct[2] === subchildIndex
    ) {
      setActiveProduct([-1, -1, -1]);
    } else {
      setActiveProduct([subjectIndex, childIndex, subchildIndex]);
    }

    // console.log("xxxxxxx", activeTab[0]);
  };
  return (
    <>
      <div>
        <div
          className="hero-service breadcrumb-option set-bg"
          style={{
            backgroundImage: 'url("Picture/servicesimg/solution2.jpg")',
            backgroundPosition: "top center",
          }}
        >
          <Container>
            <Row>
              <div className="col-lg-12 text-center">
                <div className="bg-text">
                  <div className="breadcrumb__text">
                    <h2>{t("header.menu2")}</h2>
                    <div className="breadcrumb__links">
                      <Link to="/">{t("header.menu1")}</Link>
                      <span>{t("header.menu2")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>

        {datas.map(function (data, i) {
          return (
            <div key={i} style={{ width: "100%" }}>
              <div
                className="section"
                style={{
                  boxShadow: " rgba(0, 0, 255, 0.157) 0px 0px 16px 6px",
                  paddingBottom: "0",
                }}
              >
                {/* <img className="section2-bg" src={data.img} /> */}
                <div
                  className="section2-bg"
                  style={{
                    // margin: "0 50px",
                    backgroundImage: `url(${data.img})`,
                  }}
                >
                  <div
                    className="section2-text projcard-description"
                    style={{
                      backgroundColor: "#ffffff85",
                      padding: "2vw",
                      left: "30%",
                      width: "65vw",
                    }}
                  >
                    <p>{t("services.headdescrition")}</p>
                    <Row>
                      <Col xs={3} sm={3} md={3} lg={3}>
                        <b />
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6}>
                        <h3>{data.textheader}</h3>
                      </Col>
                      <Col s={3} sm={3} md={3} lg={3}>
                        <b />
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div style={{ margin: "5vw 2vw -6vw " }}>
                <Container style={{ padding: "15px 0 70px 0" }}>
                  <div>
                    <Row>
                      <Col lg={12}>
                        <Container>
                          <div className="projcard-textbox">
                            <h3>
                              <span className="textheader">{data.id}.</span>
                              {data.title}
                            </h3>
                            <div className="projcard-bar" />
                            <div className="projcard-description settext">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {data.descrition}
                            </div>
                          </div>
                        </Container>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <div
                          className="projcard-textbox"
                          style={{ margin: "3vw 1vw -10vw" }}
                        >
                          {data.services.map(function (subser, index) {
                            return (
                              <div key={index} style={{ marginBottom: "5vh" }}>
                                <Row
                                  style={{ cursor: "pointer" }}
                                  onClick={() => onTitleClick(i, index)}
                                >
                                  <Col xs={8} sm={8} md={8} lg={8}>
                                    <h3 style={{ marginTop: "10px " }}>
                                      <i
                                        className=" fa fa-check"
                                        style={{ color: "#0e76ba" }}
                                      />
                                      {/* <span className="textheader"> 1 </span> */}{" "}
                                      {subser.servicestitle}
                                    </h3>
                                  </Col>
                                  <Col
                                    xs={4}
                                    sm={4}
                                    md={4}
                                    lg={4}
                                    style={{ textAlign: "right" }}
                                  >
                                    {activeTab[0] === i &&
                                    activeTab[1] === index ? (
                                      <i
                                        className="fa fa-minus-circle"
                                        aria-hidden="true"
                                        style={{
                                          cursor: "pointer",
                                          marginRight: "2vw",
                                          fontSize: "18px",
                                        }}
                                      ></i>
                                    ) : (
                                      <i
                                        className="fa fa-plus-circle"
                                        aria-hidden="true"
                                        style={{
                                          cursor: "pointer",
                                          marginRight: "2vw",
                                          fontSize: "18px",
                                        }}
                                      ></i>
                                    )}
                                  </Col>
                                </Row>
                                <div className="projcard-bar" />

                                {activeTab[0] === i &&
                                activeTab[1] === index ? (
                                  <div>
                                    <Row>
                                      <Col lg={6}>
                                        <div>
                                          <div
                                            className="projcard-description settext "
                                            style={{ marginTop: "1vw" }}
                                          >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {subser.descrition}
                                          </div>
                                        </div>
                                      </Col>
                                      <Col lg={6}>
                                        <img
                                          className="projcard-img"
                                          src={subser.img}
                                          alt={data.alt}
                                        />
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <h3 style={{ marginTop: "2vw" }}>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                          สินค้าที่เกี่ยวข้อง
                                        </h3>
                                      </Col>
                                      <Col />
                                    </Row>
                                    <Row style={{ margin: "30px 20px 0" }}>
                                      {subser.product.map(function (
                                        productdata,
                                        subindex
                                      ) {
                                        return (
                                          <Col
                                            xs={6}
                                            sm={4}
                                            md={3}
                                            lg={3}
                                            className="paddingcard"
                                            key={subindex}
                                          >
                                            {activeProduct[0] === i &&
                                            activeProduct[1] === index &&
                                            activeProduct[2] === subindex ? (
                                              <div>
                                                <div
                                                  className="product-bg"
                                                  onClick={() =>
                                                    onProductClick(
                                                      i,
                                                      index,
                                                      subindex
                                                    )
                                                  }
                                                ></div>
                                                <div className="product-detail">
                                                  <div>
                                                    <i
                                                      class="fa fa-times"
                                                      onClick={() =>
                                                        onProductClick(
                                                          i,
                                                          index,
                                                          subindex
                                                        )
                                                      }
                                                      aria-hidden="true"
                                                      style={{
                                                        fontSize: "1.5rem",
                                                        color: "red",
                                                        right: "5%",
                                                        top: "2vh",
                                                        position: "absolute",
                                                        cursor: "pointer",
                                                      }}
                                                    />
                                                  </div>
                                                  <h3> {productdata.name}</h3>
                                                  <Row>
                                                    <Col lg={4}>
                                                      <img
                                                        src={productdata.img}
                                                        alt={productdata.alt}
                                                      />
                                                    </Col>

                                                    <Col lg={8}>
                                                      {/* <span
                                                        style={{
                                                          fontSize: "14pt",
                                                        }}
                                                      > */}

                                                      <p
                                                        style={{
                                                          margin: "2vh 4vh 1vh",
                                                        }}
                                                      >
                                                        <i
                                                          className="fa fa-hand-o-right"
                                                          aria-hidden="true"
                                                          style={{
                                                            color: "#0e76ba",
                                                            fontSize: "18px",
                                                          }}
                                                        ></i>
                                                        &nbsp;&nbsp;&nbsp;
                                                        <b
                                                          style={{
                                                            fontSize: "18px",
                                                          }}
                                                        >
                                                          คุณสมบัติ
                                                        </b>
                                                      </p>

                                                      <div
                                                        style={{
                                                          paddingLeft: "6vh",
                                                        }}
                                                      >
                                                        {productdata.property.map(
                                                          function (
                                                            proper,
                                                            indexpro
                                                          ) {
                                                            return (
                                                              <div
                                                                key={indexpro}
                                                              >
                                                                {console.log(
                                                                  "test",
                                                                  proper
                                                                )}
                                                                <i
                                                                  className="fa fa-check-square-o"
                                                                  aria-hidden="true"
                                                                  style={{
                                                                    color:
                                                                      "#0e76ba",
                                                                    fontSize:
                                                                      "18px",
                                                                  }}
                                                                />
                                                                &nbsp;&nbsp;&nbsp;
                                                                {proper.pro}
                                                              </div>
                                                            );
                                                          }
                                                        )}
                                                      </div>
                                                    </Col>
                                                  </Row>
                                                </div>
                                              </div>
                                            ) : null}
                                            <div
                                              className="cardItem"
                                              onClick={() =>
                                                onProductClick(
                                                  i,
                                                  index,
                                                  subindex
                                                )
                                              }
                                            >
                                              <img
                                                className="imgproduct"
                                                src={productdata.img}
                                                alt={productdata.alt}
                                              ></img>

                                              <span className="cardLabel">
                                                {productdata.name}
                                              </span>
                                            </div>
                                          </Col>
                                        );
                                      })}
                                    </Row>
                                    <div
                                      className="projcard-bar"
                                      style={{ marginTop: "8vh" }}
                                    />
                                  </div>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div className="projcard-bar bar" />
              </div>{" "}
            </div>
          );
        })}
      </div>
    </>
  );
  // }
}
