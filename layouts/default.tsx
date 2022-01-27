import React from 'react'

export default function DefaultLayout({ children }: any) {
  return (
    <>
      {children}
    </>
  )
}

export const getLayout = (page: any) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
