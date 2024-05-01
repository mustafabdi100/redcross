import React from 'react';

const OrganizationCheckbox = ({ isOrganization, onOrganizationChange }) => {
  const handleOrganizationChange = (event) => {
    onOrganizationChange(event.target.checked);
  };

  return (
    <div className="flex items-center justify-center mb-4">
      <input
        type="checkbox"
        checked={isOrganization}
        onChange={handleOrganizationChange}
        className="form-checkbox h-5 w-5 text-red-600"
      />
      <label className="ml-2 text-gray-800 font-bold">
        Check the box if you are an organisation
      </label>
    </div>
  );
};

export default OrganizationCheckbox;