import styled from 'styled-components'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faTable } from '@fortawesome/free-solid-svg-icons'

import SelectedColumnToken from './SelectedColumnToken'

const StyledDataLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  padding-left: 20px;
  border-bottom: 1px solid silver;
`

const StyledLabelWithIcon = styled.span`
  display: flex;
  gap: 5px;
  align-items: center;
`

const LabelWithIcon = ({label, icon}) => {
  return (
    <StyledLabelWithIcon>
      <FontAwesomeIcon icon={icon}/>
      <span>{label}</span>
    </StyledLabelWithIcon>
  )
}

export default () => {
  const dbName = useStoreState((state) => state.dbName)
  const selectedTableName = useStoreState((state) => state.selectedTableName)
  const selectedTableColumns = useStoreState((state) => state.selectedTableColumns)
  const removeTableColumnFromSelection = useStoreActions((actions) => actions.removeTableColumnFromSelection)

  return (
    <StyledDataLabel>
      <LabelWithIcon
        label={dbName}
        icon={faDatabase}
      />
      <LabelWithIcon
        label={selectedTableName}
        icon={faTable}
      />
      
      {
        selectedTableColumns.map(columnName =>
          <SelectedColumnToken columnName={columnName} onXPress={() => removeTableColumnFromSelection(columnName)} />)
      }

    </StyledDataLabel>
  )
}