"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
// import { appWithTranslation } from 'next-i18next';
import Loader from "@/components/common/Loader";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body>
        <DefaultLayout>
        {loading ? <Loader /> : children}
        </DefaultLayout>
      </body>
    </html>
  );
}

// export default appWithTranslation(RootLayout);
export default RootLayout;