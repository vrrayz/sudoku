import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

export const MetricSection = () => {
    return (
        <MetricContainer>
            <Metric>
                <FontAwesomeIcon icon={faStar} size='2x' />
                <ScoreText>Score: <Score>0</Score></ScoreText>
            </Metric>
        </MetricContainer>
    )
}

const MetricContainer = styled.div`
  margin: 8px;
  display: flex;
  justify-content: center;
  border: none;
  `
const Metric = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`
const ScoreText = styled.span``
const Score = styled.span``
