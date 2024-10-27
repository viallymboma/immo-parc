"use client";

import React from 'react';

import Link from 'next/link';

import {
  BlockedEyeSvgIcon,
  EyeSvgIcon,
  GainsDuJourSvgIcon,
  TotalActifSvgIcon,
} from '@/components/svgs/SvgIcons';

const WalletModule = () => {
    const [ display, setDisplay ] = React.useState<boolean> (false); 
    const [ displayText, setDisplayText ] = React.useState<string> ("Afficher"); 

    const handleDisplay = (display: boolean) => {
        setDisplay(display => !display); 
    }

    const handleDisplayText = () => {
        if (!display) setDisplayText("Cacher"); 
        if (display) setDisplayText("Afficher"); 
    }

    const handleChanges = (display: boolean) => {
        handleDisplay (display); 
        handleDisplayText ()
    }
  return (
    <div className='flex flex-col gap-3 w-full'>
      <div className="bg-gradient-to-r w-full from-blue-500 to-blue-700 p-6 rounded-lg shadow-lg text-white max-w-sm mx-auto">
        <div className="mb-4">
          <h1 className="text-lg font-semibold">Portefeuille Recharge</h1>
          <p className="text-2xl font-bold">0.00 FCFA</p>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Portefeuille Revenus</h1>
          <p className="text-2xl font-bold">0.00 FCFA</p>
        </div>
      </div>

      <div className='flex flex-row justify-between'>
        <Link className=' bg-sky-300 text-white rounded-2xl px-4 py-2' href="/dashboard/transactions/investments">
          Recharge
        </Link>
        <Link className=' bg-sky-300 text-white rounded-2xl px-4 py-2' href="/dashboard/transactions/withdrawals">
          Retrait
        </Link>
      </div>
      <div className='border-t-3 rounded-2xl py-4 flex flex-col gap-3 my-2'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-black dark:text-white'>ID: 695500474</h1>
          <div 
          className='flex flex-col cursor-pointer'
          onClick={ () => {
            handleChanges (display)
          } }>
            {
              display ? 
                <BlockedEyeSvgIcon />
                :
                <EyeSvgIcon />
            }
            <label htmlFor="">{ displayText }</label>
          </div>
        </div>
        <div>
          <div className='flex flex-row justify-between'>
            <div className='bg-sky-300 w-[150px] rounded-3xl px-3 py-4'>
              <TotalActifSvgIcon color="#fff" />
              <p className='text-white'>Total Actif</p>
              <h1 className='text-black'>
                {
                  display ? 
                    `0.00 FCFA`
                    :
                    "*******"
                }
              </h1>
            </div>
            <div className='bg-sky-300 w-[150px] rounded-3xl px-3 py-4'>
              <GainsDuJourSvgIcon color="#fff" />
              <p className='text-white'>Gains Du Jour</p>
              <h1 className='text-black'>
                {
                  display ? 
                    `0.00 FCFA`
                    :
                    "*******"
                }
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletModule