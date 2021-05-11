import React from 'react';

const Footer = () => (
  <div className="flex items-center justify-center bg-black" style={{ gridArea: 'footer' }}>
    <p className="text-white text-center">
      Copyright
      {' '}
      &copy;
      {' '}
      {(new Date().getFullYear())}
    </p>
  </div>
);

Footer.displayName = 'Footer';

export default Footer;
