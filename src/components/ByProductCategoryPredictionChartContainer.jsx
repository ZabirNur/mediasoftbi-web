import { useState, useEffect } from 'react'
import { useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import FieldCheckbox from './FieldCheckbox'
import LineChartVis from '../charts/LineChartVis'

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
          <FieldCheckbox
            labelText={cat}
            checked={true}
            onChange={() => {}}
          />
        )
      }
    </StyledChecklistContainer>
  )
}


const formatChartData = (chartData) => {
  const formatted = []

  for (let i=0; i<31; ++i) {
    let formatted_row = {}

    for (let category_data of chartData) {
      formatted_row[category_data.category] = category_data.amounts[i] || 0
    }

    formatted.push(formatted_row)
  }

  return formatted
}

export default () => {
  const [productCategories, setProductCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const tableName = useStoreState((state) => state.selectedTableName)
  const serverAddress = useStoreState((state) => state.serverAddress)
  const [chartData, setChartData] = useState([])

  const setPredictionCharts = (chartData) => {
    setChartData(formatChartData(chartData))
  }

  useEffect(() => {
    fetch(`${serverAddress}/getProductCategories`)
      .then(response => response.json())
      .then(data => setProductCategories(data))
  }, 
  [])

  useEffect(() => {
    fetch(`${serverAddress}/selectProductCategoriesForPrediction`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              "tableName": tableName,
              "categories": selectedCategories
            })
          })
          .then(response => response.json())
          .then(data => setPredictionCharts(data))
          .catch(err => console.log(err))
  },
  [selectedCategories])

  const addCategory = (categoryName) => {
    if (!selectedCategories.includes(categoryName)) {
      setSelectedCategories([...selectedCategories, categoryName])
    }
  }
  const removeCategory = (categoryName) => {
    setSelectedCategories(selectedCategories.filter(element => element != categoryName))
  }
  const toggleCategorySelection = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      removeCategory(categoryName)
    }
    else {
      addCategory(categoryName)
    }
  }

  return (
    <StyledPredictionContainer>
      <StyledTitleContainer>
        Daily Total Sales by Product Category
      </StyledTitleContainer>

      <StyledChecklistContainer>
      {
        productCategories.map(category => 
          <FieldCheckbox
            key={category}
            labelText={category}
            checked={selectedCategories.includes(category)}
            onChange={() => {toggleCategorySelection(category)}}
          />
        )
      }
    </StyledChecklistContainer>

      <StyledChartContainer>
        <LineChartVis
          data={chartData}
          xAxisKey="date"
          lineKeys={selectedCategories}
          xLabel="Day of month"
          yLabel="Sales"
        />
      </StyledChartContainer>
    </StyledPredictionContainer>
  )
}