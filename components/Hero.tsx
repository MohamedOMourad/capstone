/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';
const Hero = () => {
    return (
        <main>
            <div className="relative bg-white pt-3">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                        <div className="absolute inset-0">
                            <Image
                                layout='fill'
                                alt="Next.js logo"
                                src="https://kjwldcclontmioflpfvx.supabase.co/storage/v1/object/public/img/lucrezia-carnelos-wQ9VuP_Njr4-unsplash.jpg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 mix-blend-multiply" />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block text-white">Take control of your</span>
                                <span className="block text-white">shopping and Sells</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero
