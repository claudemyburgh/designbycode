import React from "react"
import SmallBanner from "@/components/banners/SmallBanner"

const Footer = () => {
  return (
    <footer className={`wrapper relative bg-sky-300 text-gray py-12 my-12 shadow-block`}>
      <SmallBanner className={`absolute -top-6 -left-4 -rotate-6 flex items-center bg-green-500`}>
        Footer Section{" "}
        <span className={`ml-2`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </SmallBanner>

      <div className="relative text-gray z-10">
        <div className="grid grid-cols-12">
          <div className={`col-span-12 md:col-span-4`}>
            <h3 className="font-header text-3xl">Pages</h3>
            <ul className={`list-disc pl-3 `}>
              <li>Home</li>
              <li>Packages</li>
              <li>Free Stuff</li>
              <li>Themes</li>
            </ul>
          </div>
          <div className={`col-span-12 md:col-span-4`}>
            <h3 className="font-header text-3xl">Pages</h3>
            <ul className={`list-disc pl-3 `}>
              <li>Home</li>
              <li>Packages</li>
              <li>Free Stuff</li>
              <li>Themes</li>
            </ul>
          </div>
          <div className={`col-span-12 md:col-span-4`}>
            <h3 className="font-header text-3xl">Pages</h3>
            <ul className={`list-disc pl-3 `}>
              <li>Home</li>
              <li>Packages</li>
              <li>Free Stuff</li>
              <li>Themes</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
