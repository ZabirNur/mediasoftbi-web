import styled from 'styled-components'

const StyledHeader = styled.span`
  color: silver;
  letter-spacing: 2px;
`

const VisContainerHeader = ({title}) => {
  return (
    <StyledHeader>
      {title}
    </StyledHeader>
  )
}

export default VisContainerHeader