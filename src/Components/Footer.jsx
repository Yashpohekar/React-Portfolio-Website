import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../Components/Img/nav-icon1.svg";
import navIcon2 from "../Components/Img/nav-icon2.svg";
import navIcon3 from "../Components/Img/nav-icon3.svg";
const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <strong className="footer-logo">YASH</strong>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
          </Col>
          <p>© 2022</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
