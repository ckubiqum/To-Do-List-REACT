import React from 'react';

function Footer() {
    return (
        <footer style={footerStyle}>
            <p>coded by Celina Koekenbier</p>
        </footer>
    )
}

const footerStyle = {
    backgroundColor: '#479691',
    color: '#fff',
    textAlign: 'center',
    marginTop: '20px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
}
export default Footer;
