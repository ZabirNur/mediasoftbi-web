import styled from 'styled-components'
import { LineChart, Line } from 'recharts'

import ChartContainer from './ChartContainer'
import InsightContainer from './InsightContainer'
import KeyFigureContainer from './KeyFigureContainer'
import LineChartVis from '../charts/LineChartVis'
import BarChartVis from '../charts/BarChartVis'

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

const insights = [
  "Vegetables outsold meat by Tk. 12,300 in total sales amount",
  "Peak vegetable sales happened at 6:00 PM while peak meat sales happened at 12:00 PM",
  "Peak sales of vegetables was higher than peak sales of meat by Tk. 6,100"
]

export default () => {
  return (
    <StyledVisualizationBox>

      <ChartContainer
        title="Meat vs Vegetables sales by time of day"
        chart={<LineChartVis/>}
      />

      <InsightContainer
        insights={insights}
      />

      <KeyFigureContainer
        description="Weekend sales as % of total sales"
        keyfigure="75%"
      />
      <ChartContainer
        prediction
        title="Sales by Product Category"
        chart={<BarChartVis/>}
      />

    </StyledVisualizationBox>
  )
}