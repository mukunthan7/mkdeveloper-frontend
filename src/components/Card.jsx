import React from 'react'
import { motion } from 'framer-motion'

const Card = (props) => {
    return (
        <div className='flex flex-col items-center text-center'>
            <motion.img className='w-30 h-16 md:w-20 lg:w-28 lg:h-28 mb-3' src={props.image} alt={props.title} width={100} height={100}
                initial={{
                    opacity: 0,
                    rotateY: 360,
                }}
                whileInView={{
                    opacity: 1,
                    rotateY: 0,
                }}
                transition={{ duration: 1, type: 'spring', stiffness: 120 }}
            />
            <h1 className='font-Mont text-yellow-100'>{props.title}</h1>
        </div>
    )
}

export default Card