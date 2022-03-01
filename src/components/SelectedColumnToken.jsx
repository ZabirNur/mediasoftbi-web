import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const StyledToken = styled.span`
  font-size: 0.8rem;
  padding: 2px 5px;
  border: 1px solid grey;
  background-color: ghostwhite;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  align-items: center;
`

const StyledXButton = styled(FontAwesomeIcon)`
 cursor: pointer;
`

const XButton = ({onClick}) => {
  return (
    <StyledXButton
      icon={faTimes}
      onClick={onClick}
    />
  )
}

const SelectedColumnToken = ({columnName, onXPress}) => {
  return (
    <StyledToken>
      <span>{columnName}</span>
      <XButton onClick={onXPress}/>
    </StyledToken>
  )
}

export default SelectedColumnToken