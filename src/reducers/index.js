
const searchAttributes = ['name', 'job', 'company_name', 'email']
function filterContactsByQuery(contacts, query = '') {
    return contacts.filter(contact => searchAttributes.some(attr => contact[attr] && contact[attr].toLowerCase().includes(query.toLowerCase())))
}

export default (state = {contacts: [], filteredContacts: [], query: ''}, action) => {
    switch (action.type) {
    case 'ADD_CONTACTS':
        return {...state, contacts: action.contacts, filteredContacts: filterContactsByQuery(action.contacts, state.query)}
    case 'CHANGE_QUERY':
        return {...state, filteredContacts: filterContactsByQuery(state.contacts, action.query), query: action.query}
    default:
        return state
    }
}