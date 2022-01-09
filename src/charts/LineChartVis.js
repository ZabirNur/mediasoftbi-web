import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'


const StyledLineChartVis = styled.div`
`

export default ({data, xAxisKey, lineKey}) => {
  return (
    <StyledLineChartVis>
      <LineChart width={380} height={300} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={lineKey} stroke="#8884d8" />
      </LineChart>
    </StyledLineChartVis>
  )
}