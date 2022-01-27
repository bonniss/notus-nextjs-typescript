import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar";
import FooterSmall from "components/Footers/FooterSmall";

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}

export const getAuthLayout = (page: any) => (
  <AuthLayout>
    {page}
  </AuthLayout>
)
