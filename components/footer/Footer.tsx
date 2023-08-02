import React from "react"
import TopographyPattern from "@/components/patterns/TopographyPattern"

const Footer = () => {
  return (
    <footer className={`wrapper relative dark:bg-gray-200 text-gray border-t border-gray-800 py-12 mt-12 bg-white shadow-block`}>
      <TopographyPattern className={`absolute inset-0 fill-cyan-700`} />
      <div className="relative z-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorum iste libero minus soluta? A accusantium alias amet at doloribus ea error est eveniet, fugiat id
        itaque molestias non, sunt.
      </div>
    </footer>
  )
}

export default Footer
