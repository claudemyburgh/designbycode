import Image from "next/image"
import aspectRatio from "@/utils/aspectRatio"

export default function Home() {
  return (
    <main className={`wrapper`}>
      <div className="text-7xl font-header font-black text-shadow-long-lg text-primary text-shadow-xl mt-24 max-w-md text-shadow-secondary dark:text-shadow-gray-950">
        Tutorials and Packages
      </div>

      <div className="grid grid-cols-2 md:grid-cols-12 my-12 gap-6">
        <div className="lg:col-span-6 md:row-span-2 w-full shadow-lg shadow-black/25 dark:shadow-black border border-primary-500/20 bg-gray-200 dark:bg-gray-900 rounded-3xl">
          <div className={`rounded-t-3xl overflow-hidden`}>
            <Image className={`w-full aspect-video`} src={`/thumb/thumbnail-text-long-shadow.png`} loading={`lazy`} width={500} height={aspectRatio(500, "16/9")} alt={`youtube`} />
          </div>
          <div className="p-5 text-gray-800 space-y-2 dark:text-gray-100">
            <p className={`text-lg line-clamp-1 font-bold`}>Long shadow with Tailwindcss plugin</p>
            <p className={`leading-loose line-clamp-3 mask-image-b mask-image-end-90`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At error esse et excepturi expedita fugiat laudantium neque provident quidem. Tenetur. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Accusamus cupiditate delectus quia repudiandae! Doloremque dolores ea eligendi fugiat fugit illum magni maiores minus neque,
              nesciunt, qui sequi tempora unde voluptate.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3 w-full shadow-lg shadow-black/25 dark:shadow-black border border-primary-500/20 bg-gray-200 dark:bg-gray-900 rounded-3xl">
          <div className={`rounded-t-3xl overflow-hidden`}>
            <Image className={`w-full aspect-video`} src={`/thumb/thumbnail-text-long-shadow.png`} loading={`lazy`} width={500} height={aspectRatio(500, "16/9")} alt={`youtube`} />
          </div>
          <div className="p-5 text-gray-800 dark:text-gray-100">
            <p className={`text-lg line-clamp-1 font-bold`}>Long shadow with Tailwindcss plugin</p>
          </div>
        </div>

        <div className="lg:col-span-3 w-full shadow-lg shadow-black/25 dark:shadow-black border border-primary-500/20 bg-gray-200 dark:bg-gray-900 rounded-3xl">
          <div className={`rounded-t-3xl overflow-hidden`}>
            <Image className={`w-full aspect-video`} src={`/thumb/thumbnail-text-long-shadow.png`} loading={`lazy`} width={500} height={aspectRatio(500, "16/9")} alt={`youtube`} />
          </div>
          <div className="p-5 text-gray-800 dark:text-gray-100">
            <p className={`text-lg line-clamp-1 font-bold`}>Long shadow with Tailwindcss plugin</p>
          </div>
        </div>

        <div className="lg:col-span-3  w-full shadow-lg shadow-black/25 dark:shadow-black border border-primary-500/20 bg-gray-200 dark:bg-gray-900 rounded-3xl">
          <div className={`rounded-t-3xl overflow-hidden`}>
            <Image className={`w-full aspect-video`} src={`/thumb/thumbnail-text-long-shadow.png`} loading={`lazy`} width={500} height={aspectRatio(500, "16/9")} alt={`youtube`} />
          </div>
          <div className="p-5 text-gray-800 dark:text-gray-100">
            <p className={`text-lg line-clamp-1 font-bold`}>Long shadow with Tailwindcss plugin</p>
          </div>
        </div>
        <div className="lg:col-span-3 w-full shadow-lg shadow-black/25 dark:shadow-black border border-primary-500/20 bg-gray-200 dark:bg-gray-900 rounded-3xl">
          <div className={`rounded-t-3xl overflow-hidden`}>
            <Image className={`w-full aspect-video`} src={`/thumb/thumbnail-text-long-shadow.png`} loading={`lazy`} width={500} height={aspectRatio(500, "16/9")} alt={`youtube`} />
          </div>
          <div className="p-5 text-gray-800 dark:text-gray-100">
            <p className={`text-lg line-clamp-1 font-bold`}>Long shadow with Tailwindcss plugin</p>
          </div>
        </div>
      </div>
    </main>
  )
}
