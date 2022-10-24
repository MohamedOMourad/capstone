/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import { classNames } from '../constant'
import Vehicle from '../components/Vehicle'
import { withPageAuth } from '@supabase/auth-helpers-nextjs'
import Phone from '../components/Phone'

const navigation = [
    { name: 'Vehicles', href: '#', activeStatus: 0 },
    { name: 'Properties', href: '#', activeStatus: 1 },
    { name: 'Mobile Phones', href: '#', activeStatus: 2 },
    { name: 'Electronics', href: '#', activeStatus: 3 },
    { name: 'Furniture', href: '#', activeStatus: 4 },
    { name: 'Fashion & Beauty', href: '#', activeStatus: 5 },
]

export default function Post() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeStatus, setActiveStatus] = useState(0);
    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                                        <div className="flex flex-shrink-0 items-center px-4">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <nav className="mt-5 space-y-1 px-2">
                                            {navigation.map((item, index) => (
                                                <h1
                                                    key={item.name}
                                                    onClick={() => setActiveStatus(item.activeStatus)}
                                                    className={activeStatus === index ? "text-lg border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12" :
                                                        "text-md text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"}
                                                >
                                                    {item.name}
                                                    {activeStatus === index && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                                                </h1>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
                        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                            <div className="flex flex-shrink-0 items-center px-4">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="Your Company"
                                />
                            </div>
                            <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                                {navigation.map((item, index) => (
                                    <>
                                        <h1
                                            key={item.name}
                                            onClick={() => setActiveStatus(item.activeStatus)}
                                            className={activeStatus == index ? "text-lg border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12" :
                                                "text-md text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"}
                                        >
                                            {item.name}
                                        </h1>
                                        {activeStatus == index && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                                    </>
                                ))}
                            </nav>
                        </div>

                    </div>
                </div>
                <div className="flex flex-1 flex-col md:pl-64">
                    <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <main className="flex-1">
                        <div className="py-6">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">POST YOUR AD</h1>
                            </div>
                            <hr />
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                {/* Replace with your content */}
                                <div className="py-4">
                                    {activeStatus === 0 && <Vehicle />}
                                    {activeStatus === 1 && <Vehicle />}
                                    {activeStatus === 2 && <Phone />}
                                    {activeStatus === 3 && <Vehicle />}
                                    {activeStatus === 4 && <Vehicle />}
                                    {activeStatus === 5 && <Vehicle />}
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/' });