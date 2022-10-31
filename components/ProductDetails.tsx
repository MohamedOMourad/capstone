/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import { Product } from '@prisma/client';


const ProductDetails = ({ product }: { product: any }) => {
    return (
        <div>
            <Link href={`/product/${product.id}`}>
                <div className=" product-card ">
                    <div style={{ backgroundImage: `url(${product.images && product.images[0].imgUrl})` }} className='bg-cover bg-center w-[250px] h-[200px]  overflow-hidden product-image'/>
                    <p className="product-name">{product.title}</p>
                    <p className="product-price">${product.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductDetails;