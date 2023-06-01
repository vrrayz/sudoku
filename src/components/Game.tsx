import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useRemapNumbers } from "../hooks/useRemapNumbers";
import { CurrentBoxIndex, PlayerMetric, RemappedNumbers } from "./types";
import { BoxRows } from "./BoxRows";
import { NumberOptions } from "./NumberOptions";
import { MetricSection } from "./MetricSection";

interface GameBoxProperties {
  boxNumbers: number[][];
}

export const Game = ({ boxNumbers }: GameBoxProperties) => {
  const remappedNumbers = useRemapNumbers(boxNumbers);
  const [innerBoxNumbers, setInnerBoxNumbers] = useState<RemappedNumbers[][]>(remappedNumbers)
  const [currentBoxIndex, setCurrentBoxIndex] = useState<CurrentBoxIndex>()
  const [playerMetric, setPlayerMetric] = useState<PlayerMetric>({score: 0, mistakes: 0})
  const numberInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log("Current player metric",playerMetric);

  const inputNumber = (input: number) => {
    if(currentBoxIndex){
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

        // The player gets +1 point(s) for each score that is correct and -1 points for each score that's wrong
        setPlayerMetric(prev => {
          return currentInputClass === 'correct' ?  {score: prev.score+1, mistakes: prev.mistakes} : {score: prev.score-1, mistakes: prev.mistakes + 1}
        })
        return {id: boxNumber.id, number: input, display: 'block', inputClass: currentInputClass }
      }
      return {id: boxNumber.id, number: boxNumber.number, display: boxNumber.display, inputClass: boxNumber.inputClass }
    })))
  },[remappedNumbers])

  const checkAndSetBoxIndex = ({firstIndex, secondIndex}: CurrentBoxIndex) => {
    if(innerBoxNumbers[firstIndex][secondIndex].inputClass === 'wrong' || innerBoxNumbers[firstIndex][secondIndex].display === 'none'){
      console.log(remappedNumbers[firstIndex][secondIndex].number, "The hidden value of current box index")
      setCurrentBoxIndex({firstIndex,secondIndex})
    }
  }
  return (
    <GameContainer>
      <GameBox>
        {innerBoxNumbers.map((numberRows, i) => (
          <BoxRows key={i} numberRows={numberRows} firstIndex={i} checkAndSetBoxIndex={checkAndSetBoxIndex}  />
        ))}
      </GameBox>
      <MetricSection playerMetric={playerMetric} />
      <NumberOptions numberInputs={numberInputs} inputNumber={inputNumber} />
    </GameContainer>
  );
};
export const GameBox = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 350px;
  max-width: 350px;
  margin: 16px auto;
`;
const GameContainer = styled.section`
  background-color: #fafafa;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: start;
  flex-direction: column;
`;
