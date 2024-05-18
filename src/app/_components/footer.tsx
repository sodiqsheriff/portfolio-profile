import React from 'react'
import { ProfileFooter } from "./svg_components"
export const Footer = () => {
  return (
    <>
    <div className="flex items-center justify-between px-5 py-3 lg:px-12 bg-black w-full">
    <ProfileFooter />
     <h1 className="text-white font-black">@2024 Personal</h1>
    </div>
    </>
  )
}
