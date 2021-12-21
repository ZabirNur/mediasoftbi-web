import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'

import { LineChart, Line } from 'recharts'

import ChartContainer from './ChartContainer'
import InsightContainer from './InsightContainer'
import KeyFigureContainer from './KeyFigureContainer'
import LineChartVis from '../charts/LineChartVis'
import BarChartVis from '../charts/BarChartVis'
import NoInsights from './NoInsights'

const StyledVisualizationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
`


export default () => {

  const keyfigures = useStoreState((state) => state.reports.keyfigures || [])
  const barcharts = useStoreState((state) => state.reports.visualizations && state.reports.visualizations.barcharts || [])

  console.log(barcharts)

  return (
    <StyledVisualizationBox>
      {
        keyfigures.map(keyfigure => 
          <KeyFigureContainer
            description={keyfigure.description}
            keyfigure={keyfigure.total}
            key={keyfigure.description}
          />)
      }

      {
        barcharts.map(barchart =>
          <ChartContainer
            title={barchart.description}
            chart={
              <BarChartVis
                data={barchart.data}
                xAxisKey={barchart.xAxisKey}
                barKey={barchart.dataKey}
              />
            }
            key={barchart.description}
          />)
      }

      {/* <ChartContainer
        title="Sales by product category"
        chart={
          <BarChartVis
            data={dummydata_Bar}
            xAxisKey="name"
            barKey="amount"
          />
        }
      /> */}

      {/* <ChartContainer
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
      /> */}

    </StyledVisualizationBox>
  )
}