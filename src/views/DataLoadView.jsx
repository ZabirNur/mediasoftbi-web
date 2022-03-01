import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useStoreState, useStoreActions } from 'easy-peasy'
// import DataLabel from '../components/DataLabel'
import { useNavigate } from 'react-router-dom'

const StyledDataLoadView = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
`

const StyledDatabaseInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  /* align-items: center; */
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 10px;
`

const StyledLeftColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-right: 20px;
`

const StyledDatabaseName = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`

const StyledTableList = styled.ul`
  border: 1px solid silver;
  border-radius: 5px;
  height: 300px;
  width: 250px;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
`

const StyledTableName = styled.li`
  border-bottom: 1px solid whitesmoke;
  display: flex;
  height: 45px;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  color: ${props => props.isSelected ? "limegreen" : "inherit" };

  :hover { 
    background-color: gainsboro;
  }
`

const StyledProgressButton = styled.button`
  width: 100%;
  background-color: limegreen;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`

const TableNameRow = ({tableName, toggleTableSelection, isSelected}) => {
  return (
    <StyledTableName
      onClick={() => toggleTableSelection(tableName)}
      isSelected={isSelected}
    >
      {tableName}
    </StyledTableName>
  )
}


const DataLoadView = () => {
  const serverAddress = useStoreState((state) => state.serverAddress)

  const dbName = useStoreState((state) => state.dbName)
  const setDbName = useStoreActions((actions) => actions.setDbName)

  const [tableNames, setTableNames] = useState([])

  const selectedTable = useStoreState((state) => state.selectedTableName)
  const setSelectedTable = useStoreActions((actions) => actions.setSelectedTableName)

  const navigate = useNavigate()

  const toggleTableSelection = (tableName) => {
    if (selectedTable === tableName) {
      setSelectedTable("")
    }
    else {
      setSelectedTable(tableName)
    }
  }

  useEffect(() => {
    fetch(`${serverAddress}/getDBSummary`)
            .then(response => response.json())
            .then(data => {
              setDbName(data.dbName)
              setTableNames(data.tables)
            })
            .catch(err => {
              setDbName("Server error")
            })
  }, [serverAddress, setDbName])

  return (
    <StyledDataLoadView>
      <StyledDatabaseInfoContainer>
        <StyledLeftColumn>
          <div>
            <StyledDatabaseName>
              <span>
                {dbName}
              </span>
            </StyledDatabaseName>

            <StyledTableList>
              {tableNames.map(tableName => 
                <TableNameRow
                  key={tableName.name}
                  tableName={tableName.name}
                  toggleTableSelection={toggleTableSelection}
                  isSelected={tableName.name !== "" && tableName.name === selectedTable}
                />
              )}
            </StyledTableList>
          </div>
        </StyledLeftColumn>
        
        {
          selectedTable &&
        
        <StyledRightColumn>
          <div>
            {selectedTable}
          </div>
          <StyledProgressButton onClick={() => navigate("/insights")}>
            Get Insights
          </StyledProgressButton>
        </StyledRightColumn>
        }
      </StyledDatabaseInfoContainer>
      
      <StyledFooter>
        
      </StyledFooter>
    </StyledDataLoadView>
  )
}

export default DataLoadView