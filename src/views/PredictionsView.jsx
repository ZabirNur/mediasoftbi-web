import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'

import FieldCheckbox from '../components/FieldCheckbox'
import ByProductCategoryPredictionChartContainer from '../components/ByProductCategoryPredictionChartContainer'

const StyledPredictionView = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  height: 80vh;
`

const StyledChecklistContainer = styled.div`
  /* grid-area: checklist; */
  overflow-y: scroll;
  `

const PredictionsView = () => {
  const [productCategories, setProductCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const serverAddress = useStoreState((state) => state.serverAddress)

  useEffect(() => {
    fetch(`${serverAddress}/getProductCategories`)
      .then(response => response.json())
      .then(data => {
        data.sort()
        setProductCategories(data)
      })
  }, 
  [serverAddress])

  const addCategory = (categoryName) => {
    if (!selectedCategories.includes(categoryName)) {
      setSelectedCategories([...selectedCategories, categoryName])
    }
  }

  const removeCategory = (categoryName) => {
    setSelectedCategories(selectedCategories.filter(element => element !== categoryName))
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
    <StyledPredictionView>
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

      <ByProductCategoryPredictionChartContainer/>
      
      {/* 
      
      <Category Selector>
      <ChartContainer>
        map => <Charts>
      </>
      
      */}
    </StyledPredictionView>

  )
}

export default PredictionsView