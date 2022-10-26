import { Image, Chat, Message } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../lib/prisma';

type data = {
    messages?: string;
    error?: string;
    errors?: { error: string }[];
    message?: Message;
    image?: Image
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<data>
) {
    try {
        const { body, userId, chatId } = req.body
        switch (req.method) {
            case 'POST':
                const message = await prisma?.message.create({
                    data: {
                        body,
                        userId,
                        chatId
                    }
                })

                res.status(200).json({ message })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ messages: 'server down!' })
    }
} 