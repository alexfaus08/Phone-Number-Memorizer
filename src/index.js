import { render } from 'react-dom'
import App from './App'
import React from 'react'
import store from './app/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root')
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
)
