import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
const Search = ({query, onChange}) => <input
    type="text"
    className="search"
    placeholder="Search..."
    value={query}
    onChange={onChange}/>

Search.propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

const mapStateToProps = ({query}) => ({query})
const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch({
        type: 'CHANGE_QUERY',
        query: e.target.value
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)