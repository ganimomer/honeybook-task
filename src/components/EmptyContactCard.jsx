import React from 'react'
import './EmptyContactCard.scss'

const EmptyContactCard = () => <div className="empty-contact-card">
    <div className="empty-profile-image"></div>
    <div className="empty-name"></div>
    <div className="empty-description"></div>
</div>

EmptyContactCard.displayName = 'EmptyContactCard'

export default EmptyContactCard