/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next';
import { prisma } from '../../lib/prisma'
import { BiPhoneCall } from 'react-icons/Bi';
import { BsChatDots } from 'react-icons/Bs';
import ProductDetails from '../../components/ProductDetails';
import Link from 'next/link';


const Product = ({ products, product }: { products: any, product: any }) => {
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

                <div className="product-detail-desc w-full sm:w-1/2">
                    <h1 className=' text-xl font-bold'>{title} - {brand}</h1>
                    <p>{description}</p>
                    <p className="text-xl text-right text-blue-600 font-bold">${price}</p>
                    <div className=' mt-10'>
                        <button
                            type="button"
                            className="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <a href="tel:+6199942413" className='mx-2'>
                                call
                            </a>
                            <BiPhoneCall size={'20px'} />
                        </button>
                        <button
                            type="button"
                            className="inline-flex mx-4 items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <Link href='/homeChat'>
                                <a className='mx-2'>
                                    Chat
                                </a>
                            </Link>
                            <BsChatDots size={'20px'} />
                        </button>
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
    return {
        props: { products: JSON.parse(JSON.stringify(products)), product: JSON.parse(JSON.stringify(product)) }
    }
}