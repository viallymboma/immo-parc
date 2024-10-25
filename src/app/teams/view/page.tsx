import React from 'react';

import { Metadata } from 'next';

import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import UserTable from '@/components/Tables/AllTables/UserTable';

export const metadata: Metadata = {
  title: "Team view Page | Immo-parc - Next.js Dashboard Tool",
  description: "This is Team view page for Immo-parc. Nero-Tech Tailwind CSS Admin Dashboard Tool",
};

const TeamPageView = () => {
  return (
    <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Team View" />
        <UserTable />
    </div>
  )
}

export default TeamPageView