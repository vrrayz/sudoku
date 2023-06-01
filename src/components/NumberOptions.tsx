import React from 'react'
import styled from 'styled-components';

interface NumberOptionsProperties{
    numberInputs: number[];
    inputNumber: (input: number) => void;
}

export const NumberOptions = ({numberInputs,inputNumber}: NumberOptionsProperties) => {
  return (
    <NumberOptionsContainer>
        {numberInputs.map((number, index) => (
          <NumberInputButtons key={index} onClick={() => inputNumber(number)}>{number}</NumberInputButtons>
        ))}
      </NumberOptionsContainer>
  )
}
const NumberOptionsContainer = styled.div`
  height: 50px;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  border: none;
`;
const NumberInputButtons = styled.button`
  width: 100%;
  margin: 2px;
`;
