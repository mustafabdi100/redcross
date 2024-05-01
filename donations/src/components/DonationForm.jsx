import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';
import OrganizationCheckbox from './OrganizationCheckbox';
import DonationAmounts from './DonationAmounts';

const DonationForm = ({ type }) => {
  const [currency, setCurrency] = useState('KES');
  const [isOrganization, setIsOrganization] = useState(false);
  const [amount, setAmount] = useState(null);

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const handleOrganizationChange = (isOrg) => {
    setIsOrganization(isOrg);
  };

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-4 text-center">
        {type === 'one-off' ? 'One-off Donation' : 'Monthly Donation'}
      </h1>
      <h2 className="text-lg font-bold text-gray-800 mb-8 text-center">
        How much would you like to donate?
      </h2>
      <CurrencySelector currency={currency} onCurrencyChange={handleCurrencyChange} />
      <OrganizationCheckbox
        isOrganization={isOrganization}
        onOrganizationChange={handleOrganizationChange}
      />
      <DonationAmounts
        currency={currency}
        isOrganization={isOrganization}
        amount={amount}
        onAmountChange={handleAmountChange}
      />
    </div>
  );
};

export default DonationForm;