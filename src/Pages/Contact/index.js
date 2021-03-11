import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./style.scss";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { t } = useTranslation();

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

  // const [validated, setValidated] = useState(false);
  console.log("submit sucss formData", formdata);

  return (
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6389.025127074541!2d100.54147911242859!3d13.911415208983305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28370b2fca23f%3A0x92f417e476b27786!2zNDcgMzE2IOC4luC4meC4mSDguJvguYrguK3guJvguJvguLnguKXguYjguLIg4LiV4Liz4Lia4Lil4Lia4LmJ4Liy4LiZ4LmD4Lir4Lih4LmIIOC4reC4s-C5gOC4oOC4reC4m-C4suC4geC5gOC4geC4o-C5h-C4lCDguJnguJnguJfguJrguLjguKPguLUgMTExMjA!5e0!3m2!1sth!2sth!4v1612835246428!5m2!1sth!2sth"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>

      <Container style={{ marginTop: "25px", marginBottom: "20px" }}>
        <div className="projcard" style={{ paddingBottom: "30px" }}>
          <Row>
            <Col lg={6}>
              <div className="contact-padding">
                <h2>{t("contact.header")}</h2>
                <ul className="ulcontact" style={{ fontSize: "1rem" }}>
                  <li style={{ padding: "15px 0" }}>
                    <i
                      className="fa fa-map-marker"
                      style={{ marginRight: "5px" }}
                    />
                    <b>{t("contact.head1")}</b>
                    <br />
                    {t("contact.Address1")}

                    <br />
                  </li>
                  <li>
                    <i
                      className="fa fa-phone"
                      style={{ marginRight: "5px" }}
                    ></i>{" "}
                    {t("contact.tel")}
                    <br />
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
                      {t("contact.email")}
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
                          placeholder={t("contact.tel_form")}
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
                          placeholder={t("contact.email_form")}
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
  );
}
