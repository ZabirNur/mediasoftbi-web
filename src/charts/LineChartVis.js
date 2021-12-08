import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'


const data = [
  {
    name: "12 PM",
    Cash: 4000,
    Card: 2500
  },
  {
    name: "3 PM",
    Cash: 3000,
    Card: 2000
  },
  {
    name: "6 PM",
    Cash: 2200,
    Card: 10000
  },
  {
    name: "9 PM",
    Cash: 2600,
    Card: 4000
  },
]

const StyledLineChartVis = styled.div`
`

export default () => {
  return (
    <StyledLineChartVis>
      <LineChart width={380} height={340} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Card" stroke="#8884d8" />
        <Line type="monotone" dataKey="Cash" stroke="#82ca9d" />
      </LineChart>
    </StyledLineChartVis>
  )
}