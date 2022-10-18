import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { userValidation } from "../../../utils/validation";
type data = {
    message?: string;
    error?: { error: string }[];
    user?: User
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<data>
) {
    switch (req.method) {
        case 'POST':
            try {
                const error = await userValidation(req.body)
                if (error.length > 0) {
                    return res.status(400).json({ error })
                }
                const { id, email, firstName, lastName }: User = req.body
                const user = await prisma.user.create({
                    data: {
                        id,
                        email,
                        firstName,
                        lastName,
                    }
                })
            } catch (error) {
                console.log(error)
                res.status(500).json({ message: "Server Is Down!" })
            }
            break;
        default:
            res.status(500).json({ message: "Wrong End Point!" })
    }

}