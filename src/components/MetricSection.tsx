import { faStar, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { PlayerMetric } from './types'

interface MetricSectionProperties{
    playerMetric: PlayerMetric;
}

export const MetricSection = ({playerMetric}:MetricSectionProperties) => {
    return (
        <MetricContainer>
            <Metric>
                <FontAwesomeIcon icon={faStar} size='2x' style={{color: 'rgba(120,176,239,.8)'}} />
                <ScoreText>Score</ScoreText>
                <Score>{playerMetric.score}</Score>
            </Metric>
            <Metric>
                <FontAwesomeIcon icon={faXmark} size='2x' style={{color: 'rgba(234,30,99,.8)'}} />
                <ScoreText>Mistakes</ScoreText>
                <Score>{playerMetric.mistakes}</Score>
            </Metric>
        </MetricContainer>
    )
}

const MetricContainer = styled.div`
  margin-bottom: 16px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  border: none;
  `
const Metric = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin: 0px 8px;
`
const ScoreText = styled.span``
const Score = styled.span``
