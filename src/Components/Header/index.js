import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./sty.scss";

export default function Header() {
  const [menu, setmenu] = useState(false);
  const [boldermenu, setboldermenu] = useState(false);
  const [borderlangEn, setborderlangEn] = useState(false);
  const [borderlangTh, setborderlangTh] = useState(true);

  const { t, i18n } = useTranslation();
  // const datas = i18next.t("footer.services", { returnObjects: true });

  const changeLanguage = (language) => {
    if (language === "en") {
      setborderlangEn(true);
      setborderlangTh(false);
    } else if (language === "th") {
      setborderlangEn(false);
      setborderlangTh(true);
    }
    i18n.changeLanguage(language);
  };
  return (
    <>
      <div
        className={`offcanvas-menu-overlay ${menu && "active"}`}
        onClick={() => setmenu(false)}
      />
      <div className={`offcanvas-menu-wrapper ${menu && "active"}`}>
        <Row style={{ textAlign: "center" }}>
          <div className="offcanvas__logo">
            <NavLink to="/" onClick={() => setmenu(false)}>
              <img className="logo" src={t("header.logomobile")} alt="logo" />
            </NavLink>
          </div>
        </Row>

        <Row>
          <div className="mobile-menu">
            <div className="slicknav_menu">
              <ul>
                <li>
                  <NavLink to="/" onClick={() => setmenu(false)}>
                    {" "}
                    <p className="menu"> {t("header.menu1")}</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" onClick={() => setmenu(false)}>
                    <p className="menu"> {t("header.menu2")}</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/customer" onClick={() => setmenu(false)}>
                    {" "}
                    <p className="menu"> {t("header.menu3")}</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutus" onClick={() => setmenu(false)}>
                    {" "}
                    <p className="menu"> {t("header.menu4")}</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={() => setmenu(false)}>
                    <p className="menu"> {t("header.menu5")}</p>
                  </NavLink>
                </li>
                <li>
                  <Row style={{ marginLeft: "1px" }}>
                    <p
                      className={`${borderlangTh && "borderlang"}`}
                      style={{
                        marginRight: "5px",
                        cursor: "pointer",
                        marginBottom: "0",
                      }}
                      onClick={() => changeLanguage("th")}
                    >
                      TH
                    </p>
                    |
                    <p
                      className={`${borderlangEn && "borderlang"}`}
                      style={{
                        marginLeft: "5px",
                        marginRight: "5px",
                        cursor: "pointer",
                        marginBottom: "0",
                      }}
                      onClick={() => changeLanguage("en")}
                    >
                      EN
                    </p>
                  </Row>{" "}
                </li>
              </ul>
            </div>
          </div>
        </Row>

        <Row>
          <ul className="offcanvas__widget">
            <li>
              <p className="widget">
                <i className="fa fa-map-marker" />{" "}
                <b>
                  {t("header.head1")}
                  <br />
                </b>
                {t("header.Address1")}
                <br />
              </p>
            </li>
            <li>
              <p className="widget">
                <i className="fa fa-phone"></i> {t("header.tel")}
                <b />
              </p>
            </li>
            <li>
              <p className="widget">
                <i className="fa fa-envelope" />
                {t("header.email")}
                <b />
              </p>
            </li>
          </ul>
        </Row>
      </div>

      <div className="navbar sticky-top">
        <div className="navbar-contact">
          <div>
            <div className="header-info-left">
              <ul>
                <li>
                  <i className="fa fa-phone" /> {t("header.tel")}
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  {t("header.email")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Container>
          <Row style={{ width: "100%" }}>
            <Col lg={3} xl={3}>
              <div className="header__logo">
                <NavLink to="/" onClick={() => setboldermenu(true)}>
                  <img className="logo" src={t("header.logo")} alt="logo" />
                </NavLink>
              </div>
            </Col>
            <Col lg={9} xl={9} style={{ paddingRight: "0" }}>
              <div className="header__nav">
                <div className="header__menu">
                  <ul>
                    <li>
                      <NavLink
                        activeClassName={`${boldermenu && "active"} `}
                        to="/"
                        onClick={() => setboldermenu(true)}
                      >
                        {t("header.menu1")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services"
                        activeClassName="active"
                        onClick={() => setboldermenu(false)}
                      >
                        {t("header.menu2")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/customer"
                        activeClassName="active"
                        onClick={() => setboldermenu(false)}
                      >
                        {" "}
                        {t("header.menu3")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/aboutus"
                        activeClassName="active"
                        onClick={() => setboldermenu(false)}
                      >
                        {" "}
                        {t("header.menu4")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        activeClassName="active"
                        onClick={() => setboldermenu(false)}
                      >
                        {t("header.menu5")}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <li
                        className={`${borderlangTh && "borderlang"}`}
                        style={{ marginRight: "5px", cursor: "pointer" }}
                        onClick={() => changeLanguage("th")}
                      >
                        TH
                      </li>
                      |
                      <li
                        className={`${borderlangEn && "borderlang"}`}
                        style={{ marginLeft: "5px", cursor: "pointer" }}
                        onClick={() => changeLanguage("en")}
                      >
                        EN
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <div className="canvas__open" onClick={() => setmenu(true)}>
            <span className="fa fa-bars" style={{ padding: "0.2vh 0" }} />
          </div>
        </Container>
      </div>
    </>
  );
}
