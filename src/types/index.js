import PropTypes from 'prop-types'

export const contact = {
    name: PropTypes.string.isRequired,
    profile_image: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}