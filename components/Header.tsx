/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useUser } from '@supabase/auth-helpers-react';

const navigation = [
    { name: 'Vehicles', href: '#' },
    { name: 'Properties', href: '#' },
    { name: 'Mobile Phones', href: '#' },
    { name: 'Electronics', href: '#' },
    { name: 'Furniture', href: '#' },
    { name: 'Fashion & Beauty', href: '#' },
]

export default function Header({ setOpen }: { setOpen: any }) {
    const user = useUser();
    console.log(user);
    return (
        <div className="relative overflow-hidden bg-gray-50">
            <div className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full" aria-hidden="true">
                <div className="relative mx-auto h-full max-w-7xl">
                    <svg
                        className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                        className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                    >
                        <defs>
                            <pattern
                                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
                    </svg>
                </div>
            </div>

            <div className="relative pt-6 pb-16 sm:pb-24">
                <Popover>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                            <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                                <div className="flex w-full items-center justify-between md:w-auto">
                                    <Link href="/">
                                        <a>
                                            <span className="sr-only">Your Company</span>
                                            <img
                                                className="h-8 w-auto sm:h-10"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                alt=""
                                            />
                                        </a>
                                    </Link>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Open main menu</span>
                                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex md:space-x-5">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            {user === null && <div className="hidden md:absolute md:inset-y-0 md:right-20 md:flex md:items-center md:justify-end">
                                <span className="inline-flex rounded-md shadow">
                                    <button
                                        onClick={() => setOpen(true)}
                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-gray-50"
                                    >
                                        Log in
                                    </button>
                                </span>
                            </div>}
                            <div className="hidden md:absolute md:inset-y-0 md:-right-0 md:flex md:items-center md:justify-end">
                                <span className="inline-flex rounded-md shadow">
                                    <button
                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-gray-50"
                                        onClick={() => setOpen(true)}
                                    >
                                        Sell +
                                    </button>
                                </span>
                            </div>
                        </nav>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                        >
                            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                                <div className="flex items-center justify-between px-5 pt-4">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <button
                                    className=" inline-block w-1/2 bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                                    onClick={() => setOpen(true)}
                                >
                                    Log in
                                </button>
                                <button
                                    className="inline-block w-1/2 bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                                    onClick={() => setOpen(true)}
                                >
                                    Sell

                                </button>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
                    <div className="text-center">
                        <div className="bg-white lg:max-w-[384px] md:max-w-[720px] w-full shadow rounded mx-auto px-6 ">
                            <div className=" flex justify-start items-center py-7 relative">
                                <input
                                    className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
                                    type="text"
                                    placeholder="Search"
                                />
                                <svg
                                    className="absolute right-3 z-10 cursor-pointer"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                                        stroke="#4B5563"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21 21L15 15"
                                        stroke="#4B5563"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
