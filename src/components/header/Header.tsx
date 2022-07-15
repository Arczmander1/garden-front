import React from 'react';

import './Header.css';
import {Link} from "react-router-dom";

export const Header = () => (
    <header>
        <div>
            <Link style={{ textDecoration: 'none', color: 'darkgreen', fontSize: '1.5rem'}} to="/garden">Miodowa Pasieka</Link>
        </div>
    </header>
);


