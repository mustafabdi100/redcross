import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#ED1B24] hover:bg-[#c8151e] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};

export default Button;