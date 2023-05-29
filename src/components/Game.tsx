import React from "react";
import styled from "styled-components";

export const Game = () => {
  return (
    <GameContainer>
      <GameBox>
        <BoxRow>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
        </BoxRow>
        <BoxRow>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
        </BoxRow>
        <BoxRow>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
        </BoxRow>
        <BoxRow>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
        </BoxRow>
        <BoxRow>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
        </BoxRow>
        <BoxRow>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
        </BoxRow>
        <BoxRow>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
        </BoxRow>
        <BoxRow>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
        </BoxRow>
        <BoxRow>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
          <InnerBox></InnerBox>
        </BoxRow>
      </GameBox>
    </GameContainer>
  );
};
const GameContainer = styled.section`
  background-color: #fafafa;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const GameBox = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 350px;
  max-width: 350px;
  margin: auto;
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
  &:nth-child(3n + 0) {
    border-right: solid;
  }
`;
