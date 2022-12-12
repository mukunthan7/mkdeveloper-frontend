import { MdPhone, MdMail } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { useState } from 'react'
import Loader from '../components/Loader'

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(true)
    const onSubmit = data => {
        window.location.href = `mailto:mukunthanm079@gmail.com?subject=${data.subject}&body=${data.message} By ${data.name}`
    };

    setTimeout(() => {
        setLoading(false)
    }, 500)

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen bg-black'>
                <Loader />
            </div>
        )
    }
    return (
        <div className='pt-40 min-h-screen bg-black'>
            <h1 className='text-center uppercase text-xl tracking-[10px] text-white'>Contact</h1>
            <div className="flex flex-col justify-center items-center mt-10 text-white">
                <h1 className='text-xl md:text-2xl font-Poiret text-center'>I have got just what you need. <span className='border-b-2 border-[#c2d167]'>Lets Talk</span>.</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                    <MdPhone className='text-5xl mr-5 text-[#c2d167] animate-pulse' />
                    <h1 className='text-xl md:text-2xl font-Mont text-center text-white'>+91 9629175812</h1>
                </div>
                <div className="flex justify-center items-center">
                    <MdMail className='text-5xl mr-5 text-[#c2d167] animate-pulse' />
                    <h1 className='text-xl md:text-2xl font-Mont text-center text-white'>
                        mukunthanm079@gmail.com
                    </h1>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center text-center mt-10 mx-5'>
                <input {...register("name")} className='px-4 pr-40 py-3 md:pr-56 mb-2 bg-gray-700 focus:outline focus:outline-2 focus:outline-[#bfce65] rounded-md focus:text-white text-white' type="text" placeholder="Name" />
                <input {...register("email")} className='px-4 pr-40 py-3 md:pr-56 mb-2 bg-gray-700 focus:outline focus:outline-2 focus:outline-[#bfce65] rounded-md focus:text-white text-white' type="email" placeholder="Email" />
                <input {...register("subject")} className='px-4 pr-40 py-3 md:pr-56 mb-2 bg-gray-700 focus:outline focus:outline-2 focus:outline-[#bfce65] rounded-md focus:text-white text-white' type="text" placeholder="Subject" />
                <textarea {...register("message")} className='pr-44 pl-8 py-3 md:pr-56 h-40 mb-4 bg-gray-700 focus:outline focus:outline-2 focus:outline-[#bfce65] rounded-md focus:text-white text-white' placeholder="Message"></textarea>
                <button type='submit' className='bg-[#bfce65] px-36 py-3 rounded-md'>Send</button>
            </form>
        </div>
    )
}

export default Contact