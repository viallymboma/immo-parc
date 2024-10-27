import React from 'react';

import ReturnHeader from '@/components/Sidebar/ReturnHeader';

import WalletModule from './_components/WalletModule';

const WalletPage = () => {
  return (
    <div>
      <ReturnHeader 
          headerName='Mon Portefeuille'
          returnBtnLabel='Retour'
          returnLink='/dashboard'
      />
      <WalletModule />
    </div>
  )
}

export default WalletPage