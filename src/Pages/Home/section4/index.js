import React from "react";
import "./section4.scss";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Section4() {
  const { handleSubmit } = useForm();
  const Data = {
    username: "",
    email: "",
    subject: "",
    content: "",
    phone: "",
  };
  const [formdata, setFormdata] = React.useState(Data);
  const Chagform = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  console.log("From Test Change", formdata);
  const onSubmitform = async () => {
    console.log("submit sucss", formdata.username);
    await axios.post("http://www.allsolutionstech.co.th/send-contact.php", {
      name: formdata.username,
      subject: formdata.subject,
      email: formdata.email,
      content: formdata.content,
      phone: formdata.phone,
    });
    setFormdata(Data);
    alert("ส่งข้อความสำเร็จ");
  };
  console.log("submit sucss formData", formdata);
  const { t } = useTranslation();
  return (
    <>
      <div className="section4">
        <Container>
          <div className="projcard-section4" style={{ paddingBottom: "30px" }}>
            <Row>
              <Col lg={6}>
                <div className="contact-padding">
                  <h2>{t("header.menu5")}</h2>
                  <ul>
                    <li style={{ padding: "15px 0" }}>
                      <i
                        className="fa fa-map-marker"
                        style={{ marginRight: "5px" }}
                      />
                      <b> {t("header.head1")}</b>
                      <br />
                      {t("header.Address1")}
                    </li>
                    <li>
                      <i className="fa fa-phone" style={{ marginRight: "5px" }}></i>{" "}
                      02-012-3795 / 065-969-3552 <br />
                    </li>
                    <li>
                      <i
                        className="fa fa-envelope"
                        style={{ marginRight: "5px" }}
                      />
                      <a
                        href="mailto:ast.allsolutionstech@gmail.com"
                        className="contact-padding"
                      >
                        {" "}
                        ast.allsolutionstech@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div className="contact-padding">
                  <Form noValidate onSubmit={handleSubmit(onSubmitform)}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="username"
                        onChange={Chagform}
                        value={formdata.username}
                        className="form-control"
                        placeholder={t("contact.name")}
                      />
                    </div>
                    <div className="row  wow fadeInUp animated">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            name="phone"
                            onChange={Chagform}
                            value={formdata.phone}
                            className="form-control"
                            placeholder={t("contact.tel")}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            onChange={Chagform}
                            value={formdata.email}
                            className="form-control"
                            placeholder={t("contact.email")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        onChange={Chagform}
                        value={formdata.subject}
                        className="form-control"
                        placeholder={t("contact.title")}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="content"
                        onChange={Chagform}
                        value={formdata.content}
                        className="form-control"
                        rows={5}
                        placeholder={t("contact.description")}
                      />
                    </div>
                    <div className="form-group" style={{ textAlign: "right" }}>
                      <Button type="submit" className=" primary-btn">
                        {t("contact.submit")}
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
