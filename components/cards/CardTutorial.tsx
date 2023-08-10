import React, { FC } from "react"
import Image from "next/image"
import aspectRatio from "@/utils/aspectRatio"
import LightEffect from "@/components/effects/LightEffect"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { ClassNameProps } from "@/types"

interface TagProps {
  name: string
  slug: string
}

interface CardProps extends ClassNameProps {
  imageUrl: string
  linkUrl: string
  title: string
  content?: string
  tags?: TagProps[]
}

const CardTutorial: FC<CardProps> = ({ imageUrl, linkUrl, tags, content, title, className, ...resPops }) => {
  return (
    <LightEffect className={twMerge(`w-full shadow-lg shadow-black/25 flex dark:shadow-black border rounded-3xl`, className)}>
      <div className={`w-full bg-gray-50 dark:bg-gray relative z-10 flex flex-col  rounded-inherit`}>
        <div className={`rounded-t-3xl overflow-hidden`}>
          <Image className={`w-full aspect-video`} src={`/thumb/thumbnail-text-long-shadow.png`} loading={`lazy`} width={500} height={aspectRatio(500, "16/9")} alt={`youtube`} />
        </div>
        <div className="p-5 text-gray-800 space-y-2 dark:text-gray-100">
          <p className={`text-lg line-clamp-1 font-bold`} dangerouslySetInnerHTML={{ __html: title }}></p>
          {content && <p className={`leading-loose line-clamp-3 mask-image-b mask-image-end-90`} dangerouslySetInnerHTML={{ __html: content }}></p>}
        </div>
        {tags?.length && (
          <div className="flex">
            {tags.map((tag: TagProps) => (
              <Link key={tag.slug} href={`/${tag.slug}`} dangerouslySetInnerHTML={{ __html: tag.name }}></Link>
            ))}
          </div>
        )}
      </div>
    </LightEffect>
  )
}

export default CardTutorial
