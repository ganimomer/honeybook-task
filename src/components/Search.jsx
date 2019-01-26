import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './Search.scss'

const Search = ({query, onChange, className = ''}) => <div className={`search-wrapper ${className}`}>
    <input
        className="search"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={onChange}/>
    <img src='/assets/icon-search.png' className="search-icon"/>
</div>

Search.propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
}

const mapStateToProps = ({query}) => ({query})
const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch({
        type: 'CHANGE_QUERY',
        query: e.target.value
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)