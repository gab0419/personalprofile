import './Home.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 

const Home = () => {
  return (
    <Container className="home-container text-center">
      <h1 className="home-title">Welcome to my Profile</h1>
      <p className="home-description">
        Hello! I am a college student from the University of Cabuyao. I am a 3rd
        Year Student, and my course is BSCS.
      </p>
    </Container>
  );
};

export default Home;
