import normalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0 auto;
    font-family: -apple-system, system-ui, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
`

export default GlobalStyle
