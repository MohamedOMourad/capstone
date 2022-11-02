import React from 'react'

const Footer = () => {
    return (
        <div className="flex justify-center items-center bg-gray-50 p-6 w-screen h-8 relative z-50">
            <p className="mt-20 min-h-10 text-center text-gray-400 md:order-1 md:mt-0">
                &copy; {new Date().getFullYear()} <span className=' text-blue-500'>C</span><span className='text-lg text-green-400'>2</span><span className=' text-blue-500'>C</span> - All Rights Reserved
            </p>
        </div>
    )
}

export default Footer
