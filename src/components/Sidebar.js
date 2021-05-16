import React from 'react';

// TODO: Add `link` or `href` fields to the objects and make them link to those pages in the DOM
const sidebarLinks = [
  { label: 'Blog' },
  { label: 'Authors' },
  { label: 'Events' },
  { label: 'Join Us' },
];

// TODO: Make this a fixed sidebar on bigger displays
const Sidebar = () => (
  <div className="flex flex-col mt-20" style={{ gridArea: 'sidebar', transform: 'skewY(-10deg)', maxWidth: '500px' }}>
    {sidebarLinks.map((link) => (
      <div className="py-10 my-2 bg-white rounded-r-3xl bg-opacity-10 hover:bg-opacity-20 transition-all cursor-pointer">
        <p className="text-white text-center font-bold text-2xl" style={{ transform: 'skewY(10deg)' }}>
          {link.label}
        </p>
      </div>
    ))}
  </div>
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
