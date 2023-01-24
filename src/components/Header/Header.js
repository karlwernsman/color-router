import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <NavLink to="/rgb/38/70/83" className="charcoal">
        Charcoal
      </NavLink>
      <NavLink to="/rgb/42/157/143" className="green">
        Persian Green
      </NavLink>
      <NavLink to="/rgb/233/196/106" className="crayola">
        Maize Crayola
      </NavLink>
      <NavLink to="/rgb/244/162/97" className="brown">
        Sandy Brown
      </NavLink>
      <NavLink to="/rgb/231/111/81" className="sienna">
        Burnt Sienna
      </NavLink>
    </header>
  );
}
