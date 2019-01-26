import React from 'react'
import {connect} from 'react-redux'
import ContactCard from './ContactCard'
const ContactList = ({isLoading, contacts}) => <section>
    {
        isLoading ? <ContactCard key={''}/>:
        contacts.map(contact => <ContactCard {...contact} key={contact.email}/>)
    }
</section>

const mapStateToProps = ({contacts, filteredContacts}) => ({
    isLoading: contacts.length === 0,
    contacts: filteredContacts
})

export default connect(mapStateToProps)(ContactList)