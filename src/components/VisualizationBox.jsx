import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'

import { LineChart, Line } from 'recharts'

import ChartContainer from './ChartContainer'
import InsightContainer from './InsightContainer'
import KeyFigureContainer from './KeyFigureContainer'
import LineChartVis from '../charts/LineChartVis'
import BarChartVis from '../charts/BarChartVis'
import NoInsights from './NoInsights'
import ByProductCategoryPredictionChartContainer from './ByProductCategoryPredictionChartContainer'

const StyledVisualizationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  padding: 30px;
`


export default () => {

  const keyfigures = useStoreState((state) => state.reports.keyfigures || [])
  const barcharts = useStoreState((state) => state.reports.visualizations && state.reports.visualizations.barcharts || [])
  const linecharts = useStoreState((state) => state.reports.visualizations && state.reports.visualizations.linecharts || [])


  console.log(barcharts)

  return (
    <StyledVisualizationBox>

      <ByProductCategoryPredictionChartContainer/>

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

      {
        linecharts.map(linechart =>
          <ChartContainer
            title={linechart.description}
            chart={
              <BarChartVis
                data={linechart.data}
                xAxisKey={linechart.xAxisKey}
                barKey={linechart.dataKey}
              />
            }
            key={linechart.description}
          />)
      }


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