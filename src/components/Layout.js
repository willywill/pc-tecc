import React from 'react';
import { node } from 'prop-types';
import './css/layout.css';

const Layout = ({ children }) => (
  <div className="bg-faded-black h-screen layout-grid">
    {children}
  </div>
);

Layout.displayName = 'Layout';

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
