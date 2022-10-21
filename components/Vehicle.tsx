import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { CarBrand } from '../constant/vehicle'
import { classNames, location } from '../constant'
import UserDetails from './UserDetails'
import { useFormik } from 'formik'
import * as Yup from "yup";


// function VehiclesBrand({ formik, brand, setBrand }: {
//     formik: any,
//     brand: { id: number, name: string } | undefined,
//     setBrand: Dispatch<SetStateAction<{
//         id: number;
//         name: string;
//     } | undefined>>
// }
// ) {
//     return (
//         <Listbox value={formik.values.brand}
//             onChange={formik.handleChange}
//         >
//             {({ open }) => (
//                 <>
//                     <Listbox.Label className="block text-sm font-medium text-gray-700">Brand</Listbox.Label>
//                     <div className="relative mt-1">
//                         <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
//                             <span className="block truncate">{!brand?.name ? 'select' : brand?.name}</span>
//                             <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                                 <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                             </span>
//                         </Listbox.Button>
//                         <Transition
//                             show={open}
//                             as={Fragment}
//                             leave="transition ease-in duration-100"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                         >
//                             <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                                 {CarBrand.map((car) => (
//                                     <Listbox.Option
//                                         key={car.id}
//                                         className={({ active }) =>
//                                             classNames(
//                                                 active ? 'text-white bg-indigo-600' : 'text-gray-900',
//                                                 'relative cursor-default select-none py-2 pl-3 pr-9'
//                                             )
//                                         }
//                                         value={car}
//                                     >
//                                         <span className='font-norma'>
//                                             {car.name}
//                                         </span>
//                                     </Listbox.Option>
//                                 ))}
//                             </Listbox.Options>
//                         </Transition>
//                         <p className='text-red-600'>{formik.errors.brand && formik.touched.brand ?
//                             formik.errors.brand : null}</p>
//                     </div>
//                 </>
//             )}
//         </Listbox>
//     )
// }
function VehiclesBrand({ formik, brand, setBrand }: {
    formik: any,
    brand: { id: number, name: string } | undefined,
    setBrand: Dispatch<SetStateAction<{
        id: number;
        name: string;
    } | undefined>>
}
) {
    return (
        <Listbox value={formik.values.brand}
            onChange={formik.handleChange}
        >
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">Brand</Listbox.Label>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                            <span className="block truncate">{!brand?.name ? 'select' : brand?.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>
                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {CarBrand.map((car) => (
                                    <Listbox.Option
                                        key={car.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={car}
                                    >
                                        <span className='font-norma'>
                                            {car.name}
                                        </span>
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                        <p className='text-red-600'>{formik.errors.brand && formik.touched.brand ?
                            formik.errors.brand : null}</p>
                    </div>
                </>
            )}
        </Listbox>
    )
}






















function Location({ formik, selectedLocation, setSelectedLocation }: {
    formik: any,
    selectedLocation: { id: number, name: string } | undefined,
    setSelectedLocation: any
}) {
    return (
        <Listbox value={location} onChange={setSelectedLocation}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium mt-8">Location</Listbox.Label>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                            <span className="block truncate">{!selectedLocation?.name ? 'select' : selectedLocation?.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {location.map((loc) => (
                                    <Listbox.Option
                                        key={loc.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={loc}
                                    >
                                        <span className='font-normal'>
                                            {loc.name}
                                        </span>
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                        <p className='text-red-600'>{formik.errors.location && formik.touched.location ?
                            formik.errors.location : null}</p>
                    </div>
                </>
            )}
        </Listbox>
    )
}
function UploadPhoto() {
    return (
        <div className="rounded-lg shadow-xl bg-gray-50 ">
            <div className="m-4">
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                    clipRule="evenodd" />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                Select a photo</p>
                        </div>
                        <input type="file" className="opacity-0" />
                    </label>
                </div>
            </div>
        </div>
    )
}
export default function Vehicle() {
    const [brand, setBrand] = useState<{ id: number, name: string }>();
    const [selectedLocation, setSelectedLocation] = useState<{ id: number, name: string }>();
    // const [required, setRequired] = useState(false);

    const formik = useFormik({
        initialValues: {
            title: '',
            brand: brand,
            description: '',
            price: '',
            // imgUrl: [],
            location: selectedLocation?.name,
            phoneNumber: '',
            categoryId: 1,
            userId: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('required'),
            brand: Yup.string().required('required'),
            description: Yup.string().required('required'),
            price: Yup.string().required('required'),
            // imgUrl: Yup.string().required('required'),
            location: Yup.string().required('required'),
            phoneNumber: Yup.string().required('required')
        }),
        onSubmit: async (values) => {
            console.log(values.brand);
            console.log(values.location);
            // if (!values.brand || !values.location) {
            //     setRequired(true)
            // } else {
            //     console.log(values);
            // }
            console.log(values);
        }
    })
    return (
        <form>
            <h1>INCLUDE SOME DETAILS</h1>
            <div className="bg-white">
                <div className="bg-white rounded">
                    <div className="mx-auto">
                        <div className="w-full mx-auto xl:mx-0">
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <label htmlFor="title" className="pb-2 text-sm font-bold text-gray-800 ">
                                    Ad title
                                </label>
                                <input type="text" id="title" name="title" required
                                    value={formik.values.title}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                />
                                <p className='text-red-600'>{formik.errors.title && formik.touched.title ? formik.errors.title : null}</p>
                            </div>
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <VehiclesBrand formik={formik} brand={brand} setBrand={setBrand} />
                                {/* <p className=' text-red-600'>{required && 'required'}</p> */}
                            </div>
                            <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                                <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 ">
                                    Description
                                </label>
                                <textarea id="description" name="description" required className="bg-transparent border border-gray-300   pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    rows={5} />
                                <p className="w-full text-right text-xs pt-1 ">Character Limit: 200</p>
                                <p className='text-red-600'>{formik.errors.description && formik.touched.description ?
                                    formik.errors.description : null}</p>
                            </div>
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <label htmlFor="FirstName" className="pb-2 text-sm font-bold">
                                    SET A PRICE
                                </label>
                                <input type="text" id="price" name="price" required
                                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <p className='text-red-600'>{formik.errors.price && formik.touched.price ? formik.errors.price : null}</p>
                            </div>
                            <h1 className='mt-8'>UPLOAD UP TO 6 PHOTOS</h1>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-8">
                                <UploadPhoto />
                                <UploadPhoto />
                                <UploadPhoto />
                                <UploadPhoto />
                                <UploadPhoto />
                                <UploadPhoto />
                            </div>
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <h1>YOUR AD&aposS LOCATION</h1>
                                <Location formik={formik} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
                                {/* <p className=' text-red-600'>{required && 'required'}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-10' />
                <h1>REVIEW YOUR DETAILS</h1>
                <UserDetails formik={formik} />
            </div>
            <div className='mt-8'>
                <button
                    type="button"
                    onClick={() => { formik.handleSubmit() }}
                    className="flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    POST
                </button>
            </div>
        </form>
    );
}