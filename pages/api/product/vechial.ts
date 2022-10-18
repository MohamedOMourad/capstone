import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../lib/prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { title, brand, description, price, images, location } = req.body
        switch (req.method) {
            case 'POST':
                const product = await prisma?.product.create({
                    data: {
                        title,
                        brand,
                        description,
                        price,
                        location
                    }
                })
        }
    } catch (error) {

    }
} 