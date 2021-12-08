import styled from 'styled-components'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'


const data = [
  {
    name: "Chicken",
    amount: 20000
  },
  {
    name: "Cauliflower",
    amount: 14000
  },
  {
    name: "Potato",
    amount: 8500
  },
  {
    name: "Broccoli",
    amount: 7000
  },
]

const StyledBarChartVis = styled.div`
`

export default () => {
  return (
    <StyledBarChartVis>
      <BarChart width={380} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </StyledBarChartVis>
  )
}