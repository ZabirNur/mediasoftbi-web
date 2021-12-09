import styled from 'styled-components'

import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
import DataLabel from './components/DataLabel'
import MainArea from './components/MainArea'
import DataLoadView from './views/DataLoadView'
import InsightsView from './views/InsightsView'

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 50px auto;
`

export default () => {
  return (
    <StyledApp>
      <HeaderBar />
      <NavBar />
      <InsightsView/>
    </StyledApp>
  )
}