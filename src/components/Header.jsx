import React from 'react'
import Search from './Search'

const Header = () => <header>
    <h1 className="title">Contact List</h1>
    <Search />
</header>

Header.displayName = 'Header'

export default Header