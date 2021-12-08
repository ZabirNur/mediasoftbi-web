import styled from 'styled-components'

const StyledInsightContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid silver;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 2rem auto;
`

const StyledInsightsHeader = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`


const StyledInsightsList = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`

export default () => {
  return (
    <StyledInsightContainer>
      <StyledInsightsHeader>
        Key Insights
      </StyledInsightsHeader>
      
      <StyledInsightsList>
        <ul>
          <li>Insight 1</li>
          <li>Insight 2</li>
          <li>Insight 3</li>
        </ul>
      </StyledInsightsList>
    </StyledInsightContainer>
  )
}