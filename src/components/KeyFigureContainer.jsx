import styled from 'styled-components'

const StyledKeyFigureContainer = styled.div`
  width: 400px;
  height: 400px;
  border: ${props => props.prediction ? "3px solid limegreen" : "1px solid silver"};
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledPredictionHeader = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
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

const StyledKeyFigureHighlight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const StyledDescription = styled.div``

const StyledKeyFigure = styled.div`
  font-size: 4rem;
`

const KeyFigureDetails = ({description, keyfigure}) => {
  return (
    <StyledKeyFigureHighlight>
      <StyledDescription>
        {description}
      </StyledDescription>
      <StyledKeyFigure>
        {keyfigure}
      </StyledKeyFigure>
    </StyledKeyFigureHighlight>
  )
}

export default ({description, keyfigure, prediction=false}) => {
  return (
    <StyledKeyFigureContainer prediction={prediction}>
      {prediction && <PredictionHeader/>}
      <KeyFigureDetails
        description={description}
        keyfigure={keyfigure}
      />
    </StyledKeyFigureContainer>
  )
}