import React from 'react';
import styled from 'styled-components';
import ZodiacClock from './ZodiacClock';

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

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    background-color: #1565c0;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  }
`;

// Component
const HoroscopeDetails = ({ name, zodiacSign, horoscope }) => {
  const connectWithSameHoroscope = () => {
    // logic to connect with guys having same horoscope
  };

  return (
    <Container>
      <h2>Horoscope Details</h2>
      <p>{`Name: ${name}`}</p>
      <p>{`Zodiac Sign: ${zodiacSign}`}</p>
      <p>{`Horoscope: ${horoscope}`}</p>
      <ZodiacClock />
      <Button onClick={connectWithSameHoroscope}>
        Connect with people having same horoscope
      </Button>
    </Container>
    
  );
}

export default HoroscopeDetails;
