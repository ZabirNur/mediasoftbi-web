import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'


const data = [
  {
    name: "12 PM",
    Meat: 4000,
    Veg: 2500
  },
  {
    name: "3 PM",
    Meat: 3000,
    Veg: 2000
  },
  {
    name: "6 PM",
    Meat: 2200,
    Veg: 10000
  },
  {
    name: "9 PM",
    Meat: 2600,
    Veg: 4000
  },
]

const StyledLineChartVis = styled.div`
`

export default () => {
  return (
    <StyledLineChartVis>
      <LineChart width={380} height={300} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Veg" stroke="#8884d8" />
        <Line type="monotone" dataKey="Meat" stroke="#82ca9d" />
      </LineChart>
    </StyledLineChartVis>
  )
}