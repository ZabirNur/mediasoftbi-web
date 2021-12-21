import styled from 'styled-components'

const StyledFieldCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  padding-left: 20px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const StyledCheckbox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`

export default ({labelText, checked=false, onChange}) => {
  return (
    <StyledFieldCheckbox>
      <label>{labelText}</label>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </StyledFieldCheckbox>
  )
}