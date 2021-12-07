import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const StyledNavBar = styled.div`
  background-color: whitesmoke;
  height: 40px;
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1px solid silver;
`

const NavTabHeader = styled.nav`
  cursor: pointer;
  user-select: none;
`


export default () => {
  return (
    <StyledNavBar>
      <NavTabHeader>Load Data</NavTabHeader>
      <FontAwesomeIcon icon={faChevronRight} />
      <NavTabHeader>Insights</NavTabHeader>
    </StyledNavBar>
  )
}