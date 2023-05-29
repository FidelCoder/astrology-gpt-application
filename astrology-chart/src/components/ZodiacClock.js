// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// const rotate = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// const ClockFace = styled.div`
//   position: relative;
//   width: 300px;
//   height: 300px;
//   border-radius: 50%;
//   outline: 10px solid #333;
//   background: repeating-radial-gradient(circle at 50% 50%, 
//     rgba(200,200,200,.2) 0%, rgba(200,200,200,.2) 2%, 
//     transparent 2%, transparent 3%, rgba(200,200,200,.2) 3%, 
//     transparent 3%), conic-gradient(white 0%, silver 10%, 
//     white 35%, silver 45%, white 60%, silver 70%, 
//     white 80%, silver 95%, white 100%);
//   box-shadow: inset 0 0 20px #0007;
// `;

// const ZodiacContainer = styled.div`
//   position: relative;
//   width: 360px; 
//   height: 360px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ZodiacSign = styled.div`
//   position: absolute;
//   font-size: 20px;
//   transform: rotate(${props => props.rotate || 0}deg) translate(180px) rotate(-${props => props.rotate || 0}deg);
// `;

// const ClockNumber = styled.div`
//   position: absolute;
//   font-size: 20px;
//   width: 30px;
//   height: 30px;
//   line-height: 30px;
//   text-align: center;
//   transform: rotate(${props => props.rotate || 0}deg) translate(110px) rotate(-${props => props.rotate || 0}deg);
// `;



// const HourHand = styled.div`
//   position: absolute;
//   width: 7px;
//   height: 100px;
//   background: #aaa;
//   left: 146.5px;
//   top: 73px;
//   border-radius: 3px 3px 1px 1px;
//   transform-origin: 3px 78px;
//   box-shadow: 0 0 5px #0005,inset 1.5px 3px 0px #333, inset -1.5px -3px 0px #333;
//   z-index: 1;
//   animation: ${rotate} 43200s linear infinite;
// `;

// const MinuteHand = styled.div`
//   position: absolute;
//   width: 6px;
//   height: 130px;
//   background: #aaa;
//   left: 147px;
//   top: 43px;
//   border-radius: 3px 3px 1px 1px;
//   transform-origin: 3px 108px;
//   box-shadow: 0 0 5px #0005, inset 1.5px 3px 0px #333, inset -1.5px -3px 0px #333;
//   z-index: 2;
//   animation: ${rotate} 3600s linear infinite;
// `;

// const SecondHand = styled.div`
//   position: absolute;
//   width: 6px;
//   height: 130px;
//   background: #aaa;
//   left: 147px;
//   top: 43px;
//   border-radius: 3px 3px 1px 1px;
//   transform-origin: 3px 108px;
//   box-shadow: 0 0 5px #0005, inset 1.5px 3px 0px #333, inset -1.5px -3px 0px #333;
//   z-index: 2;
//   animation: ${rotate} 60s linear infinite;
// `;


// const HoroscopeClock = () => (
//   <ZodiacContainer>
//     {['♈︎','♉︎','♊︎','♋︎','♌︎','♍︎','♎︎','♏︎','♐︎','♑︎','♒︎','♓︎'].map((sign, i) => (
//       <ZodiacSign rotate={i * 30} key={i}>{sign}</ZodiacSign>
//     ))}
//     <ClockFace>
//       {[...Array(12).keys()].map((_, i) => (
//         <ClockNumber rotate={i * 30} key={i}>{i === 0 ? 12 : i}</ClockNumber>
//       ))}
//       <HourHand />
//       <MinuteHand />
//       <SecondHand />
//     </ClockFace>
//   </ZodiacContainer>
// );

// export default HoroscopeClock;

import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ClockFace = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  outline: 10px solid #333;
  background: repeating-radial-gradient(circle at 50% 50%, 
    rgba(200,200,200,.2), rgba(200,200,200,.2), 
    transparent, transparent, rgba(200,200,200,.2), 
    transparent), conic-gradient(white, silver, 
    white, silver, white, silver, 
    white, silver, white);
  box-shadow: inset 0 0 20px #0007;
`;

const ZodiacContainer = styled.div`
  position: relative;
  width: 360px; 
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ZodiacSign = styled.div`
  position: absolute;
  font-size: 20px;
  transform: rotate(${props => props.rotate || 0}deg) translate(180px) rotate(-${props => props.rotate || 0}deg);
`;

// Removed ClockNumber styled component

const HourHand = styled.div`
  position: absolute;
  width: 7px;
  height: 100px;
  background: #aaa;
  left: 146.5px;
  top: 73px;
  border-radius: 3px 3px 1px 1px;
  transform-origin: 3px 78px;
  box-shadow: 0 0 5px #0005,inset 1.5px 3px 0px #333, inset -1.5px -3px 0px #333;
  z-index: 1;
  animation: ${rotate} 43200s linear infinite;
`;

const MinuteHand = styled.div`
  position: absolute;
  width: 6px;
  height: 130px;
  background: #aaa;
  left: 147px;
  top: 43px;
  border-radius: 3px 3px 1px 1px;
  transform-origin: 3px 108px;
  box-shadow: 0 0 5px #0005, inset 1.5px 3px 0px #333, inset -1.5px -3px 0px #333;
  z-index: 2;
  animation: ${rotate} 3600s linear infinite;
`;

const SecondHand = styled.div`
  position: absolute;
  width: 6px;
  height: 130px;
  background: #aaa;
  left: 147px;
  top: 43px;
  border-radius: 3px 3px 1px 1px;
  transform-origin: 3px 108px;
  box-shadow: 0 0 5px #0005, inset 1.5px 3px 0px #333, inset -1.5px -3px 0px #333;
  z-index: 2;
  animation: ${rotate} 60s linear infinite;
`;


const HoroscopeClock = () => (
  <ZodiacContainer>
    {['♈︎','♉︎','♊︎','♋︎','♌︎','♍︎','♎︎','♏︎','♐︎','♑︎','♒︎','♓︎'].map((sign, i) => (
      <ZodiacSign rotate={i * 30} key={i}>{sign}</ZodiacSign>
    ))}
    <ClockFace>
      <HourHand />
      <MinuteHand />
      <SecondHand />
    </ClockFace>
  </ZodiacContainer>
);

export default HoroscopeClock;
