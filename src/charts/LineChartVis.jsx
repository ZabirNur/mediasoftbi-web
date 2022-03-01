import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts'


const StyledLineChartVis = styled.div`
`

const strokeColors = [
  "red",
  "green",
  "blue",
  "orange",
  "magenta",
  "aquamarine"
]

const LineChartVis = ({data, xAxisKey, lineKeys=[], xLabel="", yLabel="", children}) => {
  return (
    <StyledLineChartVis>
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
            stroke={strokeColors[lineIndex]}
            // stroke="#8884d8"
            key={lineKey}
            />
        )}

        {children}
      </LineChart>
    </StyledLineChartVis>
  )
}

export default LineChartVis