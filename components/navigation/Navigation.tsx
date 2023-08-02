;`use client`

import { ThemeSelector } from "@/components/navigation/ThemeSelector"
import React from "react"
import Link from "next/link"
import { twJoin } from "tailwind-merge"

const Navigation = () => {
  return (
    <div className={`max-w-7xl space-x-8 my-8 flex items-center justify-between  mx-auto px-4 md:px-6 `}>
      <Link href={`/`} className={twJoin(`shake font-header bg-primary shadow-block hover:shadow-large2 text-gray p-3 text-4xl font-black`)}>
        DesignByCode
      </Link>
      <div className={`space-x-8  text-lg font-semibold hidden md:flex dark:[text-shadow:_3px_3px_1px_black]`}>
        <Link className={`shake`} href={`/`}>
          Home
        </Link>
        <Link className={`shake`} href={`#`}>
          Service
        </Link>
        <Link className={`flex items-center shake`} href={`packages`}>
          Packages{" "}
          <span className={`shadow-block-xsmall bg-primary block ml-2 text-gray`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </Link>
        <Link className={`shake`} href={`#`}>
          Themes
        </Link>
        <Link className={`shake`} href={`#`}>
          Graphics
        </Link>
        <Link className={`shake`} href={`#`}>
          Contact Us
        </Link>
      </div>

      <div className={`flex space-x-4`}>
        <ThemeSelector className={`relative`} />
        <button type={`button`} className={`shadow-block-small shake bg-white hover:scale-105 h-10 w-[200px] text-gray flex items-center`}>
          <svg className={`h-5 w-5 mx-2`} fill={`currentColor`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.31 20.31">
            <path d="m8.77,12.66c-1.4.16-2.78-.32-3.77-1.32h0c-.38-.38-.69-.82-.91-1.3-.18-.38-.63-.54-1.01-.36-.38.18-.54.63-.36,1.01.3.64.71,1.22,1.21,1.72,1.16,1.16,2.71,1.79,4.32,1.79.23,0,.46-.01.69-.04.17-.02.33-.1.45-.22.17-.16.24-.39.22-.62-.02-.2-.12-.38-.28-.51-.16-.13-.35-.19-.56-.16Z" />
            <path d="m20.09,19.02l-5.64-5.64c2.69-3.23,2.49-7.99-.5-10.99-1.54-1.54-3.59-2.39-5.78-2.39S3.93.85,2.39,2.39C-.8,5.58-.8,10.76,2.39,13.94c3,3,7.76,3.19,10.99.5l5.64,5.64c.14.14.33.22.54.22s.39-.08.54-.22c.29-.3.29-.78,0-1.07ZM3.46,12.87c-1.26-1.25-1.95-2.93-1.95-4.71s.69-3.45,1.95-4.7c1.3-1.3,3-1.95,4.7-1.95s3.41.65,4.7,1.95c2.59,2.59,2.59,6.81,0,9.41s-6.82,2.59-9.41,0Z" />
          </svg>
          <span className={`font-semibold text-lg`}>Search</span>
        </button>
      </div>
    </div>
  )
}

export default Navigation
