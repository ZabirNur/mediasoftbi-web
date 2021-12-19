import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faTable } from '@fortawesome/free-solid-svg-icons'

const StyledDataLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  padding-left: 20px;
  border-bottom: 1px solid silver;
`

export default () => {
  const dbName = useStoreState((state) => state.dbName)
  const selectedTableName = useStoreState((state) => state.selectedTableName)


  return (
    <StyledDataLabel>
      <span>
        <FontAwesomeIcon icon={faDatabase}/>
        <span>{dbName}</span>
      </span>
      <span>
        <FontAwesomeIcon icon={faTable}/>
        <span>{selectedTableName}</span>
      </span>
    </StyledDataLabel>
  )
}