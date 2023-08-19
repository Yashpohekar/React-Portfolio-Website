import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../Components/Img/meter1.svg";
import meter2 from "../Components/Img/meter2.svg";
import meter3 from "../Components/Img/meter3.svg";
import colorSharp from "../Components/Img/color-sharp.png";
import { useContext } from "react";
import { themeContext } from "../ThemeProvider";

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section
      className="skill"
      id="skills"
     
    >
      <Container >
        <Row>
          <Col>
            <div className="skill-bx"  style={{
                  background: darkMode ? "#fffefc " : "",
                  color: darkMode ? "purple" : "",
              
                }}>
              <h2>Skills</h2>
              <p>Continue to study and learn new skills.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                classNane="skill-slider"
               
              >
                <div className="item">
                  <img src={meter3} alt="skills" className="skill-img" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skills" className="skill-img" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skills" className="skill-img" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skills" className="skill-img" />
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skills" className="skill-img" />
                  <h5>Boostrap</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skills" className="skill-img" />
                  <h5>MaterialUI</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};

export default Skills;
