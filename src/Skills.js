import React from "react";
import { ListGroup } from "react-bootstrap";
import "./Skills.css"; // Import the Skills CSS file

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <ListGroup>
        <ListGroup.Item className="skills-list-item">JavaScript</ListGroup.Item>
        <ListGroup.Item className="skills-list-item">React</ListGroup.Item>
        <ListGroup.Item className="skills-list-item">CSS</ListGroup.Item>
        <ListGroup.Item className="skills-list-item">HTML5</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Skills;
