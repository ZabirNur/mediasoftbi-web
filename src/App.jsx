import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
      <BrowserRouter>
        <HeaderBar />
        <NavBar />
        <Routes>
          <Route path="dataload" element={<DataLoadView/>} />
          <Route path="insights" element={<InsightsView/>} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  )
}