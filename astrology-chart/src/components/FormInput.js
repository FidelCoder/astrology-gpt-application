import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

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

const BirthDetailsForm = ({ setFormData }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ name, dob, time, place });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <StyledLabel>Name</StyledLabel>
        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBirthDate">
        <StyledLabel>Birth Date</StyledLabel>
        <Form.Control type="date" value={dob} onChange={e => setDob(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBirthTime">
        <StyledLabel>Birth Time</StyledLabel>
        <Form.Control type="time" value={time} onChange={e => setTime(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBirthLocation">
        <StyledLabel>Birth Location</StyledLabel>
        <Form.Control type="text" placeholder="Enter your birth location" value={place} onChange={e => setPlace(e.target.value)} />
      </Form.Group>

      <StyledButton variant="primary" type="submit">
        Generate Chart
      </StyledButton>
    </StyledForm>
  );
}

export default BirthDetailsForm;
