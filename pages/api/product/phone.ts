import { Image, Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../lib/prisma';

type data = {
    message?: string;
    error?: string;
    errors?: { error: string }[];
    product?: Product,
    image?: Image
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<data>
) {
    try {
        const { title, brand, description, images, price, location, userId } = req.body
        switch (req.method) {
            case 'POST':
                const product = await prisma?.product.create({
                    data: {
                        title,
                        brand,
                        description,
                        price,
                        location,
                        categoryId: 2,
                        userId
                    }
                })

                for (let i = 0; i < images.length; i++) {
                    const image = await prisma.image.create({
                        data: {
                            imgUrl: images[i],
                            productId: product.id
                        }
                    })
                }
                res.status(200).json({ product })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server down!' })
    }
} 