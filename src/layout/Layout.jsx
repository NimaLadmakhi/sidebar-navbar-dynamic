/** @format */

import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
     return (
          <div>
               <Navbar />
               <Sidebar />
               {children}
          </div>
     );
};

export default Layout;
