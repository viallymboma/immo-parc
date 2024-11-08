"use client";
import React, { useState } from 'react';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

import BottomNavigation from '../Sidebar/BottomNavigation';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Star ===== --> */}
      <div className="flex h-screen relative overflow-hidden">
        {/* <!-- ===== Sidebar Star ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Star ===== --> */}
        <div className="relative flex flex-1 flex-col h-screen overflow-y-auto overflow-x-hidden ">
          {/* <!-- ===== Header Star ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Star ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl h-[100dvh] p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
          {/* <!-- ===== Sidebar Star ===== --> */}
          <div className='z-[1000] sticky bottom-0 w-full '>
            <BottomNavigation />
          </div>
          {/* <!-- ===== Sidebar End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}


      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
