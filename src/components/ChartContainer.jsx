import styled from 'styled-components'

const StyledChartContainer = styled.div`
  width: 400px;
  height: 400px;
  border: ${props => props.prediction ? "3px solid limegreen" : "1px solid silver"};
  border-radius: 5px;
  /* position: relative; */
  display: grid;
  grid-template-rows: 2rem auto;
`

const StyledPredictionHeader = styled.span`
  /* position: absolute;
  right: 5px;
  top: 5px; */
  color: silver;
  letter-spacing: 2px;
`

const PredictionHeader = () => {
  return (
    <StyledPredictionHeader>
      PREDICTION
    </StyledPredictionHeader>
  )
}

const StyledChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`

const StyledChartBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ({children, prediction=false}) => {
  return (
    <StyledChartContainer prediction={prediction}>
      <StyledChartHeader>
        <span>Meat vs Vegetable sales by time of day</span>
        {prediction && <PredictionHeader/>}
      </StyledChartHeader>
      <StyledChartBody>
        {children}
      </StyledChartBody>
    </StyledChartContainer>
  )
}