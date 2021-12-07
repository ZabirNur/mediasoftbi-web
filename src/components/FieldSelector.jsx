import styled from 'styled-components'

import FieldCheckbox from './FieldCheckbox'

const StyledFieldSelector = styled.div`
  border-right: 1px solid silver;
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
  return (
    <StyledFieldSelector>
      <FieldLabel/>
      <StyledFieldCheckboxes>
        <FieldCheckbox labelText="SaleDT"/>
        <FieldCheckbox labelText="TotalAmt"/>
        <FieldCheckbox labelText="Product Category"/>
      </StyledFieldCheckboxes>
    </StyledFieldSelector>
  )
}