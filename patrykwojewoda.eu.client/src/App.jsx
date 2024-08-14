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
import { FaHandsHelping } from "react-icons/fa";
import { MdManageSearch, MdOpacity } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { GiAchievement } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { ContactForm } from "./components/ContactForm";
import { motion } from "framer-motion";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const { t } = useTranslation();

  return (
    <Container fluid className="App">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Row>
          <Col xs={1} md={1} />
          <Col xs={2} md={2}>
            <Image
              src="/src/components/pictures/IMG-20240616-WA0000.jpg"
              fluid
              className="profilePhoto"
            />
          </Col>
          <Col style={{ marginTop: "5%" }}>
            <h1>{t("aboutMe.introduction")}</h1>
          </Col>

          <Row>
            <Col xs={1} md={1} />
            <Col>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <h3>{t("aboutMe.mainSection")}</h3>
              </div>
            </Col>
            <Col>
              <Image
                src="/src/components/pictures/background.jpg"
                className="photo"
              />
            </Col>
          </Row>
        </Row>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Row>
          <Col xs={1} md={1} />
          <Col>
            <h1>{t("whyMe.mainQuestion")}</h1>
            <Row>
              <motion.p
                initial={{ opacity: 0, x: 500 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.8, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {t("whyMe.reason1")}
              </motion.p>
            </Row>
          </Col>

          <Col>
            <Image src="/src/components/pictures/think.jpg" className="photo" />
          </Col>
        </Row>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Row>
          <Card className="skills">
            <Card.Body>
              <Card.Title className="text-center">
                {t("skills.sectionTitle")}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {t("skills.hardSkills")}
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
                  Bootstrap
                </Col>
                <Col>
                  <FaDatabase />
                  SQL
                </Col>
              </Row>
              <Card.Subtitle className="my-2 text-muted">
                {t("skills.language")}
              </Card.Subtitle>
              <Row>
                <Col>
                  <GiPoland /> {t("skills.polish")}
                  <RiEnglishInput style={{ marginLeft: "20px" }} />
                  {t("skills.english")}
                </Col>
              </Row>

              <Card.Subtitle className="my-2 text-muted">
                {t("skills.softSkills.title")}
              </Card.Subtitle>
              <Row>
                <Col>
                  <FaHandsHelping /> {t("skills.softSkills.communication")}
                </Col>
                <Col>
                  <MdManageSearch /> {t("skills.softSkills.analyticalThinking")}
                </Col>
                <Col>
                  <IoMdTime /> {t("skills.softSkills.timeManagement")}
                </Col>
                <Col>
                  <GiCheckMark /> {t("skills.softSkills.taskFocus")}
                </Col>
                <Col>
                  <GiAchievement /> {t("skills.softSkills.selfMotivation")}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Row>
          <ContactForm />
        </Row>
      </motion.div>
    </Container>
  );
};

export default App;
