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
            </Marquee.Item>
          ))}
      </Marquee>
    </div>
  )
}

export default TopMarqueeBanner
