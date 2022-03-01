import { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import styled from 'styled-components'

import FieldCheckbox from './FieldCheckbox'

const StyledFieldSelector = styled.div`
  border-right: 1px solid silver;
  height: 500px;
  overflow-y: scroll;
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

const FieldSelector = () => {
  const serverAddress = useStoreState((state) => state.serverAddress)
  const selectedTable = useStoreState((state) => state.selectedTableName)
  const tableColumns = useStoreState((state) => state.tableColumns)
  const setTableColumns = useStoreActions((actions) => actions.setTableColumns)
  const setReports = useStoreActions((actions) => actions.setReports)
  const selectedColumns = useStoreState((state) => state.selectedTableColumns)
  const addColumnToSelection = useStoreActions((actions) => actions.addTableColumnToSelection)
  const removeColumnFromSelection = useStoreActions((actions) => actions.removeTableColumnFromSelection)



  const toggleColumnSelection = columnName => {
    if (selectedColumns.includes(columnName))
      removeColumnFromSelection(columnName)
    else
      addColumnToSelection(columnName)
  }


  useEffect(() => {
    fetch(`${serverAddress}/getTableColumnNames?tableName=${selectedTable}`)
            .then(response => {
              return response.json()
            })
            .then(data => {
              setTableColumns(data)
            })
            .catch(error => {
              console.log("COULD NOT LOAD TABLE COLUMNS" + error)
            })
  }, [serverAddress, selectedTable, setTableColumns])


  useEffect(() => {
    fetch(`${serverAddress}/setActiveColumns`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "tableName": selectedTable,
        "columnNames": selectedColumns
      })
    })
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(err => console.log(err))
  }, [selectedColumns, serverAddress, selectedTable, setReports])



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

export default FieldSelector