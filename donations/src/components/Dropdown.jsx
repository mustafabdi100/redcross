import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ onCauseChange }) => {
  const [selectedCause, setSelectedCause] = useState('');

  const handleChange = (event) => {
    setSelectedCause(event.target.value);
    onCauseChange(event.target.value);
  };

  return (
    <div className="mb-4 relative">
      <select
        value={selectedCause}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        style={{
          borderColor: 'black',
          borderRadius: '4px',
          backgroundColor: 'white',
          fontWeight: 'bold',
        }}
      >
        <option value="" disabled>
          Choose Cause
        </option>
        <option value="cause1">Where It Matters</option>
        <option value="cause2">Supporting El-nino Response</option>
        <option value="cause3">Helping Victims of Embakasi Gas Explosion</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  );
};

export default Dropdown;