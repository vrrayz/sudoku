import React from "react";
import styled from "styled-components";

import { CurrentBoxIndex, RemappedNumbers } from "./types";

interface BoxRowsProperties {
  numberRows: RemappedNumbers[];
  firstIndex: number;
  checkAndSetBoxIndex: ({ firstIndex, secondIndex }: CurrentBoxIndex) => void;
}

export const BoxRows = ({
  numberRows,
  firstIndex,
  checkAndSetBoxIndex,
}: BoxRowsProperties) => {
  return (
    <BoxRow key={firstIndex}>
      {numberRows.map((item, index) => (
        <InnerBox
          key={index}
          onClick={() =>
            checkAndSetBoxIndex({ firstIndex, secondIndex: index })
          }
          className={item.inputClass}
        >
          <InnerBoxNumber style={{ display: item.display }}>
            {item.number}
          </InnerBoxNumber>
        </InnerBox>
      ))}
    </BoxRow>
  );
};
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
  &:focus {
    background: radial-gradient(#fff, #aaa);
  }
  &.wrong {
    color: red;
    // background: radial-gradient(#F0F8FF, #fd5c63);
  }
  &.correct {
    color: blue;
    background: radial-gradient(rgb(152 213 255), rgb(240, 248, 255));
  }
  &.correct,
  &.wrong {
    font-weight: 500;
  }
`;
const InnerBoxNumber = styled.span`
  margin: auto;
`;
