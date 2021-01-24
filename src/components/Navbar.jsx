/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
     return (
          <ul>
               <li>
                    <NavLink to='/' activeStyle={{ color: 'red' }} exact>
                         Home
                    </NavLink>
               </li>
               <li>
                    <NavLink to='/about' activeStyle={{ color: 'red' }} exact>
                         About
                    </NavLink>
               </li>
          </ul>
     );
};

export default Navbar;
