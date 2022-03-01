import styled from 'styled-components'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'


const StyledBarChartVis = styled.div`
`

const BarChartVis = ({data, xAxisKey, barKey}) => {
  return (
    <StyledBarChartVis>
      <BarChart width={380} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={barKey} fill="#8884d8" />
      </BarChart>
    </StyledBarChartVis>
  )
}

export default BarChartVis