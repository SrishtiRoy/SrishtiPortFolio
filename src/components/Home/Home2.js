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
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center text-center home-about-section"
      id="about"
      style={{ minHeight: "100vh" }}
    >
<div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: "100vh" }}>
  <div className="avatar-wrapper mb-4">
    <img
      src={myImg}
      className="img-fluid rounded-circle"
      alt="avatar"
      style={{ maxHeight: "490px" }}
    />
  </div>

  <h2 className="text-white fw-bold mb-5">I love building apps and APIs</h2>

  <ul className="developer-role-list">
    <li className="role-item delay-1">
      <div className="d-flex align-items-center gap-4">
        <span className="role-icon green-bg">🤖</span>
        <span className="role-label">Android Development</span>
      </div>
    </li>
    <li className="role-item delay-2">
      <div className="d-flex align-items-center gap-4">
        <span className="role-icon red-bg">🍎</span>
        <span className="role-label">iOS Development</span>
      </div>
    </li>
    <li className="role-item delay-3">
      <div className="d-flex align-items-center gap-4">
        <span className="role-icon yellow-bg">🔁</span>
        <span className="role-label">Cross Platform Development</span>
      </div>
    </li>
    <li className="role-item delay-4">
      <div className="d-flex align-items-center gap-4">
        <span className="role-icon gray-bg">🛠️</span>
        <span className="role-label">Backend Development</span>
      </div>
    </li>
  </ul>
</div>
  
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
