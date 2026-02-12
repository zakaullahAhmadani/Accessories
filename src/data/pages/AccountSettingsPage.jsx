import React from 'react';
import Footer from '../components/Footer';
import AccountSettings from '../components/AccountSettings';

const AccountSettingsPage = () => {
  return (
    <>
      <main className="py-10 px-4">
        <AccountSettings />
      </main>
      <Footer />
    </>
  );
};

export default AccountSettingsPage;
