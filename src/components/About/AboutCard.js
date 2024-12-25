import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdelahid Awessou </span>
            from <span className="purple"> Montreal, Canada.</span>
            <br />
            I am currently a software developer student engineer.
            <br />
            I have completed my BEng in tech Engineering at Concordia Montreal
            and a BSc in Computer science in Three-Rivers state University
            Canada.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Track and Field
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Nature
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdelahid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
