import { Metadata } from 'next';

import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import SettingBoxes from '@/components/SettingBoxes';

export const metadata: Metadata = {
  title: "Immo-parc Settings Page | NextAdmin - Next.js Dashboard c",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const Settings = () => {
  return (
    <div className="mx-auto w-full max-w-[1080px]">
      <Breadcrumb pageName="Settings" />
      <SettingBoxes />
    </div>
  );
};

export default Settings;
