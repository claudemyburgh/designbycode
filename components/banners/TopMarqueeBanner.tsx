"use client"

import React, { FC } from "react"
import { twMerge } from "tailwind-merge"
import { ClassNameProps } from "@/types"
import { Marquee } from "@/components/marquee/Marquee"
import Link from "next/link"

const TopMarqueeBanner: FC<ClassNameProps> = ({ className }) => {
  return (
    <div>
      <Marquee speed={2} direction={`to-right`} className={twMerge(`bg-primary text-gray font-semibold tracking-wide`, className)}>
        {Array(10)
          .fill(0, 0)
          .map((_, i) => (
            <Marquee.Item key={i} className={`ml-12 flex items-center flex-nowrap h-12`}>
              <Link className={`shake`} href={`/`}>
                Free shipping
              </Link>
              <span className={`ml-12`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-secondary">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Marquee.Item>
          ))}
      </Marquee>
    </div>
  )
}

export default TopMarqueeBanner
