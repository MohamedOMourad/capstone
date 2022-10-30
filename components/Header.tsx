/* eslint-disable @next/next/no-img-element */
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import { useSessionContext, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { classNames } from '../constant'

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
        <div className=" flex justify-center items-center px-1 py-1 relative">
            <input
                className="text-sm leading-none text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
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

export default function Header({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) {
    const router = useRouter()
    const user = useUser();
    const { supabaseClient } = useSessionContext();
    return (
        <>
            <div className="bg-white">
                <header>
                    <Popover className="relative bg-white">
                        <div className="px-5 flex justify-between items-center">
                            {/* image logo */}
                            <div className="md:flex-1">
                                <Link href={'/'}>
                                    <a >
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            className="h-6 w-auto sm:h-8"
                                            src="https://kjwldcclontmioflpfvx.supabase.co/storage/v1/object/public/img/C2C.png"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            {/* burger Icon */}
                            <div className="my-2 -mr-2 md:hidden">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            {/* Search */}
                            <Popover.Group as="nav" className="hidden  sm:flex">
                                <Popover className="relative">
                                    <Search />
                                </Popover>
                            </Popover.Group>
                            {/* login */}
                            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                                {!user ? <button onClick={() => setOpen(true)} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                    Sign in
                                </button> :
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={"https://review2020.s3.amazonaws.com/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}
                                                    alt="Profile"
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <>
                                                            <p
                                                                className={classNames(
                                                                    active ? "bg-gray-100" : "",
                                                                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer",
                                                                    "hover:bg-gray-100"
                                                                )}
                                                            >{user?.email}</p>
                                                            <p
                                                                onClick={() => router.push('/conversations')}
                                                                className={classNames(
                                                                    active ? "bg-gray-100" : "",
                                                                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer",
                                                                    "hover:bg-gray-100"
                                                                )}
                                                            >Conversation</p>
                                                            <p
                                                                className={classNames(
                                                                    active ? "bg-gray-100" : "",
                                                                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer",
                                                                    "hover:bg-gray-100"
                                                                )}
                                                                onClick={async () => {
                                                                    await supabaseClient.auth.signOut();
                                                                    router.push('/');
                                                                }}
                                                            >
                                                                Sign out
                                                            </p>
                                                        </>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                }
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
                                                <Link href={'/'}>
                                                    <a >
                                                        <span className="sr-only">Your Company</span>
                                                        <img
                                                            className="h-6 w-auto sm:h-8"
                                                            src="https://kjwldcclontmioflpfvx.supabase.co/storage/v1/object/public/img/C2C.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            {!user ? <button onClick={() => setOpen(true)} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                                Sign in
                                            </button> :
                                                <Menu as="div" className="relative ml-3">
                                                    <div>
                                                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                            <span className="sr-only">Open user menu</span>
                                                            <img
                                                                className="h-8 w-8 rounded-full"
                                                                src={"https://review2020.s3.amazonaws.com/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}
                                                                alt="Profile"
                                                            />
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <>
                                                                        <p
                                                                            className={classNames(
                                                                                active ? "bg-gray-100" : "",
                                                                                "block px-4 py-2 text-sm text-gray-700 cursor-pointer",
                                                                                "hover:bg-gray-100"
                                                                            )}
                                                                        >{user?.email}</p>
                                                                        <p
                                                                            onClick={() => router.push('/conversations')}
                                                                            className={classNames(
                                                                                active ? "bg-gray-100" : "",
                                                                                "block px-4 py-2 text-sm text-gray-700 cursor-pointer",
                                                                                "hover:bg-gray-100"
                                                                            )}
                                                                        >Conversation</p>
                                                                        <p
                                                                            className={classNames(
                                                                                active ? "bg-gray-100" : "",
                                                                                "block px-4 py-2 text-sm text-gray-700 cursor-pointer",
                                                                                "hover:bg-gray-100"
                                                                            )}
                                                                            onClick={async () => {
                                                                                await supabaseClient.auth.signOut();
                                                                                router.push('/');
                                                                            }}
                                                                        >
                                                                            Sign out
                                                                        </p>
                                                                    </>
                                                                )}
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            }
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
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </header>
            </div>
        </>
    )
}