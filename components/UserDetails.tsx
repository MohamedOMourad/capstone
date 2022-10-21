import React from 'react'

const UserDetails = ({ formik }: { formik: any }) => {
    return (
        <div className="bg-white rounded">
            <div className="mx-auto">
                <div className="w-full mx-auto xl:mx-0">
                    <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                        <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 ">
                            Name
                        </label>
                        <input type="text" id="username" name="username" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                        <label htmlFor="FirstName" className="pb-2 text-sm font-bold">
                            Mobile Phone Number
                        </label>
                        <input type="text" id="phoneNumber" name="phoneNumber" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                            value={formik.values.phoneNumber}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        <p className='text-red-600'>{formik.errors.title && formik.touched.title ? formik.errors.title : null}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;
