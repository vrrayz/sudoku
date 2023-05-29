import React from "react";
import styled from "styled-components";
import { useRemapNumbers } from "../hooks/useRemapNumbers";

interface GameBoxProperties {
  boxNumbers: number[][];
}
export const Game = ({ boxNumbers }: GameBoxProperties) => {
  const remappedNumbers = useRemapNumbers(boxNumbers);
  const numberInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <GameContainer>
      <GameBox>
        {remappedNumbers.map((numberRows, i) => (
          <BoxRow key={i}>
            {numberRows.map((item, index) => (
              <InnerBox key={index}>
                <InnerBoxNumber style={{ display: item.display }}>
                  {item.number}
                </InnerBoxNumber>
              </InnerBox>
            ))}
          </BoxRow>
        ))}
      </GameBox>
      <NumberOptionsContainer>
        {numberInputs.map((number, index) => (
          <NumberInputButtons key={index}>{number}</NumberInputButtons>
        ))}
      </NumberOptionsContainer>
    </GameContainer>
  );
};
const GameContainer = styled.section`
  background-color: #fafafa;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: start;
  flex-direction: column;
`;
const GameBox = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 350px;
  max-width: 350px;
  margin: 16px auto;
`;
const BoxRow = styled.div`
  width: 100%;
  height: calc((100% / 9) - 1.5px);
  border: 1px solid black;
  border-bottom: none;
  display: flex;
  &:nth-child(3n + 0) {
    border-bottom: solid;
  }
`;
const InnerBox = styled.div`
  width: calc((100% / 9) - 1px);
  height: calc(100%);
  border-left: 1px solid black;
  border-image: initial;
  border-right: none;
  border-bottom: 1px solid;
  border-top: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5em;
  font-weight: 100;
  &:nth-child(3n + 0) {
    border-right: solid;
  }
`;
const InnerBoxNumber = styled.span`
  margin: auto;
`;
const NumberOptionsContainer = styled(GameBox)`
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
