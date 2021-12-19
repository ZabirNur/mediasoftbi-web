import { useState, useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import styled from 'styled-components'

import FieldCheckbox from './FieldCheckbox'

const StyledFieldSelector = styled.div`
  border-right: 1px solid silver;
  overflow-y: scroll;
  height: 100%;
`

const StyledFieldLabel = styled.div`
  background-color: whitesmoke;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid silver;
`

const FieldLabel = () => {
  return (
    <StyledFieldLabel>
      Fields
    </StyledFieldLabel>
  )
}

const StyledFieldCheckboxes = styled.div`
  /*  */
`

export default () => {
  const serverAddress = useStoreState((state) => state.serverAddress)
  const selectedTable = useStoreState((state) => state.selectedTableName)
  const tableColumns = useStoreState((state) => state.tableColumns)
  const setTableColumns = useStoreActions((actions) => actions.setTableColumns)

  const [selectedColumns, setSelectedColumns] = useState([])

  const toggleColumnSelection = columnName => {
    console.log(columnName)
    if (selectedColumns.includes(columnName))
      setSelectedColumns(selectedColumns.filter(listColumn => listColumn != columnName))
    else
      setSelectedColumns([...selectedColumns, columnName])
  }

  useEffect(() => {
    fetch(`${serverAddress}/getTableColumnNames?tableName=${selectedTable}`)
            .then(response => response.json())
            .then(data => {
              setTableColumns(data)
            })
            .catch(err => {
              console.log("COULD NOT LOAD TABLE COLUMNS")
            })
  }, [])

  return (
    <StyledFieldSelector>
      <FieldLabel/>
      <StyledFieldCheckboxes>
        {tableColumns.map(column => 
          <FieldCheckbox
            key={column.name}
            labelText={column.name}
            checked={selectedColumns.includes(column.name)}
            onChange={() => toggleColumnSelection(column.name)}
          />
        )}
      </StyledFieldCheckboxes>
    </StyledFieldSelector>
  )
}