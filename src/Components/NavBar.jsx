import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Toggle from "./Toggle";
import { themeContext } from "../ThemeProvider";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <BrowserRouter>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Toggle />
          {/* <Navbar.Brand href="#home">
            {" "}
            <strong className="logo">VIPIN</strong>

          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{
                color: darkMode ? "violet" : "",
              }}
            >
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <img src={navIcon1} alt="linkedin"   />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <img src={navIcon2} alt="facebook"   />
                </a>
                <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
                  <img src={navIcon3} alt="instagram"  />
                </a>
              </div> */}
              <HashLink to="#contact">
                <button
                  className="vvd"
                  style={{  background: darkMode ?  "":'',
                    color: darkMode ? "violet" : "",
                  }}
                >
                  {" "}
                  <span>Lets Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
};

export default NavBar;
