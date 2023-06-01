import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useRemapNumbers } from "../hooks/useRemapNumbers";

interface GameBoxProperties {
  boxNumbers: number[][];
}
interface RemappedNumbers {
  id: number;
  number: number;
  display: string;
  inputClass: string;
}
interface CurrentBoxIndex {
  firstIndex: number;
  secondIndex: number;
}
export const Game = ({ boxNumbers }: GameBoxProperties) => {
  const remappedNumbers = useRemapNumbers(boxNumbers);
  const [innerBoxNumbers, setInnerBoxNumbers] = useState<RemappedNumbers[][]>(remappedNumbers)
  const [currentBoxIndex, setCurrentBoxIndex] = useState<CurrentBoxIndex>()
  const numberInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const inputNumber = (input: number) => {
    if(currentBoxIndex){
      console.log(remappedNumbers[currentBoxIndex?.firstIndex][currentBoxIndex?.secondIndex].number, "The hidden value of current box index")
      console.log(input, "The value clicked")
      setNewRemap(currentBoxIndex,input)
    }
  }
  const setNewRemap = useCallback((currentBoxIndex: CurrentBoxIndex, input: number) => {
    setInnerBoxNumbers(prev => prev.map((numbers, fi) => numbers.map((boxNumber, si) => {
      // fi is first index
      // si is second index
      if(currentBoxIndex.firstIndex === fi && currentBoxIndex.secondIndex === si && (boxNumber.inputClass === 'wrong' || boxNumber.display === 'none')){
        const currentInputClass = remappedNumbers[fi][si].number === input ? 'correct':'wrong'
        return {id: boxNumber.id, number: input, display: 'block', inputClass: currentInputClass }
      }
      return {id: boxNumber.id, number: boxNumber.number, display: boxNumber.display, inputClass: boxNumber.inputClass }
    })))
  },[remappedNumbers])

  const checkAndSetBoxIndex = ({firstIndex, secondIndex}: CurrentBoxIndex) => {
    if(innerBoxNumbers[firstIndex][secondIndex].inputClass === 'wrong' || innerBoxNumbers[firstIndex][secondIndex].display === 'none'){
      setCurrentBoxIndex({firstIndex,secondIndex})
    }
  }
  return (
    <GameContainer>
      <GameBox>
        {innerBoxNumbers.map((numberRows, i) => (
          <BoxRow key={i}>
            {numberRows.map((item, index) => (
              <InnerBox key={index} onClick={() => checkAndSetBoxIndex({firstIndex: i,secondIndex: index})} className={item.inputClass}>
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
          <NumberInputButtons key={index} onClick={() => inputNumber(number)}>{number}</NumberInputButtons>
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
const InnerBox = styled.button`
  width: calc(100% / 9);
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
  &:focus{
    background: radial-gradient(#fff, #aaa);
  }
  &.wrong{
    color: red;
    // background: radial-gradient(#F0F8FF, #fd5c63);
  }
  &.correct{
    color: blue;
    background: radial-gradient(rgb(152 213 255),rgb(240, 248, 255));
  }
  &.correct, &.wrong{
    font-weight:500;
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
