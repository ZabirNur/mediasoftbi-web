import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const StyledNavBar = styled.nav`
  background-color: whitesmoke;
  /* height: 50px; */
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid silver;
`

const NavTabHeader = styled(Link)`
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: inherit;
`


export default () => {
  return (
    <StyledNavBar>
      <NavTabHeader to="dataload">
        Load Data
      </NavTabHeader>

      <FontAwesomeIcon icon={faChevronRight} />

      <NavTabHeader to="insights">
        Insights
      </NavTabHeader>
    </StyledNavBar>
  )
}