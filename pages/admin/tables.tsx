import React from "react";
import { NextPageWithLayout } from "pages/_app";

// components
import CardTable from "components/Cards/CardTable";

// layout for page
import { getAdminLayout } from "layouts/admin";

const Tables: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}

Tables.getLayout = getAdminLayout;
export default Tables;
