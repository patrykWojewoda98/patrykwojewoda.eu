import React from "react";
import useLocalStorage from "use-local-storage";
import Button from "react-bootstrap/Button";
import "./App.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Card from "react-bootstrap/Card";
import { FaJava } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { GiPoland } from "react-icons/gi";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <Container fluid className="App" data-theme={isDark ? "dark" : "light"}>
      <Row>
        <Col xs={2} md={2}>
          <Image
            src="/src/components/pictures/IMG-20240616-WA0000.jpg"
            fluid
            className="photo"
          />
        </Col>
        <Col style={{ marginTop: "10%" }}>
          <h1>
            <strong>Cześć, Nazywam się </strong>
            <strong style={{ color: "red" }}>Patryk Wojewoda</strong>
          </h1>
          <h2>
            <strong>Programista zarówno aplikcaji biznesowych</strong>
          </h2>
          <h2>
            <strong>jak i maszyn CNC</strong>
          </h2>
        </Col>
        <Col>
          <h2>
            <strong>Skontaktuj sie ze mną</strong>
          </h2>
          <Form>
            <Row>
              <Col>
                <h4>Imie</h4>
                <Form.Control placeholder="Jan" />
              </Col>
              <Col>
                <h4>Nazwisko</h4>
                <Form.Control placeholder="Kowalski" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Adres email</h4>
                <Form.Control
                  type="email"
                  placeholder="jan.kowalski@gmail.com"
                />
              </Col>
              <Col>
                <h4>Telefon</h4>
                <Form.Control type="tel" placeholder="123-456-789" />
              </Col>
            </Row>
            <Row>
              <h4>Twoja wiadomość</h4>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Twoja wiadomość"
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
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Moje umiejętności</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Umiejętności Twarde
            </Card.Subtitle>
            <Row>
              <Col>
                <FaJava />
                Java
              </Col>
              <Col>
                <SiCsharp />
                C#
              </Col>
              <Col>
                <SiCplusplus />
                C++
              </Col>
              <Col>
                <FaReact />
                React
              </Col>
              <Col>
                <BsBootstrapFill />
                BootStrap
              </Col>
              <Col>
                <FaDatabase />
                SQL
              </Col>
            </Row>
            <Card.Subtitle className="mb-2 text-muted">Język</Card.Subtitle>
            <Row>
              <Col>
                <GiPoland /> Polski-Ojczysty
                <RiEnglishInput className="ml-2" />
                Angielski-B2
              </Col>
            </Row>

            <Card.Subtitle className="mb-2 text-muted">
              Umiejętności miękkie
            </Card.Subtitle>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default App;
