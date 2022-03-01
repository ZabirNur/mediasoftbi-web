import styled from 'styled-components'
import { Link } from 'react-router-dom'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

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

const StyledNavTabLinkContainer = styled.div`
  width: 100px;
  height: 100%;
  border-left: 1px solid silver;
  border-right: 1px solid silver;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledNavTabLinkContainer>
        <NavTabHeader to="dataload">
          Load Data
        </NavTabHeader>
      </StyledNavTabLinkContainer>

      {/* <FontAwesomeIcon icon={faChevronRight} /> */}
      <StyledNavTabLinkContainer>
        <NavTabHeader to="insights">
          Insights
        </NavTabHeader>
      </StyledNavTabLinkContainer>
      
      <StyledNavTabLinkContainer>
        <NavTabHeader to="predictions">
          Predictions
        </NavTabHeader>
      </StyledNavTabLinkContainer>
    </StyledNavBar>
  )
}

export default NavBar