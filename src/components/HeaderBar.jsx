import styled from 'styled-components'

const ProductName = () => {
  return (
    <div>
      Mediasoft BI
    </div>
  )
}

const HeaderRightSide = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

const StyledHeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default () => {
  return (
    <StyledHeaderBar>
      <ProductName />
      <HeaderRightSide>
        <span>A</span>
        <span>B</span>
      </HeaderRightSide>
    </StyledHeaderBar>
  )
}