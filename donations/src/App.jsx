import React, { useState } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import Button from './components/Button';
import Message from './components/Message';
import PledgeDropdown from './components/PledgeDropdown';
import DonationForm from './components/DonationForm';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDonationForm(true);
  };

  const handleOneOffDonation = () => {
    setSelectedOption('one-off');
    setShowDonationForm(true);
  };

  return (
    <Layout imageUrl="https://www.redcross.or.ke/wp-content/uploads/2023/08/Our-brief-but-rich-history-1170x640-1.jpg">
      {!showDonationForm && (
        <>
          <Header />
          <Dropdown />
          <div className="flex space-x-4 justify-center my-8">
            <Button onClick={handleOneOffDonation}>One-off Donation</Button>
            <PledgeDropdown onOptionClick={handleOptionClick} />
          </div>
          <Message />
        </>
      )}
      {showDonationForm && <DonationForm type={selectedOption} />}
    </Layout>
  );
};

export default App;