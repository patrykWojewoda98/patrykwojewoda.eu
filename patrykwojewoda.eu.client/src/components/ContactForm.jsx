import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Col>
        <h2>
          <strong>{t("contact.sectionTitle")}</strong>
        </h2>
        <Form>
          <Row>
            <Col>
              <h4>{t("contact.name")}</h4>
              <Form.Control placeholder="Jan" />
            </Col>
            <Col>
              <h4>{t("contact.surname")}</h4>
              <Form.Control placeholder="Kowalski" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>{t("contact.email")}</h4>
              <Form.Control type="email" placeholder="jan.kowalski@gmail.com" />
            </Col>
            <Col>
              <h4>{t("contact.phoneNumber")}</h4>
              <Form.Control type="tel" placeholder="123-456-789" />
            </Col>
          </Row>
          <Row>
            <h4>{t("contact.yourMessage")}</h4>
            <FloatingLabel
              controlId="floatingTextarea2"
              label={t("contact.yourMessage")}
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Row>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
};
