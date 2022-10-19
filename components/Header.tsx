/* eslint-disable @next/next/no-img-element */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const navigation = [
    { name: 'Vehicles', href: '#', activeStatus: 0 },
    { name: 'Properties', href: '#', activeStatus: 1 },
    { name: 'Mobile Phones', href: '#', activeStatus: 2 },
    { name: 'Electronics', href: '#', activeStatus: 3 },
    { name: 'Furniture', href: '#', activeStatus: 4 },
    { name: 'Fashion & Beauty', href: '#', activeStatus: 5 },
]

const Search = () => {
    return (
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
    );
}
const Tap = () => {
    const [activeStatus, setActiveStatus] = useState(0);
    return (
        <>
            <div className="lg:hidden relative w-11/12 mx-auto bg-white rounded">
                <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                        <polyline points="16 15 12 19 8 15" />
                    </svg>
                </div>
                <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                    {navigation.map((item) => (
                        <option key={item.name} className="text-sm text-gray-600">{item.name} </option>
                    ))}
                </select>
            </div>
            <div className="sm:w-full sm:mx-0 h-12 hidden lg:block bg-white shadow rounded">
                <ul className="flex justify-center border-b px-5">
                    {navigation.map((item, index) => (
                        <li key={item.name} onClick={() => setActiveStatus(item.activeStatus)} className={activeStatus == index ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12" : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"}>
                            <div className="flex items-center mb-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                    </svg>
                                </span>
                                <span className="ml-1 font-normal">{item.name}</span>
                            </div>
                            {activeStatus == index && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const HeroSection = () => {
    return (
        <main>
            <div className="relative bg-white pt-3">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                alt="People working on laptops"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block text-white">Take control of your</span>
                                <span className="block text-indigo-200">shopping and Sells</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function Header({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) {
    const router = useRouter()
    const user = useUser();
    return (
        <>
            <div className="bg-white">
                <header>
                    <Popover className="relative bg-white">
                        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                            {/* image logo */}
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-8 w-auto sm:h-10"
                                        src="https://tailwindui.com/img/logos/mark.svg?from-color=purple&from-shade=600&to-color=indigo&to-shade=600&toShade=600"
                                        alt=""
                                    />
                                </a>
                            </div>
                            {/* burger Icon */}
                            <div className="-my-2 -mr-2 md:hidden">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            {/* Search */}
                            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                                <Popover className="relative">
                                    <Search />
                                </Popover>
                            </Popover.Group>
                            {/* login */}
                            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                                {!user && <button onClick={() => setOpen(true)} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                    Sign in
                                </button>}
                                {!user ? <button
                                    onClick={() => setOpen(true)}
                                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                                >
                                    + SELL
                                </button> :
                                    <button
                                        onClick={() => router.push('/post')}
                                        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                                    >
                                        + SELL
                                    </button>
                                }
                            </div>
                        </div>

                        {/* burger menu */}
                        <Transition
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
                            >
                                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="px-5 pt-5 pb-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/mark.svg?from-color=purple&from-shade=600&to-color=indigo&to-shade=600&toShade=600"
                                                    alt="Your Company"
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <Search />
                                    <div className="py-6 px-5">
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
                                        <div className="mt-6">
                                            <button
                                                onClick={() => setOpen(true)}
                                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                                            >
                                                + SELL
                                            </button>
                                            <button onClick={() => setOpen(true)} className="text-center">
                                                Sign in
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </header>
                <Tap />
            </div>
            <HeroSection />
        </>

    )
}