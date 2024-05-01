import React, { useState } from 'react';

const DonationAmounts = ({ currency, isOrganization, onAmountChange }) => {
  const [customAmount, setCustomAmount] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const handleAmountClick = (amount) => {
    onAmountChange(amount);
    setCustomAmount('');
    setActiveButton(amount);
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
    onAmountChange(event.target.value);
  };

  const handleOtherClick = () => {
    if (activeButton === 'other') {
      setActiveButton(null); // This will hide the custom amount field
    } else {
      setActiveButton('other');
    }
    setCustomAmount('');
  };

  const renderAmountButtons = () => {
    const amounts = isOrganization 
      ? currency === 'KES' ? [50000, 100000, 250000] : [10000, 50000, 100000]
      : currency === 'KES' ? [200, 1000, 10000] : [10, 50, 500];

    return amounts.map((amount) => (
      <button
        key={amount}
        className={`rounded-lg border-2 px-4 py-2 font-bold mx-1 ${
          activeButton === amount
            ? 'bg-red-500 text-white' // Active button with red background and white text
            : 'border-red-500 text-gray-700' // Inactive buttons with red border
        }`}
        onClick={() => handleAmountClick(amount)}
      >
        {currency} {amount.toLocaleString()}
      </button>
    ));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex mb-4 space-x-2">
        {renderAmountButtons()}
        <button
          className={`rounded-lg border-2 px-4 py-2 font-bold mx-1 ${
            activeButton === 'other'
              ? 'bg-red-500 text-white' // 'Other' button active state
              : 'border-red-500 text-gray-700' // 'Other' button inactive state
          }`}
          onClick={handleOtherClick}
        >
          Other
        </button>
      </div>
      {activeButton === 'other' && (
        <input
          type="text"
          value={customAmount}
          onChange={handleCustomAmountChange}
          placeholder="Enter Amount"
          className="mt-2 rounded-lg border-2 border-red-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
        />
      )}
    </div>
  );
};

export default DonationAmounts;
