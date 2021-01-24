/** @format */

import React from 'react';
import { useLocation } from 'react-router';

const Sidebar = () => {
     const { pathname } = useLocation();
     const sideBarContent = { '/': 'Some Content For Home', '/about': 'Some Content For About' };
     return (
          <div>
               <h1>This is Sidebar Component</h1>
               <p>{sideBarContent[pathname]}</p>
               <hr />
          </div>
     );
};

export default Sidebar;
