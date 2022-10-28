/* eslint-disable @next/next/no-img-element */
import { Chat, Message, User, User_Chat } from '@prisma/client'
import { withPageAuth } from '@supabase/auth-helpers-nextjs'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import ChatBody from '../components/ChatBody'
import { prisma } from '../lib/prisma'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { openSocket } from '../redux/socket io/socket'

const Conversation = ({ user, chats }: {
    user: (User & { chats: User_Chat[] }),
    chats: (Chat & { messages: Message[]; users: User_Chat[]; })[]
}) => {
    const dispatch = useAppDispatch()
    const socket = useAppSelector((state) => state.socketConnection.socket)
    const [messageList, setMessageList] = useState<Message[]>([]);
    const [chatUsers, setChatUsers] = useState<User_Chat[]>([]);
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
    }
    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                {/* users */}
                <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                    {/* QuickChat */}
                    <div className="flex flex-row items-center justify-start h-12 w-full">
                        <div
                            className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                ></path>
                            </svg>
                        </div>
                        <div className="ml-2 font-bold text-2xl">QuickChat</div>
                    </div>
                    {/* users */}
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">

                            {user.chats.map((chat) => (
                                <button
                                    key={chat.id}
                                    onClick={() => getSelectedChat(chat.chatId)}
                                    className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                                >
                                    <div
                                        className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                                    >
                                        U
                                    </div>
                                    <div className="ml-2 text-sm font-semibold">user:{user.id}</div>
                                </button>))}
                        </div>
                    </div>
                </div>
                {/* <ChatBody formik={formik} messages={messages} /> */}
                <ChatBody chatUsers={chatUsers} messages={messageList} />
            </div>
        </div>
    );
}

export default Conversation;

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