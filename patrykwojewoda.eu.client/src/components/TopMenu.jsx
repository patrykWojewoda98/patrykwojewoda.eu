import "./TopMenu.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import Image from "react-bootstrap/Image";
import useLocalStorage from "use-local-storage";
import Toggle from "./Toggle";

export const TopMenu = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <div
      className="App"
      data-theme={isDark ? "dark" : "light"}
      style={{ height: "1%" }}
    >
      <div>
        <Navbar collapseOnSelect expand="lg">
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
                <Nav.Link as={Link} to="/AboutMe">
                  O mnie
                </Nav.Link>
                <Nav.Link as={Link} to="/Projects">
                  Projekty
                </Nav.Link>
                <Nav.Link as={Link} to="/References">
                  Referencje
                </Nav.Link>
                <Nav.Link as={Link} to="/Contact">
                  Kontakt
                </Nav.Link>
              </Nav>
              <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)}
              />
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
