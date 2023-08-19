import { useRef, useState,useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Components/Img/contact-img.svg";
import emailjs from "@emailjs/browser";
import { themeContext } from "../ThemeProvider";

const Contact = () => {
  // const formInitialDetails = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // };
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, ] = useState("Send");
  // const [status, ] = useState({});
  // const onFormUpdate = (category, value) => {
  //   setFormDetails({
  //     ...formDetails,
  //     [category]: value,
  //   });
  // };
  // const handleSubmit =()=>{

  // }
  const form = useRef();
  const [done, setdone] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {

    emailjs
      .sendForm(
        "service_4cr0bw8",
        "template_xmbu3k6",
        form.current,
        "2gOHWHs3JXlI4rApE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(true);
    e.preventDefault();

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact" id="contact" style={{
      background: darkMode ? "#fffefc" : "",
      color: darkMode ? "" : "black",
      border: darkMode ? " 0.1px solid #833fd2" : "",
     
    }}>
      <Container >
        <Row className="align-items-center" >
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Connect With Me</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1" >
                  <input
                    type="text"
                    name="user_name" 
               
                    placeholder="Name"
            required style={{
          
              border: darkMode ? " 0.1px solid #833fd2" : "",

          
            }}
                  />
                </Col>
            
                <Col sm={6} className="px-1" >
                  <input
                    type="email"
                    name="user_email"
                   
                    placeholder="Email"
            required
            style={{

              border: darkMode ? "0.1px solid #833fd2" : "",

          
            }}
             
                  />
                </Col>
              
                <br/>
                <Col>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="3"
            
                    placeholder="Message"
                  
            required  style={{
  
              color: darkMode ? "black" : "",
              border: darkMode ? " 0.1px solid #833fd2" : "",

          
            }}

                  ></textarea>
                  <button type="submit" value='send'>
                    <span>Send</span>
                  </button>
                </Col>
                <span className="thanks">
            {" "}
            {done && "Thanks for connecting with me !"}{" "}
          </span>
                
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
