"use client";

import React from 'react';

import Link from 'next/link';

import {
  AccountType,
  my_accounts,
} from '@/components/data/Productsdata';
import {
  CloseSvgIcon,
  EditAccountSvgIcon,
} from '@/components/svgs/SvgIcons';

// type AccountType = {
//     operator: string, 
//     service: string, 
//     abreviation: string, 
//     balance?: number, 
//     phone_number: number
// }

// const my_accounts: AccountType [] = [
//     {
//         operator: "Orange", 
//         service: "Orange Money", 
//         abreviation: "OM", 
//         balance: 50000, 
//         phone_number: 237695500474
//     }, 
//     {
//         operator: "MTN", 
//         service: "Mobile Money", 
//         abreviation: "MoMo", 
//         balance: 60000, 
//         phone_number: 237675500474
//     }
// ]

const MyFinancialAccountPage = () => {
    return (
        <div className='flex flex-col gap-3'>
            {/* <div className='flex px-4 py-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 flex-row shadow-5 rounded-3xl'>
                <div className='flex justify-center rounded-3xl overflow-hidden w-[50px]'>
                    <Image src={ IconImage } className='w-full' alt='image' />
                </div>
                <div>
                    <h1 className='text-white dark:text-black'>695500474</h1>
                    <p>VIP 0</p>
                </div>
            </div> */}
            <div className='flex flex-col gap-3 '>
                {
                    my_accounts?.map((element: AccountType) => {
                        return (
                            <div className='flex px-4 py-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 flex-col shadow-5 rounded-3xl'>
                                <div className='flex justify-end rounded-3xl overflow-hidden w-full'>
                                    {/* <Image src={ IconImage } className='w-full' alt='image' /> */}
                                    <CloseSvgIcon color='#ffff' />
                                </div>
                                <div>
                                    <p className='text-[12px]'>{ element?.operator }</p>
                                    <p className='text-[12px]'>{ element?.service } - { element?.abreviation }</p>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <h1 className='text-white dark:text-black'>{ element?.phone_number }</h1>
                                    <Link href={`/dashboard/financial-accounts/edit/${ element?.phone_number }`}>
                                        <EditAccountSvgIcon color='#ffff' />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyFinancialAccountPage