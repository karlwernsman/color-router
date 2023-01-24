import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/rgb/42/157/143">Persian Green</NavLink>
      <NavLink to="/rgb/231/111/81">Burnt Sienna</NavLink>
      <NavLink to="/rgb/233/196/106">Maize Crayola</NavLink>
    </header>
  );
}
