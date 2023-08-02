import React, { FC } from "react"
import { ChildrenProps, ClassNameProps } from "@/types"
import { twMerge } from "tailwind-merge"

interface Props extends ChildrenProps, ClassNameProps {}

const SmallBanner: FC<Props> = ({ className, children, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={twMerge(`relative shadow-block-small hover:shadow-small2 shake bg-secondary text-gray text-2xl font-black font-header inline-block px-4 py-2`, className)}
    >
      {children}
    </button>
  )
}

export default SmallBanner
