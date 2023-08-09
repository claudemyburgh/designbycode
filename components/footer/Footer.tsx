import React from "react"

const Footer = () => {
  return (
    <footer
      className={`wrapper border dark:border-primary border-secondary-600 relative shadow-2xl shadow-secondary dark:shadow-primary/10  dark:bg-gray-900 bg-secondary/10 backdrop-blur rounded-3xl text-gray py-12 my-12 shadow-block`}
    >
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
