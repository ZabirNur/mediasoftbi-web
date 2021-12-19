import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'

import DataLabel from '../components/DataLabel'
import MainArea from '../components/MainArea'

const StyledInsightsView = styled.div`
  display: grid;
  grid-template-rows: 40px auto;
`

export default () => {
  const dbName = useStoreState((state) => state.dbName)
  return (
    <StyledInsightsView>
      <DataLabel/>
      <MainArea/>
    </StyledInsightsView>
  )
}