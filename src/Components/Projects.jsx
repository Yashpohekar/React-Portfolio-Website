import colorSharp2 from "../Components/Img/color-sharp2.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";
// import Navbar from "react-bootstrap/Navbar";
import projImg1 from "../Components/Img/project-Img/ToDoJS.jpg"; //
import projImg2 from "../Components/Img/project-Img/Calculater.png";
import projImg3 from "../Components/Img/project-Img/quiz-small.jpg"; //
import projImg4 from "../Components/Img/project-Img/Portfolio Website.png";
import projImg5 from "../Components/Img/project-Img/Running Car.png";
import projImg6 from "../Components/Img/project-Img/Portfolio.png";
import projImg7 from "../Components/Img/project-Img/Scribbler.png";
import projImg8 from "../Components/Img/project-Img/AdviceApp.jpg";

/* import projImg9 from "../Components/Img/project-Img/PortfolioYellow.jpg";
import projImg10 from "../Components/Img/project-Img/running car.jpg";
import projImg11 from "../Components/Img/project-Img/AdviceApp.jpg";
import projImg12 from "../Components/Img/project-Img/MovieFinderApp.jpg"; */

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projectsTabOne = [
    {
      id: 1,
      title: "To Do List App",
      description: "A javaScript Project",
      imgUrl: projImg1,
      url: "link", //
    },
    {
      id: 2,
      title: " Calculater ",
      description: "A HTML/CSS Project",
      imgUrl: projImg2,
      url: "https://calculater-1.netlify.app/",
    },
    {
      id: 3,
      title: "Quiz App",
      description: "A HTML/CSS/ReactJs Project",
      imgUrl: projImg3,
      url: "https://verdant-kelpie-9fa677.netlify.app/", //
     
    },
    {
  
      id: 4,
      title: " Portfolio Website ",
      description: "A HTML/CSS/JavaScript Project",
      imgUrl: projImg4,
      url: "https://portfolio-project-11.netlify.app/",
    },
    {
      id: 5,
      title: " Car moving Project",
      description: "A HTML/CSS/JS Project",
      imgUrl: projImg5,
      url: "https://car-moving-project.netlify.app/",
    },
    {
      id: 6,
      title: " Portfoli ",
      description: "A HTML/CSS Project",
      imgUrl: projImg6,
      url: "https://portfolio-project-12.netlify.app/",
    },
  ];
  const projectsTabTwo = [
    {
      id: 7,
      title: "Scribbler UpGrad(Blog Website)",
      description: "A HTML/CSS/JavaScript Project",
      imgUrl: projImg7,
      url: "https://scribbler-project-upgrad.netlify.app/", 
    },
    {
      id: 8,
      title: "Advice App",
      description: "A HTML/CSS/ReactJs Project",
      imgUrl: projImg8,
      url: "",
    },
    /* {
      id: 9,
      title: "Portfolio",
      description: "A HTML/CSS/ReactJs Project",
      imgUrl: projImg9,
      url: "",
    },
    {
      id: 10,
      title: "Running Car",
      description: "A HTML/CSS Project",
      imgUrl: projImg10,
      url: "",
     
    },
    {
      id: 11,
      title: "Advice App",
      description: "A HTML/CSS/ReactJs Project",
      imgUrl: projImg11,
      url: "https://shiny-horse-240cda.netlify.app/ ",
    },
    {
      id: 12,
      title: "Movie Finder App",
      description: "A React Project",
      imgUrl: projImg12,
      url: "https://github.com/VipinGirjapure/MovieApp",
      
    }, */
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2 className="project-heading">Projects</h2>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-contenct-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="two">Tab Two</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="third" id="projects-tabs-tab-third ">Tab Three</Nav.Link>
                </Nav.Item> */}
              </Nav>
              <Tab.Content
                id="slideInUp"
                className={
                  isVisible ? "animate__animated animate__slideInUp" : ""
                }
              >
                <Tab.Pane eventKey="first">
                  {" "}
                  <Row>
                    {projectsTabOne.map((projects, index) => {
                      return <ProjectsCard key={projects.id} {...projects} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="two">
                  {" "}
                  <Row>
                    {projectsTabTwo.map((projects, index) => {
                      return <ProjectsCard key={projects.id} {...projects} />;
                    })}
                  </Row>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="three">lorem3</Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        alt="backgroud"
        className="background-image-right"
      />
    </section>
  );
};

export default Projects;
