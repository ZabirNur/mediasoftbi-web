import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'

import DataLabel from '../components/DataLabel'
import MainArea from '../components/MainArea'

const StyledInsightsView = styled.div`
  display: grid;
  grid-template-rows: 40px auto;
  overflow-y: hidden;
`

const InsightsView = () => {
  // const dbName = useStoreState(state => state.dbName)
  const tableName = useStoreState(state => state.selectedTableName)
  
  return (
    <StyledInsightsView>
      {
        tableName === "" 
        ?
          <p>
            Select tables from "Load Data" tab
          </p>
        :
          <>
            <DataLabel/>
            <MainArea/>
          </>
      }
    </StyledInsightsView>
  )
}

export default InsightsView