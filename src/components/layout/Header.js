import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/"> Home</Link> |
            <Link style={linkStyle} to="/about"> About</Link>

        </header>
    )
}

const headerStyle = {
    backgroundColor: '#479691',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '20px',
    padding: '5px',
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
}

const linkStyle = {
    color: '#fff',
    TextDecoration: 'none',
}
export default Header;
