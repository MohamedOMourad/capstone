import { Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../lib/prisma';

type data = {
    message?: string;
    error?: string;
    errors?: { error: string }[];
    product?: Product,
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<data>
) {
    try {
        const { title, brand, description, images, price, location } = req.body
        switch (req.method) {
            case 'POST':
                const product = await prisma?.product.create({
                    data: {
                        title,
                        brand,
                        description,
                        price,
                        location,
                        categoryId: 1,
                        userId: '1'
                    }
                })
        }
    } catch (error) {

    }
} 