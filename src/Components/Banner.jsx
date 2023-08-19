import { useEffect, useState ,useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "./Img/header-img.svg";
import { BrowserRouter } from "react-router-dom";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Resume from'../Components/Img/YASH POHEKAR.pdf'
// import { isVisible } from "@testing-library/user-event/dist/utils";
import { themeContext } from "../ThemeProvider";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Frontend Developer"," UI,UX Designer"];
  const [text, setText] = useState("");
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    },350);
    return () => clearInterval(ticker);
 
  });
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
    
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
     
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);

    }
  };
  return (
    <BrowserRouter>
      <section className="banner" id="home" >
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility style={{
        color: darkMode ? "violet" : "",
      }}> 
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome To My Portfolio </span>
                    <h1>
                      {`Hi I'm Yash Pohekar   `}{" "}
                      <h2 className="wrap">{text}</h2>
                    </h1>

                    <p>
                I'm passionate about bringing forward great products.
                    </p>
                 <a href={Resume} className="vvd" download>Download CV <ArrowRightCircle /></a>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img" className="hederImg" />
            </Col>
          </Row>
        </Container>
      </section>
    </BrowserRouter>
  );
};

export default Banner;
