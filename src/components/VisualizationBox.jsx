import styled from 'styled-components'
import { LineChart, Line } from 'recharts'

import ChartContainer from './ChartContainer'
import InsightContainer from './InsightContainer'

const StyledVisualizationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
`




const data = [
  {
    name: "A",
    revenue: 1000,
    expense: 850
  },
  {
    name: "B",
    revenue: 1400,
    expense: 660
  },
  {
    name: "C",
    revenue: 800,
    expense: 1150
  },
  {
    name: "D",
    revenue: 1200,
    expense: 1950
  },
  {
    name: "E",
    revenue: 650,
    expense: 150
  },
]


export default () => {
  return (
    <StyledVisualizationBox>
      {/* <LineChart width={200} height={200} data={data}>
        <Line type="monotone" dataKey="revenue" stroke="green"/>
        <Line type="monotone" dataKey="expense" stroke="red"/>
      </LineChart> */}

      <ChartContainer/>
      <InsightContainer/>
      <ChartContainer prediction/>
      <ChartContainer/>
      <InsightContainer/>
      <ChartContainer/>
    </StyledVisualizationBox>
  )
}