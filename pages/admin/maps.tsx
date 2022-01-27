import React from "react";
import { NextPageWithLayout } from "pages/_app";

// components
import MapExample from "components/Maps/MapExample";

// layout for page
import { getAdminLayout } from "layouts/admin";

const Maps: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample />
          </div>
        </div>
      </div>
    </>
  );
}

Maps.getLayout = getAdminLayout;
export default Maps;
