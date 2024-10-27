"use client";
import React from 'react';

import ReturnHeader from '@/components/Sidebar/ReturnHeader';

const FundingAccountModule = () => {
  return (
    <div>
        <ReturnHeader 
            headerName='Mes Recharges'
            returnBtnLabel='Retour'
            returnLink='/dashboard/wallet'
        />
        <div>
            Recharge
        </div>
    </div>
  )
}

export default FundingAccountModule