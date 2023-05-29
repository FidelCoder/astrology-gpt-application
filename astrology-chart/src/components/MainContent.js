import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BirthDetailsForm from './FormInput';
import ThreeDModel from './ThreeDModel';

// import AuthForm from './Auth/AuthForm';
import HoroscopeDetails from './HoroscopeDetails';

const MainContent = () => {
  const modelPath = "background_model.glb";  // Replace this with your model path
  const backgroundModelPath = "background_model.glb";  // Replace this with your background model path

  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to Astrology-GPT</h1>
          <p>Discover the secrets of your natal chart...</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>Form goes here...</p>
          <BirthDetailsForm />
          

        </Col>
        <Col md={6}>
          <p>3D model goes here...</p>
          <ThreeDModel/>
        </Col>
      </Row>
      {/* <ThreeDModel/> */}
       
    </Container>
  );
}

export default MainContent;
