import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'

import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
import DataLoadView from './views/DataLoadView'
import InsightsView from './views/InsightsView'
import PredictionsView from './views/PredictionsView'
import store from './state/store'



const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 50px auto;
  overflow-y: hidden;
`


const App = () => {
  return (
    <StoreProvider store={store}>
      <StyledApp>
        <BrowserRouter>
          <HeaderBar />
          <NavBar />
          <Routes>
            <Route path="dataload" element={<DataLoadView/>} />
            <Route path="insights" element={<InsightsView/>} />
            <Route path="predictions" element={<PredictionsView/>} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </StoreProvider>
  )
}

export default App