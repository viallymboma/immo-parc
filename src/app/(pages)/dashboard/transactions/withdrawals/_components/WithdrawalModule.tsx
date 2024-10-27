"use client";
import React from 'react';

import ReturnHeader from '@/components/Sidebar/ReturnHeader';

const WithdrawalModule = () => {
  return (
    <div>
        <ReturnHeader 
            headerName='Mes Retraits'
            returnBtnLabel='Retour'
            returnLink='/dashboard/wallet'
        />
        <div>
            Retraits
        </div>
    </div>
  )
}

export default WithdrawalModule