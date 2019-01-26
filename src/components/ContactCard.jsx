import {contact} from '../types'
import React from 'react'

class ContactCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovered: false
        }
    }

    render() {
        return <div onMouseEnter={() => this.setState({isHovered: true})} onMouseLeave={() => this.setState({isHovered: false})}>
            <img src={this.props.profile_image} alt={this.props.name} className="profile-image"/>
            <img src={this.props.icon} alt={this.props.company_name} className="icon"/>
            <span className="contact-name">{this.props.name}</span>
            <span className="contact-description">{this.props.job} | @{this.props.company_name}</span>
            {
                this.state.isHovered ?  [
                    <span className="phone-number" key="phone-number">Phone Number{this.props.phone}</span>,
                    <span className="email" key="email">{this.props.email}</span>
                ]: []
            }
        </div>
    }
}

ContactCard.propTypes = contact

export default ContactCard