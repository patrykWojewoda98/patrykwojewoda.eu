import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9b219a4c-1789-40bb-aca8-f9903544d6da");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: t("swal.sent"),
        icon: "success",
      });
      event.target.reset();
    }
  };
  return (
    <Container className="custom-contact-form">
      {" "}
      <Col>
        <h2>
          <strong>{t("contact.sectionTitle")}</strong>
        </h2>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <h4>{t("contact.name")}</h4>
              <Form.Control
                placeholder="Jan"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col>
              <h4>{t("contact.surname")}</h4>
              <Form.Control
                placeholder="Kowalski"
                type="text"
                name="surnamename"
                onChange={(e) => setSurname(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>{t("contact.email")}</h4>
              <Form.Control
                type="email"
                placeholder="jan.kowalski@gmail.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col>
              <h4>{t("contact.phoneNumber")}</h4>
              <Form.Control
                type="tel"
                placeholder={t("contact.phoneNumberPlaceHolder")}
                name="phoneNumber"
              />
            </Col>
          </Row>
          <Row className="floating-label">
            {" "}
            {/* Dodano klasę CSS */}
            <h4>{t("contact.yourMessage")}</h4>
            <FloatingLabel
              controlId="floatingTextarea2"
              label={t("contact.yourMessage")}
            >
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </FloatingLabel>
          </Row>
          <Button
            variant="secondary"
            type="submit"
            className="submit-button"
            disabled={
              name.length === 0 ||
              surname.length === 0 ||
              email === 0 ||
              message.length === 0
            }
          >
            {t("contact.button")}
          </Button>
        </Form>
      </Col>
    </Container>
  );
};
