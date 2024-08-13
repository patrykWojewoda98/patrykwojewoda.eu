import "./TopMenu.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import Image from "react-bootstrap/Image";
import useLocalStorage from "use-local-storage";

import LanguageSelector from "./language-selector";
import { useTranslation } from "react-i18next";

export const TopMenu = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const { t } = useTranslation();

  return (
    <div
      className="App"
      data-theme={isDark ? "dark" : "light"}
      style={{ height: "1%" }}
    >
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant={isDark ? "dark" : "light"}
        >
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <Image
                  src="../src/Components/Pictures/WebsideLogo.jpg"
                  className="logo"
                />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/projects">
                  {t("navigation.projects")}
                </Nav.Link>
                <Nav.Link as={Link} to="/references">
                  {t("navigation.references")}
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  {t("navigation.contact")}
                </Nav.Link>
              </Nav>
              <LanguageSelector />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Container fluid>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};
