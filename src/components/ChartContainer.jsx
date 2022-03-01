import styled from 'styled-components'

import VisContainerHeader from './VisContainerHeader'

const StyledChartContainer = styled.div`
  width: 400px;
  height: 400px;
  border: ${props => props.prediction ? "3px solid limegreen" : "1px solid silver"};
  border-radius: 5px;
  display: grid;
  grid-template-rows: 2rem auto;
`

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

const ChartContainer = ({title, chart, prediction=false}) => {
  return (
    <StyledChartContainer prediction={prediction}>

      <StyledChartHeader>
        <span>
          {title}
        </span>

        {prediction
          ? <VisContainerHeader title="Prediction"/>
          : <VisContainerHeader title="Report" />
        }
      </StyledChartHeader>

      <StyledChartBody>
        {chart}
      </StyledChartBody>

    </StyledChartContainer>
  )
}

export default ChartContainer