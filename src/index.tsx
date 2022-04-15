import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Global, theme } from './styles/global'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <ThemeProvider theme={theme}>
    <Global />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
)
