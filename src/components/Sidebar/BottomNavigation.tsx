"use client";
import React from 'react';

import Link from 'next/link';

import {
  Dashboard2SvgIcon,
  ProductsSvgIcon,
  SettingSvgIcon,
  WaletSvgIcon,
} from '../svgs/SvgIcons';

type BottomElemenetType = {
    icon: any, 
    tooltip: string, 
    route: string,
}

const bottomNavElement: BottomElemenetType [] = [
    {
        icon: (
            <Dashboard2SvgIcon />
        ), 
        tooltip: "Accueil", 
        route: "/dashboard"
    }, 
    {
        icon: (
            <ProductsSvgIcon />
        ), 
        tooltip: "Produits", 
        route: "/dashboard/products"
    }, 
    {
        icon: (
            <WaletSvgIcon />
        ), 
        tooltip: "Portefeuille", 
        route: "/dashboard/wallet"
    }, 
    {
        icon: (
            <SettingSvgIcon />
        ), 
        tooltip: "Mon compte", 
        route: "/dashboard/my-account"
    }
]

const BottomNavigation = () => {
    return (
        <div className='bg-[#1F2A37] w-[100%] py-2 justify-around flex flex-row'>
            {
                bottomNavElement?.map((boElement: BottomElemenetType) => {
                    return (
                        <Link href={ `${ boElement?.route }` } className='flex flex-col justify-center items-center hover:bg-slate-600'>
                            <span>
                                { boElement?.icon }
                            </span>
                            <span>
                                { boElement?.tooltip }
                            </span>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default BottomNavigation