"use client"

import { ThemeSelector } from "@/components/navigation/ThemeSelector"
import React, { Fragment, useState } from "react"
import Link from "next/link"
import { twJoin } from "tailwind-merge"
import { Dialog, Menu, Transition } from "@headlessui/react"
import Image from "next/image"
import LightEffect from "@/components/effects/LightEffect"

const Navigation = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false)

  function handleDeactivate() {}

  return (
    <LightEffect
      className={`wrapper card relative z-[200] shadow-2xl shadow-secondary dark:shadow-primary/20 space-x-8 my-6 min-h-[70px] flex items-center border-2 dark:border-primary border-secondary-600 justify-between dark:bg-gray-900 bg-secondary-400 rounded-full`}
    >
      <Link href={`/`} className={`flex-shrink-0`}>
        <Image src={`/designbycode.svg`} className={`h-[40px] md:h-14`} width={218} height={90} alt={`designbycode`} />
      </Link>
      <div className={`space-x-8 text-white text-lg font-semibold hidden lg:flex  text-shadow-long-sm`}>
        <Link className={``} href={`/`}>
          Home
        </Link>
        <Link className={``} href={`#`}>
          Tutorials
        </Link>
        <Menu as={`div`} className={`relative`}>
          <Menu.Button className={`flex items-center text-shadow-long-sm`}>
            Packages
            <span className={`block ml-2 text-white drop-shadow`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute top-full left-1/2 mt-3 w-48 -translate-x-1/2 space-y-1 p-2 text-sm font-medium  ring-1 ring-gray bg-white border-[4px] border-gray rounded-2xl shadow-large [text-shadow:_none]"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={twJoin(
                    "flex group flex-1  text-gray rounded-md font-semibold hover:stripes stripes-size-xs stripes-opacity-10 rounded items-center p-2 hover:bg-primary",
                    active && "text-gray bg-primary shaker"
                  )}
                  href="/packages"
                >
                  Packages
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={twJoin(
                    "flex group flex-1 shake text-gray rounded-md font-semibold hover:stripes stripes-size-xs stripes-opacity-10 rounded items-center p-2 hover:bg-primary",
                    active && "text-gray bg-primary shaker"
                  )}
                  href="/packages"
                >
                  Packages
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={twJoin(
                    "flex group flex-1 shake text-gray rounded-md font-semibold hover:stripes stripes-size-xs stripes-opacity-10 rounded items-center p-2 hover:bg-primary",
                    active && "text-gray bg-primary shaker"
                  )}
                  href="/packages"
                >
                  Packages
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      <div className={`flex space-x-4`}>
        <button
          onClick={() => setIsOpen(true)}
          type={`button`}
          className={`lg:w-[200px] w-32 flex items-center pl-2 h-10 hover:scale-105 text-white text-lg border-2 border-secondary-600 dark:border-primary rounded-r-lg rounded-l-3xl justify-start `}
        >
          <svg className={`h-5 w-5 mx-2`} fill={`currentColor`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.31 20.31">
            <path d="m8.77,12.66c-1.4.16-2.78-.32-3.77-1.32h0c-.38-.38-.69-.82-.91-1.3-.18-.38-.63-.54-1.01-.36-.38.18-.54.63-.36,1.01.3.64.71,1.22,1.21,1.72,1.16,1.16,2.71,1.79,4.32,1.79.23,0,.46-.01.69-.04.17-.02.33-.1.45-.22.17-.16.24-.39.22-.62-.02-.2-.12-.38-.28-.51-.16-.13-.35-.19-.56-.16Z" />
            <path d="m20.09,19.02l-5.64-5.64c2.69-3.23,2.49-7.99-.5-10.99-1.54-1.54-3.59-2.39-5.78-2.39S3.93.85,2.39,2.39C-.8,5.58-.8,10.76,2.39,13.94c3,3,7.76,3.19,10.99.5l5.64,5.64c.14.14.33.22.54.22s.39-.08.54-.22c.29-.3.29-.78,0-1.07ZM3.46,12.87c-1.26-1.25-1.95-2.93-1.95-4.71s.69-3.45,1.95-4.7c1.3-1.3,3-1.95,4.7-1.95s3.41.65,4.7,1.95c2.59,2.59,2.59,6.81,0,9.41s-6.82,2.59-9.41,0Z" />
          </svg>
          <span className={`font-semibold`}>Search</span>
        </button>
        <ThemeSelector className={`relative`} />

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-[300]" onClose={() => setIsOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-secondary dark:bg-gray/90 bg-opacity-60 backdrop-blur-lg" />
            </Transition.Child>

            <div className="fixed inset-0">
              <div className="flex min-h-full items-start justify-center p-10">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-lg rounded-3xl bg-secondary-100 dark:bg-gray-900 text-gray p-6 shadow-2xl shadow-secondary dark:shadow-primary/50">
                    <Dialog.Title as="h3" className="font-header text-2xl font-black inline-block py-2 text-gray dark:text-white">
                      Search
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.</p>
                    </div>

                    <div className="mt-4">
                      <button type="button" className="bg-primary font-bold rounded-3xl text-gray px-3 py-1.5" onClick={() => setIsOpen(false)}>
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </LightEffect>
  )
}

export default Navigation
