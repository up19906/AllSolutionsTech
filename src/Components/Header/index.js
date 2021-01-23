import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./sty.scss";

export default class Header extends React.Component {
  state = {
    nav: false,
    menu: false,
    boldermenu: true,
    // sticky: "",
    // src: "Picture/logo/ast3.png",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    if (window.pageYOffset >= 40) {
      // if (!this.state.nav) {
      this.setState({ nav: true });

      // this.setState({ sticky: "top" });
      // this.setState({ src: "Picture/logo/ast3.png" });
      // }
    } else {
      // if (this.state.nav) {
      this.setState({ nav: false });

      // this.setState({ sticky: "" });
      // this.setState({ src: "Picture/logo/ast2.png" });
    }
    // }
  };

  render() {
    return (
      <>
        <div
          class={`offcanvas-menu-overlay ${this.state.menu && "active"}`}
          onClick={() => {
            this.setState({ menu: false });
          }}
        />
        <div
          className={`offcanvas-menu-wrapper ${this.state.menu && "active"}`}
        >
          <Row style={{ textAlign: "center" }}>
            <div className="offcanvas__logo">
              <NavLink
                to="/"
                onClick={() => {
                  this.setState({ menu: false });
                }}
              >
                <img className="logo" src="Picture/logo/ast2.png" alt="" />
              </NavLink>
            </div>
          </Row>

          <Row>
            <div className="mobile-menu">
              <div className="slicknav_menu">
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => {
                        this.setState({ menu: false });
                      }}
                    >
                      {" "}
                      <p className="menu"> หน้าหลัก</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      onClick={() => {
                        this.setState({ menu: false });
                      }}
                    >
                      <p className="menu"> บริการของเรา</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/customer"
                      onClick={() => {
                        this.setState({ menu: false });
                      }}
                    >
                      {" "}
                      <p className="menu"> ลูกค้าของเรา</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/aboutus"
                      onClick={() => {
                        this.setState({ menu: false });
                      }}
                    >
                      {" "}
                      <p className="menu">เกี่ยวกับเรา</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      onClick={() => {
                        this.setState({ menu: false });
                      }}
                    >
                      <p className="menu"> ติดต่อเรา</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      onClick={() => {
                        this.setState({ menu: false });
                      }}
                    >
                      EN|TH
                    </NavLink>
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
                    สำนักงานใหญ่
                    <br />
                  </b>
                  47/316 ถ.ป๊อปปูล่า ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี 11120
                  <br />
                  <i className="fa fa-map-marker" /> <b>สำนักงานนครราชสีมา </b>
                  <br />
                  3279/25 ถ.สืบศิริ ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000
                  <b />
                </p>
              </li>
              <li>
                <p className="widget">
                  <i class="fa fa-phone"></i> 02-012-3795 / 065-969-3552
                  <b />
                </p>
              </li>
              <li>
                <p className="widget">
                  <i className="fa fa-envelope" />
                  ast.allsolutionstech@gmail.com
                  <b />
                </p>
              </li>
            </ul>
          </Row>
        </div>


        <div
          className={`navbar ${this.state.nav && "sticky-top"} ${
            this.state.nav && "Nav__black"
          }`}
        >
          <Container>
            <Row style={{ width: "100%" }}>
              <Col lg={3}>
                <div className="header__logo">
                  <NavLink
                    to="/"
                    onClick={() => {
                      this.setState({ boldermenu: true });
                    }}
                  >
                    <img className="logo" src="Picture/logo/ast3.png" alt />
                  </NavLink>
                </div>
              </Col>
              <Col lg={9}>
                <div className="header__nav">
                  <div className="header__menu">
                    <ul>
                      <li>
                        <NavLink
                          activeClassName={`${
                            this.state.boldermenu && "active"
                          } `}
                          to="/"
                          onClick={() => {
                            this.setState({ boldermenu: true });
                          }}
                        >
                          {" "}
                          หน้าหลัก
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services"
                          activeClassName="active"
                          onClick={() => {
                            this.setState({ boldermenu: false });
                          }}
                        >
                          บริการของเรา
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/customer"
                          activeClassName="active"
                          onClick={() => {
                            this.setState({ boldermenu: false });
                          }}
                        >
                          {" "}
                          ลูกค้าของเรา
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/aboutus"
                          activeClassName="active"
                          onClick={() => {
                            this.setState({ boldermenu: false });
                          }}
                        >
                          {" "}
                          เกี่ยวกับเรา
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contact"
                          activeClassName="active"
                          onClick={() => {
                            this.setState({ boldermenu: false });
                          }}
                        >
                          ติดต่อเรา
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about"
                          activeClassName="active"
                          onClick={() => {
                            this.setState({ boldermenu: false });
                          }}
                        >
                          EN|TH
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            <div
              className="canvas__open"
              onClick={() => {
                this.setState({ menu: true });
              }}
            >
              <span className="fa fa-bars" />
            </div>
          </Container>
        </div>
      </>
    );
  }
}
