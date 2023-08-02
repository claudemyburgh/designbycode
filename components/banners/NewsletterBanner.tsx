import React, { FC } from "react"
import { ChildrenProps, ClassNameProps } from "@/types"

interface Props extends ChildrenProps, ClassNameProps {}

const NewsletterBanner: FC<Props> = ({ children, className }) => {
  return (
    <div className={`bg-secondary flex justify-center items-center text-white w-full h-[3.25rem]`}>
      <div className="wrapper flex font-semibold text-lg tracking-wide justify-center items-center">{children}</div>
    </div>
  )
}

export default NewsletterBanner
