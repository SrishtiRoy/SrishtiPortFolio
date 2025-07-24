import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/girl-logo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
    <Row className="align-items-center justify-content-center">
      <Col md={8} lg={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="purple">INTRODUCE</span> MYSELF
        </h1>
        <p className="home-about-body" style={{ padding: "1.5rem 0" }}>
          I'm a <b className="purple">Seasoned Mobile Developer</b> with over 11 years of end-to-end experience across{" "}
          <b className="purple">Android</b>, <b className="purple">iOS</b>, and{" "}
          <b className="purple">cross-platform</b> mobile solutions.
          <br />
          <br />
          I have strong command over <b className="purple">data structures, algorithms, and object-oriented design (OOP/OOD)</b>{" "}
          with a deep passion for clean and maintainable code.
          <br />
          <br />
          I'm proficient in applying scalable software design patterns like{" "}
          <b className="purple">MVVM, MVP, MVI</b>, and <b className="purple">Clean Architecture</b> to large-scale mobile applications.
          <br />
          <br />
          I'm always exploring innovative technologies and crafting impactful mobile experiences.
        </p>
      </Col>
  
      <Col md={4} lg={3} className="d-flex justify-content-center">
        <Tilt>
          <img
            src={myImg}
            className="img-fluid"
            alt="avatar"
            style={{
              maxHeight: "380px",
            }}
          />
        </Tilt>
      </Col>
    </Row>
  
    <Row className="justify-content-center mt-4">
      <Col md={12} className="home-about-social text-center">
        <h1>FIND ME ON</h1>
        <p>Feel free to <span className="purple">connect</span> with me</p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/srishtiroy"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://twitter.com/srishtiroy"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/srishtiroy/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/srishtiroy"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
  

  )
}
export default Home2;
