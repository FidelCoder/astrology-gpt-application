import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
//@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


// Define your styled components
const StyledForm = styled(Form)`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
`;

const StyledLabel = styled(Form.Label)`
  color: #0d6efd;
`;

const StyledButton = styled(Button)`
  background-color: #0d6efd;
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;

const BirthDetailsForm = () => {
  return (
    <StyledForm>
      <Form.Group controlId="formName">
        <StyledLabel>Name</StyledLabel>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group controlId="formBirthDate">
        <StyledLabel>Birth Date</StyledLabel>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group controlId="formBirthTime">
        <StyledLabel>Birth Time</StyledLabel>
        <Form.Control type="time" />
      </Form.Group>

      <Form.Group controlId="formBirthLocation">
        <StyledLabel>Birth Location</StyledLabel>
        <Form.Control type="text" placeholder="Enter your birth location" />
      </Form.Group>

      <StyledButton variant="primary" type="submit">
        Generate Chart
      </StyledButton>
    </StyledForm>
  );
}

export default BirthDetailsForm;
