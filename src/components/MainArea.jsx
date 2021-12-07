import styled from 'styled-components'

import FieldSelector from "./FieldSelector"
import VisualizationBox from "./VisualizationBox"

const StyledMainArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`

export default () => {
  return (
    <StyledMainArea>
      <FieldSelector />
      <VisualizationBox />
    </StyledMainArea>
  )
}