"use client"

import React, { FC, MutableRefObject, useEffect, useRef, useState } from "react"
import "flickity/css/flickity.css"
import Flickity from "flickity"
import { useRaf } from "rooks"
import { twJoin } from "tailwind-merge"
import { ChildrenProps, ClassNameProps } from "@/types"

interface MarqueeProps extends ClassNameProps, ChildrenProps {
  speed?: number
  direction?: "to-right" | "to-left"
}

interface MarqueeItemProps extends ClassNameProps, ChildrenProps {}

const MarqueeRoot: FC<MarqueeProps> = ({ speed = 2, direction = "to-right", className, children, ...restProps }) => {
  let kittyRef: MutableRefObject<any> = useRef()
  const carouselRef: MutableRefObject<any> = useRef()
  const [isPlaying, setIsPlaying] = useState<boolean>(true)

  useEffect(() => {
    let directionBoo
    if (direction === "to-left") {
      directionBoo = true
    } else if (direction === "to-right") {
      directionBoo = false
    }
    kittyRef.current = new Flickity(carouselRef.current, {
      autoPlay: false,
      prevNextButtons: false,
      pageDots: false,
      rightToLeft: directionBoo,
      // @ts-expect-error
      draggable: ">1",
      wrapAround: true,
    })
    kittyRef.current.x = 0
  }, [direction])

  const pause = () => {
    setIsPlaying(false)
  }

  function play() {
    setIsPlaying(true)
  }

  useRaf(() => {
    if (kittyRef.current.slides && isPlaying) {
      kittyRef.current.x = (kittyRef.current.x - speed) % kittyRef.current.slideableWidth
      kittyRef.current.selectedIndex = kittyRef.current.dragEndRestingSelect()
      kittyRef.current.updateSelectedSlide()
      kittyRef.current.settle(kittyRef.current.x)
    }
  }, isPlaying)

  return (
    <div {...restProps} onMouseEnter={pause} onMouseLeave={play} onDragStart={pause} onFocus={pause} onBlur={play} ref={carouselRef} className={twJoin("main-carousel", className)}>
      {children}
    </div>
  )
}

const Item: FC<MarqueeItemProps> = ({ className, children, ...restProps }) => {
  return (
    <div {...restProps} className={twJoin(`carousel-cell`, className)}>
      {children}
    </div>
  )
}

export const Marquee = Object.assign(MarqueeRoot, { Item })
