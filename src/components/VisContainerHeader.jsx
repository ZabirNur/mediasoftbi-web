import styled from 'styled-components'

const StyledHeader = styled.span`
  color: silver;
  letter-spacing: 2px;
`

export default ({title}) => {
  return (
    <StyledHeader>
      {title}
    </StyledHeader>
  )
}