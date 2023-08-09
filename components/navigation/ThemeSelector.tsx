"use client"

import { ComponentType, useEffect } from "react"
import { Listbox } from "@headlessui/react"
import { twJoin, twMerge } from "tailwind-merge"
import { useLocalstorageState, useMediaMatch } from "rooks"

interface ThemeProps {
  name: string
  value: string
  icon: ComponentType<any>
}

const themes: ThemeProps[] = [
  { name: "Light", value: "light", icon: LightIcon },
  { name: "Dark", value: "dark", icon: DarkIcon },
  { name: "System", value: "system", icon: SystemIcon },
]

function LightIcon(props: any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
      />
    </svg>
  )
}

function DarkIcon(props: any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}

function SystemIcon(props: any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
      />
    </svg>
  )
}

export function ThemeSelector(props: any) {
  const matchMedia = useMediaMatch("(prefers-color-scheme: dark)")
  const [theme, setTheme] = useLocalstorageState("theme", "system")

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else if (theme === "light") {
        document.documentElement.classList.remove("dark")
      } else if (matchMedia) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
    document.documentElement.setAttribute("data-theme", theme)
  }, [setTheme, theme, matchMedia])

  return (
    <Listbox as="div" value={theme} onChange={setTheme} {...props}>
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button className="h-10 w-10 hover:scale-105 text-gray-600 border border-primary rounded-l-lg rounded-r-3xl flex justify-center items-center" aria-label={theme}>
        <LightIcon className="hidden h-4 w-4 fill-primary [[data-theme=light]_&]:block" />
        <DarkIcon className="hidden h-4 w-4 fill-primary [[data-theme=dark]_&]:block" />
        <SystemIcon className="hidden h-4 w-4 fill-primary [:not(.dark)[data-theme=system]_&]:block" />
        <SystemIcon className="hidden h-4 w-4 fill-primary [.dark[data-theme=system]_&]:block" />
      </Listbox.Button>
      <Listbox.Options className="absolute top-full left-1/2 mt-2 w-36 -translate-x-1/2 space-y-1 p-1.5 text-sm font-medium  ring-0 bg-gray-100 dark:bg-gray-900 border-2 dark:border-primary border-secondary/50 rounded-3xl shadow-xl shadow-secondary dark:shadow-primary/20">
        {themes.map((themeChild) => (
          <Listbox.Option
            key={themeChild.value}
            value={themeChild.value}
            className={({ active, selected }) =>
              twJoin("flex cursor-pointer select-none items-center rounded-sm p-1", {
                // @ts-expect-error
                "text-primary-700": selected,
                "text-gray": active && !selected,
                "bg-gray": active,
              })
            }
          >
            {({ selected }) => (
              <div className={`flex group flex-1 font-semibold rounded-2xl items-center p-1.5 dark:hover:bg-primary hover:bg-secondary`}>
                <themeChild.icon className={twMerge("h-4 w-4", selected ? "fill-primary-700 group-hover:fill-primary  dark:fill-primary" : "fill-gray-300 dark:fill-gray-700 ")} />
                <div className="ml-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-50  group-hover:dark:text-primary-900">{themeChild.name}</div>
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
