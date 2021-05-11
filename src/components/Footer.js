import React from 'react';

const Footer = () => {
  const text = 'Footer';

  return (
    <div className="w-200 bg-gray-100 text-center text-2xl" style={{ gridArea: 'footer' }}>
      {text}
    </div>
  );
};

Footer.displayName = 'Footer';

// Footer.propTypes = {

// };

// Footer.defaultProps = {

// };

export default Footer;
