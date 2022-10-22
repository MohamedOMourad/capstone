/* eslint-disable @next/next/no-img-element */
import { CarBrand } from '../constant/vehicle'
import { location } from '../constant'
import UserDetails from './UserDetails'
import { useFormik } from 'formik'
import * as Yup from "yup";
import Select from 'react-select'
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';

function VehiclesBrand({ value, onChange, options }: { value: string, onChange: Function, options: { value: string, label: string }[] }) {
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

function Location({ value, onChange, options }: { value: any, onChange: any, options: { label: string, value: string }[] }) {
    const defaultValue = (options: { value: string, label: string }[], value: string) => {
        return options ? options.find((option) => option.value === value) : ''
    }
    return (
        <Select
            value={defaultValue(options, value)}
            options={options}
            onChange={(value) => onChange(value)}
        />
    )
}

function UploadPhoto({ setImg, img, setLoading, setCounter }:
    { setImg: Function, img: string[], setLoading: Function, setCounter: Function }) {
    const handleUpload = async (event: any) => {
        setLoading(true)
        setCounter((counter: number) => counter + 1)
        const avatarFile = event.target.files[0]
        const { data, error } = await supabase.storage
            .from('img')
            .upload(`${Date.now()}`, avatarFile as File);
        if (data) {
            const { data: url } = await supabase.storage
                .from('img')
                .getPublicUrl(`${data?.path}`)
            console.log(url);
            setImg([...img, url.publicUrl])
            setLoading(false)
        } else if (error) {
            console.log(error);
        }
    }
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
                        <input
                            onChange={handleUpload}
                            type="file" className="opacity-0" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default function Vehicle() {
    const [img, setImg] = useState([])
    const [required, setRequired] = useState(false)
    const [loading, setLoading] = useState(false)
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        setLoading(false)
    }, [img])
    const formik = useFormik({
        initialValues: {
            title: '',
            brand: '',
            description: '',
            price: '',
            // imgUrl: '',
            location: '',
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
            if (img.length <= 0) {
                setRequired(true)
            } else if (img.length !== counter) {
                console.log(counter)
                setLoading(true)
            }
            else {
                setRequired(false)

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
                                <VehiclesBrand value={formik.values.brand}
                                    onChange={(value: any) => formik.setFieldValue('brand', value.value)}
                                    options={CarBrand} />
                                <p className='text-red-600'>{formik.errors.brand && formik.touched.brand ?
                                    formik.errors.brand : null}</p>
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
                                {!loading&&<UploadPhoto setImg={setImg} img={img} setLoading={setLoading} setCounter={setCounter} />}
                            </div>
                            {loading && <p className='mt-10'>loading...</p>}
                            {required && <p className='text-red-600'>upload at least one image</p>}
                            <ul role="list" className="my-10 grid grid-cols-6 gap-1 sm:grid-cols-3  lg:grid-cols-6">
                                {img.map((file,i) => (
                                    <li key={i} className="relative">
                                            <img src={file} alt="" className=" h-16  group-hover:opacity-75" />
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <h1>YOUR AD&aposS LOCATION</h1>
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