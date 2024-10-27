"use client";

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ClickOutside from '@/components/ClickOutside';
import SidebarItem from '@/components/Sidebar/SidebarItem';
import useLocalStorage from '@/hooks/useLocalStorage';

import {
  CalendarSvgIcon,
  DashboardSvgIcon,
  FormsSvgIcon,
  GoldenLongVersion,
  HamburgerMenuSvgIcon,
  ProfileSvgIcon,
  TablesSvgIcon,
} from '../svgs/SvgIcons';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU PRINCIPAL",
    menuItems: [
      {
        icon: (
          <DashboardSvgIcon />
        ),
        label: "Tableau de Bord",
        route: "/",
        // children: [
        //   { label: "eCommerce", route: "/" },
        // ],
      },
      {
        icon: (
          <CalendarSvgIcon />
        ),
        label: "Commissions",
        route: "/commissions",
      },
      {
        icon: (
          <FormsSvgIcon />
        ),
        label: "Team",
        route: "#",
        children: [
          { label: "Mon équipe", route: "/teams/view" },
          { label: "Tree View", route: "/teams/tree-view" },
          { label: "Folder View", route: "/teams/folder-view" },
        ],
      },
      {
        icon: (
          <TablesSvgIcon />
        ),
        label: "Transactions",
        route: "#",
        children: [
          // { label: "Tables", route: "/tables" },
          { label: "Commissions", route: "/transactions/commissions" },
          { label: "Withdrawals", route: "/transactions/withdrawals" },
          { label: "Investissements", route: "/transactions/investments" },
        ],
      },

      // {
      //   icon: (
      //     <PagesSvgIcon />
      //   ),
      //   label: "Pages",
      //   route: "#",
      //   children: [
      //     { label: "Settings", route: "/pages/settings" },
      //   ],
      // },
    ],
  },
  {
    name: "REGLAGES",
    menuItems: [
      {
        icon: (
          <ProfileSvgIcon />
        ),
        label: "Profile",
        route: "/profile",
      }, 
      {
        icon: (
          <CalendarSvgIcon />
        ),
        label: "Utilisateurs",
        route: "/utilisateurs",
      },
      // {
      //   icon: (
      //     <ChartsSvgIcon />
      //   ),
      //   label: "Charts",
      //   route: "#",
      //   children: [
      //     { label: "Basic Chart", route: "/charts/basic-chart" },
      //   ],
      // },
      // {
      //   icon: (
      //     <UIELementsSvgIcon />
      //   ),
      //   label: "UI Elements",
      //   route: "#",
      //   children: [
      //     { label: "Alerts", route: "/ui-elements/alerts" },
      //     { label: "Buttons", route: "/ui-elements/buttons" },
      //   ],
      // },
      // {
      //   icon: (
      //     <LogoutSvgIcon />
      //   ),
      //   label: "Authentication",
      //   route: "#",
      //   children: [
      //     { label: "Sign In", route: "/auth/signin" },
      //   ],
      // },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10">
          <Link href="/">
            {/* <Image
              width={176}
              height={32}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
              priority
              className="dark:hidden"
              style={{ width: "auto", height: "auto" }}
            /> */}
            <GoldenLongVersion width="176" height="32" />
            {/* <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className="hidden dark:block"
              style={{ width: "auto", height: "auto" }}
            /> */}
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <HamburgerMenuSvgIcon />
          </button>

        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          {/* <LanguageSwitcher /> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  { group.menuItems && group.menuItems?.length && group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;


// R5sRCD5Fj.zqm
// https://sunruncm.cc/pages/login/index?invite=urgihmuc