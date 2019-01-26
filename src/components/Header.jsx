import React from 'react'
import Search from './Search'
import './Header.scss'

const Header = () => <header className="header">
    <h1 className="title">Contact List</h1>
    <Search className="header-search"/>
</header>

Header.displayName = 'Header'

export default Header