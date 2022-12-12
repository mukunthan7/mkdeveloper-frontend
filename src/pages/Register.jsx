import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const initialState = {
    name: '',
    email: '',
    password: ''
}

const Register = () => {

    const navigate = useNavigate()

    const [Register, setRegister] = useState(initialState)

    const handleInput = (e) => {
        setRegister({
            ...Register,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Register)
        })
        await res.json()
        if (res.ok) {
            navigate('/login')
        }
        setRegister(initialState)
    }

    return (
        <div className='min-h-screen bg-black z-0'>
            <div className='flex flex-col max-w-sm mx-auto pt-20 md:max-w-md'>
                <div className='flex flex-col break-words bg-white border-2 shadow-lg shadow-white mt-20 rounded-lg'>
                    <div className='bg-[#bfce65] text-black  font-bold tracking-widest text-center py-5 px-6 mb-0'>
                        Register
                    </div>
                    <form onSubmit={handleSubmit} className='py-10 px-5'>
                        <div className='flex flex-wrap mb-6'>
                            <label className='block text-black text-sm font-bold mb-2'>
                                UserName:
                            </label>
                            <input onChange={handleInput} type='text' name='name' value={Register.name} className='p-3 bg-gray-200 rounded form-input w-full focus:outline-yellow-400' />
                        </div>
                        <div className='flex flex-wrap mb-6'>
                            <label className='block text-black text-sm font-bold mb-2'>
                                Email:
                            </label>
                            <input onChange={handleInput} type='email' name='email' value={Register.email} className='p-3 bg-gray-200 rounded form-input w-full focus:outline-yellow-400' />
                        </div>
                        <div className='flex flex-wrap mb-10'>
                            <label className='block text-black text-sm font-bold mb-2'>
                                Password:
                            </label>
                            <input onChange={handleInput} type='password' name='password' value={Register.password} className='p-3 bg-gray-200 rounded form-input w-full focus:outline-yellow-400' />
                        </div>
                        <div className='flex flex-wrap'>
                            <button type='submit' className='bg-yellow-300 text-black p-3 w-full rounded font-medium hover:bg-yellow-400'>
                                SignUp
                            </button>
                        </div>
                        <div className='flex justify-around mt-6'>
                            <div>
                                <Link to='/login' className='text-black text-sm font-bold mb-2 hover:underline'>
                                    Already have an account?
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register