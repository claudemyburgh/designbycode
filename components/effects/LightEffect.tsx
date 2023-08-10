"use client"

import React, { FC, MutableRefObject, useRef } from "react"
import { ChildrenProps, ClassNameProps } from "@/types"
import { twMerge } from "tailwind-merge"

interface LightProps extends ChildrenProps, ClassNameProps {
  [x: string]: any
}

const LightEffect: FC<LightProps> = ({ children, className, ...restProps }) => {
  const lightRef: MutableRefObject<any> = useRef(null)

  const handleMouseMove = (e: any) => {
    const { currentTarget: target } = e
    const rect = (target as HTMLElement).getBoundingClientRect()
    let y = e.clientY - lightRef.current.getBoundingClientRect().top
    let x = e.clientX - lightRef.current.getBoundingClientRect().left
    ;(target as HTMLElement).style.setProperty("--mouse-x", `${x}px`)
    ;(target as HTMLElement).style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <div {...restProps} className={twMerge("card relative", className)} ref={lightRef} onMouseMove={handleMouseMove}>
      {children}
    </div>
  )
}

export default LightEffect
