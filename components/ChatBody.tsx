import { Message, User, User_Chat } from '@prisma/client'
import { useUser } from '@supabase/auth-helpers-react'
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import { useAppSelector } from '../redux/app/hooks';
import { createMessage } from '../utils/API';

const MessageFormik = (chatUsers: User_Chat[]) => {
    const socket = useAppSelector((state) => state.socketConnection.socket)
    const id = useAppSelector((state) => state.socketConnection.id)
    const formik = useFormik({
        initialValues: {
            msg: ''
        },
        validationSchema: Yup.object({
            msg: Yup.string().required(),
        }),
        onSubmit: async (values) => {
            const sentMessage = await createMessage({ body: values.msg, userId: id, chatId: 1 })
            socket?.emit("send_message", { users: [chatUsers[0].userId, chatUsers[1].userId], msg: sentMessage });
            formik.resetForm()
        },
    });
    return formik;
}
const ChatBody = ({ messages, chatUsers }: { messages: Message[], chatUsers: User_Chat[] }) => {
    const user = useUser()
    const formik = MessageFormik(chatUsers)


    return (
        <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                {/* chat body */}
                <div className="flex flex-col h-full overflow-x-auto mb-4">
                    <div className="flex flex-col h-full">
                        {messages.map((message, i) => (
                            <div key={i} className="grid grid-cols-12 gap-y-2">
                                {user?.id === message.userId ?
                                    <div className="col-start-6 col-end-13 p-3 rounded-lg">
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
                                    </div>
                                    :
                                    <div className="col-start-1 col-end-8 p-3 rounded-lg" >
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
                            </div>
                        ))
                        }
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
