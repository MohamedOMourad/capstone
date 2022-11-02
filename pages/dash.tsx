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
/* eslint-disable @next/next/no-img-element */
import { Chat, Message, User, User_Chat } from '@prisma/client'
import { withPageAuth } from '@supabase/auth-helpers-nextjs'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import ChatBody from '../components/ChatBody'
import { prisma } from '../lib/prisma'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { openSocket } from '../redux/socket io/socket'
import { Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    Bars3BottomLeftIcon,
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Example({ user, chats }: {
    user: (User & { chats: User_Chat[] }),
    chats: (Chat & { messages: Message[]; users: User_Chat[]; })[]
}) {
    const dispatch = useAppDispatch()
    const socket = useAppSelector((state) => state.socketConnection.socket)
    const [messageList, setMessageList] = useState<Message[]>([]);
    const [chatUsers, setChatUsers] = useState<User_Chat[]>([]);
    const [activeChat, setActiveChat] = useState(false);
    console.log(socket);
    useEffect(() => {
        if (user) dispatch(openSocket(user.id));
    }, [user]);

    useEffect(() => {
        socket?.emit("join_room", user.id);
    }, [])

    useEffect(() => {
        socket?.on("receive_message", (data) => {
            console.log(data)
            setMessageList((list) => [...list, data]);
        });
    }, []);

    const getSelectedChat = (id: number) => {
        // console.log(id);
        const selectedChat = chats.find((chat) => chat.id === id)
        console.log(selectedChat)
        setChatUsers(selectedChat?.users!)
        setMessageList(selectedChat?.messages!)
        setActiveChat(true)
    }
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
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
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-14 right-0 -mr-12 pt-2">
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
                                    <div className="flex flex-shrink-0 items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                        <nav className="space-y-1 px-2">
                                            {user.chats.map((chat) => (
                                                <button
                                                    key={chat.id}
                                                    onClick={() => getSelectedChat(chat.chatId)}
                                                    className="flex flex-row items-center text-indigo-100 hover:bg-indigo-600 rounded-xl p-2"
                                                >
                                                    <div
                                                        className="flex items-center justify-center h-8 w-12 bg-indigo-200 rounded-full"
                                                    >
                                                        U
                                                    </div>
                                                    <div className="ml-2 text-sm font-semibold">user:{user.id}</div>
                                                </button>))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col h-[90vh]">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-grow flex-col overflow-y-auto bg-indigo-700 pt-5">
                        <div className="flex flex-shrink-0 items-center px-4">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                                alt="Your Company"
                            />
                        </div>
                        <div className="mt-5 flex flex-1 flex-col">
                            <nav className="flex-1 space-y-1 px-2 pb-4">
                                {user.chats.map((chat) => (
                                    <button
                                        key={chat.id}
                                        onClick={() => getSelectedChat(chat.chatId)}
                                        className="flex flex-row items-center text-indigo-100 hover:bg-indigo-500 rounded-xl p-2"
                                    >
                                        <div
                                            className="flex items-center justify-center h-8 w-12 bg-indigo-200 rounded-full"
                                        >
                                            U
                                        </div>
                                        <div className="ml-2 text-sm font-semibold">user:{user.id}</div>
                                    </button>))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col md:pl-64">
                    <button
                        type="button"
                        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <main>
                        <div className='h-[80vh]'>
                        {activeChat && <ChatBody chatUsers={chatUsers} messages={messageList} />}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
};


export const getServerSideProps: GetServerSideProps = withPageAuth({
    redirectTo: '/',
    async getServerSideProps(ctx, supabase) {
        // Access the user object
        const {
            data: { user }
        } = await supabase.auth.getUser();
        const logUser = await prisma.user.findFirst({ where: { id: user?.id }, include: { chats: true } })
        const chats = await prisma.chat.findMany({ include: { messages: true, users: true } })
        return { props: { user: JSON.parse(JSON.stringify(logUser)), chats: JSON.parse(JSON.stringify(chats)) } };
    }
});