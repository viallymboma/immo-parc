"use client";
import React from 'react';

import {
  suggestedAmounts,
  SuggestedAmounts,
} from '@/components/data/Productsdata';
import { TotalActifSvgIcon } from '@/components/svgs/SvgIcons';

const FundingForm = () => {

  const [ selectedAmount, setSelectedAmount ] = React.useState<number>(1000); 
  const [ selectedAmountError, setSelectedAmountError ] = React.useState<string>(""); 

  const handleSelectAmount = (amount: any) => {
    setSelectedAmount (amount.target.value)
    setSelectedAmountError ("")
  }

  const submitSelection = (e: any) => {
    e.preventDefault(); 
    if (selectedAmount < 1000 ) {
      setSelectedAmountError ("Le montant ne peut être inférieur à 1000 FCFA")
      return null
    }
  }

  return (
    <div>
      <div className={` "mb-4" } `}>
        <label
            htmlFor="email"
            className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Montant <span className="text-red">*</span>
        </label>
        <div className="relative">
            <input
                value={ selectedAmount }
                onChange={ (e) => handleSelectAmount (e)}
                type="number"
                placeholder="Click on the below buttons to select"
                name="amount"
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
            <span className="absolute right-4.5 top-1/2 -translate-y-1/2">
              <TotalActifSvgIcon color="#fff" />
            </span>

        </div>
        <p className='text-red-400'>
            {
                selectedAmountError && 
                selectedAmountError !== "" && 
                selectedAmountError !== undefined && 
                selectedAmountError
            }
        </p>
      </div>
      <div>
        {/* amount list selection */}
        {
          suggestedAmounts?.map((amount: SuggestedAmounts, index: number) => {
            return (
              <div className='' key={ `${ amount?.id }-${ index }`} >
                { amount?.amount }
              </div>
            )
          })
        }
        {/* amount list selection */}
      </div>
      <div className="mb-4.5">
        <button
          onClick={ (e) => {
            submitSelection (e); 
          } }
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
        >
            Recharge
        </button>
      </div>
    </div>
  )
}

export default FundingForm