import React from 'react';

import './Header.css';
import {Link} from "react-router-dom";

export const Header = () => (
    <header>
        <li><Link to="/garden">Miodowa Pasieka</Link></li>
    </header>
);


