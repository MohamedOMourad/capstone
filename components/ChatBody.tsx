import { Message } from '@prisma/client'
import { useUser } from '@supabase/auth-helpers-react'
import React from 'react'

const ChatBody = ({ formik, messages }: { formik: any, messages: Message[] }) => {
    const user = useUser()
    return (
        <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                {/* chat body */}
                <div className="flex flex-col h-full overflow-x-auto mb-4">
                    <div className="flex flex-col h-full">
                        <div className="grid grid-cols-12 gap-y-2">
                            {messages.map((message, i) => (
                                <>
                                    {user?.id === message.userId ? <div key={i} className="col-start-6 col-end-13 p-3 rounded-lg">
                                        <div className="flex items-center justify-start flex-row-reverse">
                                            <div
                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                            >
                                                A
                                            </div>
                                            <div
                                                className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                            >
                                                <div>{message.body}</div>
                                            </div>
                                        </div>
                                    </div> :
                                        <div key={i} className="col-start-1 col-end-8 p-3 rounded-lg" >
                                            <div className="flex flex-row items-center">
                                                <div
                                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>{message.body}</div>
                                                </div>
                                            </div>
                                        </div>}
                                </>




                            ))


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
                                name='msg'
                                value={formik.values.msg}
                                onChange={formik.handleChange}
                                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                            />
                        </div>
                    </div>
                    <div className="ml-4">
                        <button
                            type="button"
                            onClick={() => { formik.handleSubmit() }}
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
        </div >
    )
}

export default ChatBody
