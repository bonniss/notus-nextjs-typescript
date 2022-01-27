import React from "react";
import { NextPageWithLayout } from "pages/_app";

// components
import CardSettings from "components/Cards/CardSettings";
import CardProfile from "components/Cards/CardProfile";

// layout for page
import { getAdminLayout } from "layouts/admin";

const Settings: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Settings.getLayout = getAdminLayout;
export default Settings;
