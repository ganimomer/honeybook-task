const url = 'https://candidate-test.herokuapp.com/contacts'
import {ACTION_TYPES} from '../common/constants'

export const initData = store => fetch(url)
    .then(res => res.json())
    .then(contacts => store.dispatch({
        type: ACTION_TYPES.ADD_CONTACTS,
        contacts
    }))