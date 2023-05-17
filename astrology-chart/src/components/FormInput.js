import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

// Styled Components
const Container = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 20px;
  border-radius: 5px;
  background-color: #f8f9fa;
`;

const StyledLabel = styled(Form.Label)`
  color: #0d6efd;
`;

const StyledControl = styled(Form.Control)`
  color: #fff;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid hsl(221, 26%, 43%);
  transition: all 1s ease-in-out;

  &:hover, &:focus {
    background: linear-gradient(90deg, transparent 0%, rgba(102, 224, 255, 0.2) 27%, rgba(102, 224, 255, 0.2) 63%, transparent 100%);
    border-bottom: 1px solid hsl(192, 100%, 100%);
    color: hsl(192, 100%, 88%);
  }
`;

const StyledButton = styled(Button)`
  background-color: #0d6efd;
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;

// Component
const BirthDetailsForm = ({ setFormData }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ name, dob, time, place, gender });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <StyledLabel>Name</StyledLabel>
          <StyledControl type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBirthDate">
          <StyledLabel>Birth Date</StyledLabel>
          <StyledControl type="date" value={dob} onChange={e => setDob(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBirthTime">
          <StyledLabel>Birth Time</StyledLabel>
          <StyledControl type="time" value={time} onChange={e => setTime(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBirthLocation">
          <StyledLabel>Birth Location</StyledLabel>
          <StyledControl type="text" placeholder="Enter your birth location" value={place} onChange={e => setPlace(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formGender">
          <StyledLabel>Gender</StyledLabel>
          <StyledControl as="select" custom onChange={e => setGender(e.target.value)}>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </StyledControl>
        </Form.Group>

        <StyledButton variant="primary" type="submit">
          Generate Horoscope
        </StyledButton>
      </Form>
    </Container>
  );
}

export default BirthDetailsForm;
