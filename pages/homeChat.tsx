/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import io, { Socket } from 'Socket.IO-client'
let socket: Socket
const HomeChat = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState<string[]>([])

    useEffect(() => {
        socketInitializer()
    }, [])

    const socketInitializer = async () => {
        await fetch('/api/socket')
        socket = io()

        socket.on('connect', () => {
            console.log('connected')
        })

        socket.on('update-input', msg => {
            console.log(msg);
            setMessages((oldVal) => [...oldVal, msg])
        })
    }


    const sendMessage = () => {
        socket.emit('input-change', input)
    }

    const onChangeHandler = (e: any) => {
        setInput(e.target.value)
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
                            <button
                                className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                            >
                                <div
                                    className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                                >
                                    H
                                </div>
                                <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-auto h-full p-6">
                    <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                        {/* chat body */}
                        <div className="flex flex-col h-full overflow-x-auto mb-4">
                            <div className="flex flex-col h-full">
                                <div className="grid grid-cols-12 gap-y-2">
                                    {messages.map((message, i) => (
                                        <div key={i} className="col-start-1 col-end-8 p-3 rounded-lg">
                                            <div className="flex flex-row items-center">
                                                <div
                                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>{message}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                        // <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                        //     <div className="flex items-center justify-start flex-row-reverse">
                                        //         <div
                                        //             className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                        //         >
                                        //             A
                                        //         </div>
                                        //         <div
                                        //             className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                        //         >
                                        //             <div>I am ok what about you?</div>
                                        //         </div>
                                        //     </div>
                                        // </div>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* send message */}
                        <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">

                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={onChangeHandler}
                                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                    />
                                </div>
                            </div>
                            <div className="ml-4">
                                <button
                                    onClick={sendMessage}
                                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                >
                                    <span>Send</span>
                                    <span className="ml-2">
                                        <svg
                                            className="w-4 h-4 transform rotate-45 -mt-px"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeChat;
