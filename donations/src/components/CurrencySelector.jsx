import React from 'react';

const CurrencySelector = ({ currency, onCurrencyChange }) => {
  const handleCurrencyChange = (newCurrency) => {
    onCurrencyChange(newCurrency);
  };

  return (
    <div className="flex justify-center mb-4 space-x-2">
      <button
        className={`rounded-full px-6 py-1 font-bold text-sm border-2 ${
          currency === 'KES' ? 'bg-red-500 text-white border-red-500' : 'text-red-500 border-red-500'
        }`}
        onClick={() => handleCurrencyChange('KES')}
      >
        KES
      </button>
      <button
        className={`rounded-full px-6 py-1 font-bold text-sm border-2 ${
          currency === 'USD' ? 'bg-red-500 text-white border-red-500' : 'text-red-500 border-red-500'
        }`}
        onClick={() => handleCurrencyChange('USD')}
      >
        USD
      </button>
    </div>
  );
};

export default CurrencySelector;