import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import {fetchData} from './init'
import App from './components/App.jsx'

const store = createStore(rootReducer)

fetchData()
    .then(contacts => store.dispatch({
        type: 'ADD_CONTACTS',
        contacts
    }))

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))