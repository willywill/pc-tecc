import React from 'react';

const Header = () => {
  const text = 'Header';

  return (
    <div className="w-200 bg-gray-200 text-center border-2 text-2xl rounded-3xl" style={{ gridArea: 'header' }}>
      {text}
    </div>
  );
};

Header.displayName = 'Header';

// Header.propTypes = {

// };

// Header.defaultProps = {

// };

export default Header;
