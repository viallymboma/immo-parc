import { Metadata } from 'next';

import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import CalendarBox from '@/components/CalenderBox';
import DefaultLayout from '@/components/Layouts/DefaultLaout';

export const metadata: Metadata = {
  title: "Immo-parc Calender Page | NextAdmin - Next.js Dashboard Kit",
  description:
    "This is Next.js Calender page for NextAdmin  Tailwind CSS Admin Dashboard Kit",
  // other metadata
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Calendar" />

        <CalendarBox />
      </div>
    </DefaultLayout>
  );
};

export default CalendarPage;
