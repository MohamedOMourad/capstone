/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next';
import { prisma } from '../../lib/prisma'
import { BiPhoneCall } from 'react-icons/Bi';
import ProductDetails from '../../components/ProductDetails';


const Product = ({ products, product }: { products: any, product: any }) => {
    console.log(products);
    console.log(product);
    const { images, title, description, price, brand } = product;
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="flex gap-10 mx-5">
                <div>
                    <div>
                        <Image
                            height={'500px'}
                            width={'1000px'}
                            src={images && images[index].imgUrl}
                        />
                    </div>
                    <div className="flex mt-1 gap-4">
                        {images?.map((image: any, i: any) => (
                            <Image
                                height={'50px'}
                                width={'100px'}
                                key={i}
                                src={image.imgUrl}
                                className='cursor-pointer'
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1 className=' text-xl font-bold'>{title} - {brand}</h1>
                    <p>{description}</p>
                    <p className="text-xl text-right text-blue-600 font-bold">${price}</p>
                    <div className='flex mt-10'>
                        <a href="tel:+6199942413">
                            call us
                        </a>
                        <BiPhoneCall size={'20px'} />
                    </div>
                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track ">
                        {products.map((item: any, i: number) => (
                            <ProductDetails key={i} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await prisma?.product.findMany({ include: { images: true } })
    const paths = products!.map((product) => {
        return {
            params: { slug: product.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const products = await prisma?.product.findMany({ include: { images: true } })
    const product = products?.find(product => product.id === +params?.slug!)
    console.log(product);
    return {
        props: { products: JSON.parse(JSON.stringify(products)), product: JSON.parse(JSON.stringify(product)) }
    }
}