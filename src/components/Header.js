/* eslint-disable max-len */
import React from 'react';

const Header = () => (
  <div className="flex flex-col  md:flex-row items-center px-4" style={{ gridArea: 'header' }}>
    <img className="md:mr-10" width="150" src="/logo.svg" alt="test" />
    <div className="bg-white bg-opacity-10 relative text-white px-3  rounded-xl" style={{ width: '80%' }}>
      <input className="w-full outline-none bg-white bg-opacity-0 p-3 text-base placeholder-white placeholder-opacity-30 rounded-lg focus:shadow-outline" type="text" placeholder="Search articles, authors or categories" />
      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#FF002A">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
);

Header.displayName = 'Header';

export default Header;
