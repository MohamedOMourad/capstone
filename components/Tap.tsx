import React, { useState } from 'react';

const navigation = [
    { name: 'All', href: '#', activeStatus: 0 },
    { name: 'Vehicles', href: '#', activeStatus: 1 },
    { name: 'Properties', href: '#', activeStatus: 2 },
    { name: 'Mobile Phones', href: '#', activeStatus: 3 },
    { name: 'Electronics', href: '#', activeStatus: 4 },
    { name: 'Furniture', href: '#', activeStatus: 5 },
    { name: 'Fashion & Beauty', href: '#', activeStatus: 6 },
]

const Tap = ({ filterProducts }: { filterProducts: Function }) => {
    const [activeStatus, setActiveStatus] = useState(0);
    return (
        <>
            <div className="lg:hidden relative w-11/12 mx-auto bg-white rounded">
                <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                        <polyline points="16 15 12 19 8 15" />
                    </svg>
                </div>
                <select onChange={e => filterProducts(e.target.value)} aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                    {navigation.map((item) => (
                        <option key={item.activeStatus} className="text-sm text-gray-600">{item.name} </option>
                    ))}
                </select>
            </div>
            <div className="sm:w-full sm:mx-0 h-12 hidden lg:block bg-white shadow rounded">
                <ul className="flex justify-center border-b px-5">
                    {navigation.map((item, index) => (
                        <li key={item.name} onClick={() => { setActiveStatus(item.activeStatus), filterProducts(item.name) }} className={activeStatus == index ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12" : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"}>
                            <div className="flex items-center mb-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                    </svg>
                                </span>
                                <span className="ml-1 font-normal">{item.name}</span>
                            </div>
                            {activeStatus == index && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Tap
