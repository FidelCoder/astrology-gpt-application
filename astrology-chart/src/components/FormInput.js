import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import api from '../api';
import HoroscopeDetails from './HoroscopeDetails'; // Make sure this import path is correct

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
  color: #000;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid hsl(221, 26%, 43%);
  transition: all 1s ease-in-out;

  &:hover, &:focus {
    background: linear-gradient(90deg, transparent 0%, rgba(102, 224, 255, 0.2) 27%, rgba(102, 224, 255, 0.2) 63%, transparent 100%);
    border-bottom: 1px solid hsl(192, 100%, 100%);
    color: #000; // Here change color to black for hover and focus
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
  const [horoscope, setHoroscope] = useState({}); // Changed to an object

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (typeof setFormData !== 'function') {
      console.error('setFormData is not a function');
      return;
    }

    setFormData({ name, dob, time, place, gender });

    const systemMessage = `Given a ${gender} named ${name} born on ${dob} at ${time} in ${place}, please provide Zodiac sign, Sun sign.`;
    const userMessage1 = "What's my zodiac sign based on the provided information?";

    const response1 = await api.post('/chat/completions', {
      "model": "gpt-3.5-turbo",
      "messages": [
        { "role": "system", "content": systemMessage },
        { "role": "user", "content": userMessage1 }
      ]
    });

    if (response1.data.choices && response1.data.choices.length > 0 && response1.data.choices[0].message) {
      const zodiacSign = response1.data.choices[0].message.content.trim();

      const systemMessage2 = `Given that the person is a ${zodiacSign}, provide a general horoscope for the day.`;
      const userMessage2 = `What's the horoscope for a ${zodiacSign} today?`;

      const response2 = await api.post('/chat/completions', {
        "model": "gpt-3.5-turbo",
        "messages": [
          { "role": "system", "content": systemMessage2 },
          { "role": "user", "content": userMessage2 }
        ]
      });

      if (response2.data.choices && response2.data.choices.length > 0 && response2.data.choices[0].message) {
        setHoroscope({
          zodiacSign: zodiacSign,
          horoscope: response2.data.choices[0].message.content,
        });
      }
    }
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
      <HoroscopeDetails name={name} zodiacSign={horoscope.zodiacSign} horoscope={horoscope.horoscope} />
    </Container>
  );
}

export default BirthDetailsForm;
