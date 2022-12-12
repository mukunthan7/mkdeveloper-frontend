import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    email: '',
    password: ''
}

const Reset = () => {
    const navigate = useNavigate()

    const [Reset, setRest] = useState(initialState)

    const handleInput = (e) => {
        setRest({
            ...Reset,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Reset)
        })
        await res.json()
        if (res.ok) {
            navigate('/login')
        } else {
            setRest(initialState)
        }
    }

    return (
        <div className='min-h-screen bg-black z-0'>
            <div className='flex flex-col max-w-sm mx-auto pt-20 md:max-w-md'>
                <div className='flex flex-col break-words bg-white border-2 shadow-lg shadow-white mt-20 rounded-lg'>
                    <div className='bg-[#bfce65] capitalize font-bold tracking-widest text-black text-center py-5 px-6 mb-0'>
                        Reset In
                    </div>
                    <form onSubmit={handleSubmit} className='py-10 px-5'>
                        <div className='flex flex-wrap mb-6'>
                            <label className='block text-black text-sm font-bold mb-2'>
                                Email:
                            </label>
                            <input onChange={handleInput} type='email' name='email' value={Reset.email} className='p-3 bg-gray-200 rounded form-input w-full focus:outline-yellow-400' />
                        </div>
                        <div className='flex flex-wrap mb-10'>
                            <label className='block text-black text-sm font-bold mb-2'>
                                Password:
                            </label>
                            <input onChange={handleInput} type='password' name='password' value={Reset.password} className='p-3 bg-gray-200 rounded form-input w-full focus:outline-yellow-400' />
                        </div>
                        <div className='flex flex-wrap'>
                            <button type='submit' className='bg-yellow-300 p-3 w-full rounded text-black font-medium hover:bg-yellow-400'>
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reset