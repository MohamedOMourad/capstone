/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Product } from "@prisma/client";
import React, { useState } from "react";
import Image from 'next/image'
import { classNames } from "../constant";
import Link from "next/link";

export default function Advertise({ products }: { products: Product[] }) {
    console.log(products)
    const [isLoading, setLoading] = useState(true)
    return (
        <>
            <div className="bg-gray-100 ">
                {/* Remove py-8 */}
                <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                        {products.map((product: any, i: any) => (
                            <div key={i} className="mx-2 w-72 lg:mb-0 mb-8 ">
                                <Link href={`product/${product.id}`}>
                                    <a className="group">
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-5 xl:aspect-h-3">
                                            <Image
                                                alt=""
                                                src={product.images[0].imgUrl}
                                                layout="fill"
                                                objectFit="cover"
                                                className={classNames(
                                                    'duration-700 ease-in-out group-hover:opacity-75  max-h-20',
                                                    isLoading
                                                        ? 'scale-110 blur-2xl grayscale max-h-20'
                                                        : 'scale-100 blur-0 grayscale-0  max-h-20'
                                                )}
                                                onLoadingComplete={() => setLoading(false)}
                                            />
                                        </div>

                                        <div className="bg-white">
                                            <div className="p-4">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h2 className="text-lg font-semibold">{product.title}</h2>
                                                    <p className="text-s  text-gray-600">{product.brand}</p>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-2">{product.description}</p>
                                                <div className="flex items-center justify-between py-4">
                                                    <h2 className="text-indigo-700 text-xs font-semibold">{product.location}</h2>
                                                    <h3 className="text-indigo-700 text-xl font-semibold">${product.price}</h3>
                                                </div>
                                                <p className="text-xs text-right text-gray-600 ">4 days ago</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
