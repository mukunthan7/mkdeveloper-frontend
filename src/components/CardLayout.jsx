import React from 'react'

const CardLayout = (props) => {
    return (
        <div>
            <div className='rounded-lg pb-5 max-w-[25rem] md:px-20 md:max-w-xl lg:max-w-2xl mx-auto bg-white/30 shadow-md shadow-[#c2d167]'>
                <h1 className='text-md text-center text-white font-medium font-Mont mb-5 pt-5 tracking-widest lg:text-xl'>{props.title}</h1>
                <div className='flex justify-center items-center md:space-x-14 lg:space-x-20'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CardLayout