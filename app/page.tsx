import CardTutorial from "@/components/cards/CardTutorial"

export default function Home() {
  return (
    <main className={`wrapper`}>
      <div className="text-7xl font-header font-black text-shadow-long-lg text-primary text-shadow-xl mt-24 max-w-md text-shadow-secondary dark:text-shadow-gray-950">
        Tutorials and Packages
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 my-12 gap-6">
        {Array(5)
          .fill(0, 0)
          .map((_, index: number) => (
            <CardTutorial className={`first:lg:col-span-6 first:lg:row-span-2 lg:col-span-3`} key={index} imageUrl={`/`} linkUrl={`/`} title={"First title"} />
          ))}
      </div>
    </main>
  )
}
