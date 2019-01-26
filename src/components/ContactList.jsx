import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {contact} from '../types'
import EmptyContactCard from './EmptyContactCard'
import ContactCard from './ContactCard'
import './ContactList.scss'

const ContactList = ({isLoading, contacts}) => <section className="contact-list">
    <div className="contact-list-container">
        {
            isLoading ? <EmptyContactCard key={''}/>:
                contacts.map(contact => <ContactCard {...contact} key={contact.email} className='contact-list-card'/>)
        }
    </div>
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