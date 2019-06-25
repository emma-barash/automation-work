import React from 'react';
import '../elements/'
import { NavRibbon } from '../elements/index.js';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <NavRibbon>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/students">Students</Link>
            <Link className="link" to="/rentals">Rentals</Link>
        </NavRibbon>
    )
}

export default Navigation;