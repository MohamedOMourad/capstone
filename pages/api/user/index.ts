import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
type data = {

}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<data>
) {
    try {
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

    }
}