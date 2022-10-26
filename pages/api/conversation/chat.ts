import { Image, Chat } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../lib/prisma';

type data = {
    message?: string;
    error?: string;
    errors?: { error: string }[];
    chat?: Chat;
    image?: Image
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<data>
) {
    try {
        const { name, users } = req.body
        console.log(name,users)
        switch (req.method) {
            case 'POST':
                const chat = await prisma?.chat.create({
                    data: {
                        name
                    }
                })

                for (let i = 0; i < users.length; i++) {
                    const chatUsers = await prisma.user_Chat.create({
                        data: {
                            userId: users[i],
                            chatId: chat.id
                        }
                    })
                }
                res.status(200).json({ chat })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server down!' })
    }
} 