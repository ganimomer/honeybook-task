import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {contact} from '../types'
import EmptyContactCard from './EmptyContactCard'
import ContactCard from './ContactCard'

const ContactList = ({isLoading, contacts}) => <section>
    {
        isLoading ? <EmptyContactCard key={''}/>:
            contacts.map(contact => <ContactCard {...contact} key={contact.email}/>)
    }
</section>

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(contact)).isRequired,
    isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = ({contacts, filteredContacts}) => ({
    isLoading: contacts.length === 0,
    contacts: filteredContacts
})

export default connect(mapStateToProps)(ContactList)