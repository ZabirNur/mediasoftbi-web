import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const StyledDataLabel = styled.div`
  /* height: 40px; */
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  padding-left: 20px;
  border-bottom: ${props => props.border ? "1px solid silver" : "0"};
  /* border-bottom: 1px solid silver; */
`

export default ({label, border=false}) => {
  return (
    <StyledDataLabel border={border}>
      <FontAwesomeIcon icon={faDatabase}/>
      <span>{label}</span>
    </StyledDataLabel>
  )
}