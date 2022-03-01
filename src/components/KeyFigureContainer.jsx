import styled from 'styled-components'

import VisContainerHeader from './VisContainerHeader'

const StyledKeyFigureContainer = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid silver;
  border-radius: 5px;
  position: relative;
  display: grid;
  grid-template-rows: 2rem auto;
`

const StyledChartHeader = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`

const StyledKeyFigureHighlight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const StyledDescription = styled.div``

const StyledKeyFigure = styled.div`
  font-size: 3rem;
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

const KeyFigureContainer = ({description, keyfigure}) => {
  return (
    <StyledKeyFigureContainer>
      
      <StyledChartHeader>
        <VisContainerHeader title="Key Figure"/>
      </StyledChartHeader>

      <KeyFigureDetails
        description={description}
        keyfigure={keyfigure}
      />

    </StyledKeyFigureContainer>
  )
}

export default KeyFigureContainer