import React, { useState, useRef, useEffect } from 'react';

const PledgeDropdown = ({ onOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onOptionClick(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="bg-[#ED1B24] hover:bg-[#c8151e] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
      >
        Make a Pledge
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <button
            onClick={() => handleOptionClick('monthly')}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left rounded-t-md"
          >
            Monthly
          </button>
          <button
            onClick={() => handleOptionClick('one-off')}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left rounded-b-md"
          >
            One-off
          </button>
        </div>
      )}
    </div>
  );
};

export default PledgeDropdown;