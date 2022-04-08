import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Global, theme } from './styles/global'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
