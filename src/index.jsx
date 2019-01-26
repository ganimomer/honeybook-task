import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import {initData} from './init'
import App from './components/App.jsx'
import './main.scss'

const store = createStore(rootReducer)

initData(store)

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))