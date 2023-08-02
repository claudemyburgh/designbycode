"use client"

import { ThemeSelector } from "@/components/navigation/ThemeSelector"
import React, { Fragment, useState } from "react"
import Link from "next/link"
import { twJoin } from "tailwind-merge"
import { Dialog, Menu, Transition } from "@headlessui/react"

const Navigation = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false)

  function handleDeactivate() {}

  return (
    <div className={`wrapper relative z-[200] space-x-8 my-8 flex items-center justify-between`}>
      <Link href={`/`} className={twJoin(`shake font-header bg-primary shadow-block hover:shadow-large2 text-gray p-3 text-4xl font-black`)}>
        DesignByCode
      </Link>
      <div className={`space-x-8  text-lg font-semibold hidden md:flex dark:[text-shadow:_3px_3px_1px_black]`}>
        <Link className={`shake`} href={`/`}>
          Home
        </Link>
        <Link className={`shake`} href={`#`}>
          Service
        </Link>
        <Menu as={`div`} className={`relative`}>
          <Menu.Button className={`flex items-center shake dark:[text-shadow:_3px_3px_1px_black]`}>
            Free Stuff
            <span className={`shadow-block-xsmall bg-primary block ml-2 text-gray`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
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
                  className={twJoin("flex group flex-1 shake text-gray font-semibold rounded items-center p-2 hover:bg-tri-300/20", active && "text-primary-700 bg-alt2/20 shaker")}
                  href="/packages"
                >
                  Packages
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={twJoin("flex group flex-1 shake text-gray font-semibold rounded items-center p-2 hover:bg-tri-300/20", active && "text-primary-700 bg-alt2/20 shaker")}
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
                    "flex group flex-1 shake text-gray font-semibold rounded items-center p-1.5 hover:bg-tri-300/20",
                    active && "text-primary-700 bg-alt2/20 shaker"
                  )}
                  href="/packages"
                >
                  Packages
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <Link className={`shake`} href={`#`}>
          Themes
        </Link>
        <Link className={`shake`} href={`#`}>
          Graphics
        </Link>
        <Link className={`shake`} href={`#`}>
          Contact Us
        </Link>
      </div>

      <div className={`flex space-x-4`}>
        <ThemeSelector className={`relative`} />
        <button onClick={() => setIsOpen(true)} type={`button`} className={`shadow-block-small shake bg-white hover:scale-105 h-10 w-[200px] text-gray flex items-center`}>
          <svg className={`h-5 w-5 mx-2`} fill={`currentColor`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.31 20.31">
            <path d="m8.77,12.66c-1.4.16-2.78-.32-3.77-1.32h0c-.38-.38-.69-.82-.91-1.3-.18-.38-.63-.54-1.01-.36-.38.18-.54.63-.36,1.01.3.64.71,1.22,1.21,1.72,1.16,1.16,2.71,1.79,4.32,1.79.23,0,.46-.01.69-.04.17-.02.33-.1.45-.22.17-.16.24-.39.22-.62-.02-.2-.12-.38-.28-.51-.16-.13-.35-.19-.56-.16Z" />
            <path d="m20.09,19.02l-5.64-5.64c2.69-3.23,2.49-7.99-.5-10.99-1.54-1.54-3.59-2.39-5.78-2.39S3.93.85,2.39,2.39C-.8,5.58-.8,10.76,2.39,13.94c3,3,7.76,3.19,10.99.5l5.64,5.64c.14.14.33.22.54.22s.39-.08.54-.22c.29-.3.29-.78,0-1.07ZM3.46,12.87c-1.26-1.25-1.95-2.93-1.95-4.71s.69-3.45,1.95-4.7c1.3-1.3,3-1.95,4.7-1.95s3.41.65,4.7,1.95c2.59,2.59,2.59,6.81,0,9.41s-6.82,2.59-9.41,0Z" />
          </svg>
          <span className={`font-semibold text-lg`}>Search</span>
        </button>

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
              <div className="fixed inset-0 bg-secondary bg-opacity-60 backdrop-blur-lg" />
            </Transition.Child>

            <div className="fixed inset-0 ">
              <div className="flex min-h-full items-center justify-center p-10 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-lg shadow-block bg-white text-gray p-6">
                    <Dialog.Title as="h3" className="font-header text-2xl absolute -top-7 -left-3 -rotate-6 font-black inline-block shadow-block-xsmall py-2 px-4 text-gray">
                      Search
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.</p>
                    </div>

                    <div className="mt-4">
                      <button type="button" className="shadow-block-small bg-rose-500 shake font-bold hover:shadow-small2 text-gray px-3 py-1.5" onClick={() => setIsOpen(false)}>
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
    </div>
  )
}

export default Navigation
