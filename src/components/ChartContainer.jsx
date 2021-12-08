import styled from 'styled-components'

const StyledChartContainer = styled.div`
  width: 400px;
  height: 400px;
  border: ${props => props.prediction ? "3px solid limegreen" : "1px solid silver"};
  border-radius: 5px;
`

const StyledPredictionHeader = styled.div`
  display: flex;
  justify-content: right;
  color: silver;
  letter-spacing: 2px;
  padding-right: 5px;
`

const PredictionHeader = () => {
  return (
    <StyledPredictionHeader>
      PREDICTION
    </StyledPredictionHeader>
  )
}

export default ({prediction=false}) => {
  return (
    <StyledChartContainer prediction={prediction}>
      {prediction && <PredictionHeader/>}
    </StyledChartContainer>
  )
}