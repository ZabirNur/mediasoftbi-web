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


const StyledInsightsListContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`

const StyledInsightsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  /* list-style-position: inside; */
`

const StyledInsightLine = styled.li`
  margin-top: 15px;
`

export default ({insights}) => {
  return (
    <StyledInsightContainer>
      <StyledInsightsHeader>
        Key Insights
      </StyledInsightsHeader>
      
      <StyledInsightsListContainer>
        <StyledInsightsList>
          {insights.map(insight => <StyledInsightLine>{insight}</StyledInsightLine>)}
          {/* <StyledInsightLine>
            Vegetables outsold meat by Tk. 12,300 in total sales amount
          </StyledInsightLine>
          <StyledInsightLine>
            Peak vegetable sales happened at 6:00 PM while peak meat sales happened at 12:00 PM
          </StyledInsightLine>
          <StyledInsightLine>
            Peak sales of vegetables was higher than peak sales of meat by Tk. 6,100
          </StyledInsightLine> */}
        </StyledInsightsList>
      </StyledInsightsListContainer>
    </StyledInsightContainer>
  )
}