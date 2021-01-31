import normalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url('https://rsms.me/inter/inter.css');
  body{
    background-color: #17171e !important;
  }
  * {
    color: #e3e4e5;
    box-sizing: border-box;
    margin: 0 auto;
    font-family: 'Inter', -apple-system, system-ui, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  p, a {
    font-size: 20px;
  }
`

export default GlobalStyle
