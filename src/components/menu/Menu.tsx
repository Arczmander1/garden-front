import React from "react";
import { Link } from "react-router-dom";

import './Menu.css'

export const Menu = () => (
    <ul className="wrapperMenu">
        <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/shop">Sklep</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/honeys">Miody</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/news">Nowości</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/about">o nas</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/contact">Kontakt</Link></li>
    </ul>
);
