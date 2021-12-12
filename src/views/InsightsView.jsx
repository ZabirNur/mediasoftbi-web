import styled from 'styled-components'

import DataLabel from '../components/DataLabel'
import MainArea from '../components/MainArea'

const StyledInsightsView = styled.div`
  display: grid;
  grid-template-rows: 40px auto;
`

export default () => {
  return (
    <StyledInsightsView>
      <DataLabel label="ShopLavender" border={true}/>
      <MainArea/>
    </StyledInsightsView>
  )
}