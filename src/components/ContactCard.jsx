import {contact} from '../types'
import React from 'react'
import './ContactCard.scss'

class ContactCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovered: false
        }
    }

    render() {
        return <div className={`contact-card${this.state.isHovered ? ' hovered' : ''}`} onMouseEnter={() => this.setState({isHovered: true})} onMouseLeave={() => this.setState({isHovered: false})}>
            <div className="contact-images">
                <img src={this.props.profile_image} alt={this.props.name} className="profile-image"/>
                <img src={this.props.icon} alt={this.props.company_name} className="icon"/>
            </div>
            <span className="contact-name">{this.props.name}</span>
            <span className="contact-description">{this.props.job} | @{this.props.company_name}</span>
            {
                this.state.isHovered ?  [
                    this.props.phone ? <span className="phone-number" key="phone-number">Phone Number {this.props.phone}</span> : null,
                    <span className="email" key="email">{this.props.email}</span>
                ].filter(x => x): []
            }
        </div>
    }
}

ContactCard.propTypes = contact

export default ContactCard