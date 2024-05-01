import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children, imageUrl }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg flex my-2 w-full max-w-6xl mx-auto overflow-hidden">
        <div className="w-1/2">
          <img src={imageUrl} alt="Kenya Red Cross" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 p-12 flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Layout;
