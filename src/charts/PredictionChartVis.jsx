import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts'


const StyledPredictionChartVis = styled.div`
`

// const strokeDashes = [
//   "2 1",    // Dashes line for predictions
//   "1",     // Solid line for past data
// ]

const PredictionChartVis = ({data, xAxisKey, lineKeys=[], xLabel="", yLabel="", children}) => {

  // Dataset should be split into 2
  // Past data, upto yesterday
  // Future predictions, starting today


  return (
    <StyledPredictionChartVis>
      <LineChart width={380} height={300} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey}>
          <Label value={xLabel} position="insideBottomRight"/>
        </XAxis>
        <YAxis>
          <Label value={yLabel} position="insideTopLeft"/>
        </YAxis>
        <Tooltip />
        <Legend />
        {lineKeys.map((lineKey, lineIndex) => 
          <Line
            type="monotone"
            dataKey={lineKey}
            stroke="#8884d8"
            strokeDasharray="3 2"
            key={lineKey}
            />
        )}

        {children}
      </LineChart>
    </StyledPredictionChartVis>
  )
}

export default PredictionChartVis