import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
                    <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
                        &copy; 2020 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
