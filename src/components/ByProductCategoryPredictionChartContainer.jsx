import styled from 'styled-components'
import FieldCheckbox from './FieldCheckbox'
import LineChartVis from '../charts/LineChartVis'
import { LineChart } from 'recharts'

const StyledPredictionContainer = styled.div`
  width: 800px;
  height: 400px;
  border: 3px solid limegreen;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 2.5rem auto;
  grid-auto-columns: 300px auto;
  grid-template-areas:
    "title title"
    "checklist chart";
`

const StyledTitleContainer = styled.div`
  grid-area: title;
  border-bottom: 1px solid gainsboro;
  display: flex;
  align-items: center;
  padding-left: 20px;
  `

const StyledChecklistContainer = styled.div`
  grid-area: checklist;
  overflow-y: scroll;
  `

const StyledChartContainer = styled.div`
  grid-area: chart;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCategoryChecklist = ({categories}) => {
  return (
    <StyledChecklistContainer>
      {
        categories.map(cat => 
          <FieldCheckbox labelText={cat}/>
        )
      }
    </StyledChecklistContainer>
  )
}

const productCategories = [
  'Accessories',
  'Broccoli',
  'Cranberries',
  'Duck Meat',
  'Eggs',
  'Fresh foods',
  'Green onions',
  'Hot foods',
  'Indian onions',
  'Jackfruit',
  'Kiwi fruit',
  'Leggings'
]

const fakeChartData = [
  {
    "date": 1,
    "total": 100_000_000
  },
  {
    "date": 2,
    "total": 350_000_000
  },
  {
    "date": 3,
    "total": 200_000_000
  },
  {
    "date": 4,
    "total": 180_000_000
  },
  {
    "date": 5,
    "total": 125_000_000
  },
  {
    "date": 6,
    "total": 200_000_000
  },
  {
    "date": 7,
    "total": 80_000_000
  },
  {
    "date": 8,
    "total": 160_000_000
  },
  {
    "date": 9,
    "total": 180_000_000
  },
  {
    "date": 10,
    "total": 125_000_000
  },
  
]

export default () => {
  return (
    <StyledPredictionContainer>
      <StyledTitleContainer>
        Daily Total Sales by Product Category
      </StyledTitleContainer>

      <StyledCategoryChecklist
        categories={productCategories}
      />

      <StyledChartContainer>
        <LineChartVis
          data={fakeChartData}
          xAxisKey="date"
          lineKey="total"
          xLabel="Day of month"
          yLabel="Sales"
        />
      </StyledChartContainer>
    </StyledPredictionContainer>
  )
}