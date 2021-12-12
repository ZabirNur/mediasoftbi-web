import styled from 'styled-components'

import DataLabel from '../components/DataLabel'

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
`

const StyledTableName = styled.li`
  border-bottom: 1px solid whitesmoke;
  display: flex;
  height: 45px;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;

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

export default () => {
  return (
    <StyledDataLoadView>
      <StyledDatabaseInfoContainer>
        <StyledLeftColumn>
          <div>
            <StyledDatabaseName>
              <DataLabel label="ShopLavender"/>
            </StyledDatabaseName>

            <StyledTableList>
              <StyledTableName>
                sales201801
              </StyledTableName>
              <StyledTableName>
                sales201802
              </StyledTableName>
              <StyledTableName>
                sales201803
              </StyledTableName>
              <StyledTableName>
                Ssummary
              </StyledTableName>
            </StyledTableList>
          </div>
        </StyledLeftColumn>

        <StyledRightColumn>
          <div>
            Description
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia culpa qui suscipit possimus provident temporibus eum,
            pariatur non nulla, eos sed quidem,
            dicta impedit excepturi reiciendis aspernatur delectus.
            Doloremque, quibusdam.
          </div>

          <StyledProgressButton>
            Get Insights
          </StyledProgressButton>
        </StyledRightColumn>
      </StyledDatabaseInfoContainer>
      
      <StyledFooter>
        
      </StyledFooter>
    </StyledDataLoadView>
  )
}