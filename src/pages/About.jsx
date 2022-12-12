import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Loader from '../components/Loader'

const About = () => {

    const [data, setHero] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchHero()
    }, [])


    async function fetchHero() {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/about`)
        const { data } = await res.json()
        setHero(data)
        setTimeout(() => {
            setLoading(false)
        }, 800)
    }
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <Loader />
            </div>
        )
    }

    return (
        <div className="h-screen bg-black px-5 md:px-40 xl:px-72 text-white flex flex-col justify-center item-center z-0">
            <h1 className="-mt-38 text-center  uppercase text-xl tracking-[10px]">
                About
            </h1>
            <div className="flex justify-center items-center flex-col  mt-10">
                <motion.img
                    src="https://avatars.githubusercontent.com/u/63898896?v=4"
                    alt="hero"
                    className="object-cover h-40 w-40 rounded-2xl md:h-50 md:w-100"
                    initial={{
                        y: -150,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 2000, type: "spring", stiffness: 120 }}
                />
                <motion.div
                    className="flex flex-col justify-center items-center mt-5"
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-md text-center md:text-xl mb-5 mt-5 bg-white/10 shadow-md shadow-[#c2d167]  px-10 py-3 rounded-md font-Mont">
                        {data.map((data) => (data.web))}
                    </h1>
                    <p className="text-center text-md md:text-xl font-Mont max-w-4xl mx-auto">
                        {data.map((data) => (data.herocontent))}
                    </p>
                    <h1 className="text-3xl text-center md:text-2xl font-Mont mt-5 mb-2 border-b-4 border-[#c2d167]">
                        Bio
                    </h1>
                    <ul className="text-sm md:text-lg ml-10 md:ml-20 md:text-left list-disc font-Mont">
                        {
                            data.map((data) => (
                                data.bio.map((bio, index) => (
                                    <li className="mt-3" key={index}>{bio}</li>
                                ))
                            ))
                        }
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default About