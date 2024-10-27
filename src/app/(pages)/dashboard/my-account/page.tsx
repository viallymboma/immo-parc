"use client";

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronRightSvgIcon } from '@/components/svgs/SvgIcons';

import IconImage from '../../../../../public/imgs/total des gains.png';

type BottomElemenetType = {
    icon?: any, 
    tooltip: string, 
    route: string,
}

const bottomNavElement: BottomElemenetType [] = [
    {
        tooltip: "Mes compte financier", 
        route: "/dashboard/financial-accounts"
    }, 
    {
        tooltip: "Mon Profile", 
        route: "/dashboard/profile"
    }, 
    {
        tooltip: "Inviter un ami", 
        route: "/dashboard/invite-friends"
    }, 
    {
        tooltip: "Mes Infos", 
        route: "/dashboard/settings"
    }
]

const MyAccountPage = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex px-4 py-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 flex-row shadow-5 rounded-3xl'>
                <div className='flex justify-center rounded-3xl overflow-hidden w-[50px]'>
                    <Image src={ IconImage } className='w-full' alt='image' />
                </div>
                <div>
                    <h1 className='text-white dark:text-black'>695500474</h1>
                    <p>VIP 0</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 '>
                {
                    bottomNavElement?.map((element: BottomElemenetType) => {
                        return (
                            <Link href={`${ element?.route }`} className='flex flex-row justify-between py-3 rounded-md border-b-1 border-b-slate-200'>
                                <h1>{ element?.tooltip }</h1>
                                <ChevronRightSvgIcon />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyAccountPage