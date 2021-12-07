import styled from 'styled-components'

import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
import DataLabel from './components/DataLabel'
import MainArea from './components/MainArea'

const StyledApp = styled.div`
  height: 100vh;
`

export default () => {
  return (
    <StyledApp>
      <HeaderBar />
      <NavBar />
      <DataLabel />
      <MainArea />
    </StyledApp>
  )
}