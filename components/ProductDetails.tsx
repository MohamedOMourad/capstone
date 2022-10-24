/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import { Product } from '@prisma/client';


const ProductDetails = ({ product }: { product: any }) => {
    return (
        <div>
            <Link href={`/product/${product.id}`}>
                <div className="product-card">
                    <img
                        src={product.images && product.images[0].imgUrl}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className="product-name">{product.title}</p>
                    <p className="product-price">${product.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductDetails;