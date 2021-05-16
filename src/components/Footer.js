import React from 'react';

const Footer = () => (
  <div className="flex items-center justify-center bg-black mt-10" style={{ gridArea: 'footer', minHeight: '100px' }}>
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
