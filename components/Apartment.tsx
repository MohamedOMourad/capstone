/* eslint-disable @next/next/no-img-element */
import { ApartmentType } from '../constant/Apartment'
import { location } from '../constant'
import UserDetails from './UserDetails'
import { useFormik } from 'formik'
import * as Yup from "yup";
import Select from 'react-select'
import { useEffect, useState } from 'react';
import { useUser } from '@supabase/auth-helpers-react';
import { createApartmentAD } from '../utils/API';
import Location from './Location';
import UploadPhoto from './UploadPhoto';
import { useRouter } from 'next/router';

function ApartmentTypes({ value, onChange, options }: { value: string, onChange: Function, options: { value: string, label: string }[] }) {
    const defaultValue = (options: { value: string, label: string }[], value: string) => {
        return options ? options.find((option) => option.value === value) : ''
    }
    return (
        <Select
            value={defaultValue(options, value)}
            onChange={(value) => onChange(value)}
            options={options}
        />
    )
}

export default function Apartment() {
    const [images, setImg] = useState<string[]>([])
    const [required, setRequired] = useState(false)
    const [loading, setLoading] = useState(false)
    const [counter, setCounter] = useState(0)
    const user = useUser()
    const router = useRouter()
    useEffect(() => {
        setLoading(false)
    }, [images])
    const formik = useFormik({
        initialValues: {
            title: '',
            type: '',
            area: '',
            bedrooms: '',
            bathrooms: '',
            level: '',
            description: '',
            price: '',
            location: '',
            phoneNumber: '',
            userId: user?.id
        },
        validationSchema: Yup.object({
            title: Yup.string().required('required'),
            type: Yup.string().required('required'),
            description: Yup.string().required('required'),
            price: Yup.string().required('required'),
            location: Yup.string().required('required'),
            phoneNumber: Yup.string().required('required')
        }),
        onSubmit: async (values) => {
            if (images.length <= 0) {
                setRequired(true)
            } else if (images.length !== counter) {
                setLoading(true)
            }
            else {
                setRequired(false)
                await createApartmentAD({ ...values, images })
                // console.log(values)
                // router.push('/')
                // formik.resetForm()
            }
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
                                <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 ">
                                    Type
                                </label>
                                <ApartmentTypes value={formik.values.type}
                                    onChange={(value: any) => formik.setFieldValue('type', value.value)}
                                    options={ApartmentType} />
                                <p className='text-red-600'>{formik.errors.type && formik.touched.type ?
                                    formik.errors.type : null}</p>
                            </div>
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <label htmlFor="title" className="pb-2 text-sm font-bold text-gray-800 ">
                                    Area (m²)
                                </label>
                                <input type="number" min={0} id="area" name="area" required
                                    value={formik.values.area}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                />
                                <p className='text-red-600'>{formik.errors.area && formik.touched.area ? formik.errors.area : null}</p>
                            </div>
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <label htmlFor="title" className="pb-2 text-sm font-bold text-gray-800 ">
                                    Bedrooms
                                </label>
                                <input type="number" min="0" id="bedrooms" name="bedrooms" required
                                    value={formik.values.bedrooms}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                />
                                <p className='text-red-600'>{formik.errors.bedrooms && formik.touched.bedrooms ? formik.errors.bedrooms : null}</p>
                            </div>
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <label htmlFor="title" className="pb-2 text-sm font-bold text-gray-800 ">
                                    Bathrooms
                                </label>
                                <input type="number" min="0" id="bathrooms" name="bathrooms" required
                                    value={formik.values.bathrooms}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                />
                                <p className='text-red-600'>{formik.errors.bathrooms && formik.touched.bathrooms ? formik.errors.bathrooms : null}</p>
                            </div>
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <label htmlFor="title" className="pb-2 text-sm font-bold text-gray-800 ">
                                    Level
                                </label>
                                <input type="number" min="0" id="level" name="level" required
                                    value={formik.values.level}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                />
                                <p className='text-red-600'>{formik.errors.level && formik.touched.level ? formik.errors.level : null}</p>
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
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                {!loading && <UploadPhoto setImg={setImg} img={images} setLoading={setLoading} setCounter={setCounter} />}
                            </div>
                            {loading && <p className='mt-10'>loading...</p>}
                            {required && <p className='text-red-600'>upload at least one image</p>}
                            <ul role="list" className="my-10 grid grid-cols-6 gap-1 sm:grid-cols-3  lg:grid-cols-6">
                                {images.map((image, i) => (
                                    <li key={i} className="relative">
                                        <img src={image} alt="" className=" h-16  group-hover:opacity-75" />
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <h1>LOCATION</h1>
                                <Location value={formik.values.location} options={location}
                                    onChange={((value: any) => formik.setFieldValue('location', value.value))} />
                                <p className='text-red-600'>{formik.errors.location && formik.touched.location ?
                                    formik.errors.location : null}</p>
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