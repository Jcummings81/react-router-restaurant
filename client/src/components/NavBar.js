import React from 'react'
import { NavLink } from 'react-router-dom'
import { isAuthenticated } from '../fakeAuth'

const styles = {
    active: {
    textDecoration: 'none',
    fontWeght: 'bold',
    color: 'black',
}
}

const NavBar = () => (
    <nav>
        <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
        {'  '}
        <NavLink exact activeStyle={styles.active} to="/about">About</NavLink>
        {'  '}
{ isAuthenticated() ? <NavLink exact activeStyle={styles.active} to="/dashboard">Dashboard</NavLink> : <NavLink exact activeStyle={styles.active} to="/login">Login</NavLink> }

    </nav>

)

export default NavBar