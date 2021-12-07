import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const StyledProductName = styled.div`
  font-size: 2rem;
  user-select: none;
`

const ProductName = () => {
  return (
    <StyledProductName>
      Mediasoft BI
    </StyledProductName>
  )
}



const StyledHeaderRightSide = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 30px;
`

const StyledProfileButton = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: paleturquoise;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`

const ProfileButton = () => {
  return (
    <StyledProfileButton>
      GD
    </StyledProfileButton>
  )
}

const StyledHeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid silver;
`

export default () => {
  return (
    <StyledHeaderBar>
      <ProductName />
      <StyledHeaderRightSide>
        <ProfileButton/>
        <StyledActionButtonContainer>
          <FontAwesomeIcon icon={faEllipsisV} />
        </StyledActionButtonContainer>
      </StyledHeaderRightSide>
    </StyledHeaderBar>
  )
}