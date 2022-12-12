import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const Home = () => {

    const [data, setHero] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchHero()
    }, [])


    async function fetchHero() {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/hero`)
        const { data } = await res.json()
        setHero(data)
        setLoading(false)
    }


    const dev = data.map((data) => (data.dev))
    const code = data.map((data) => (data.code))
    const design = data.map((data) => (data.design))

    const [text] = useTypewriter({
        words: [
            `${dev}`,
            `${code}`,
            `${design}`
        ],
        loop: true,
        delaySpeed: 3000,
        typeSpeed: 100,
    });

    const [name] = useTypewriter({
        words: [
            `${"Hi I'm "}${data.map((data) => (data.name))}`,
        ],
        delaySpeed: 2000,
        typeSpeed: 100,
    });

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        < div className="min-h-screen bg-black px-5 md:px-40 xl:px-72 text-white flex justify-center" >
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-xl text-center md:text-2xl xl:text-3xl mt-5 mb-10 uppercase tracking-[8px]">
                    {name}
                    <Cursor cursorColor="#c2d167" cursorStyle="|" />
                </h1>
                {
                    data.map((data, index) => (
                        <h1 key={index} className="font-Poiret text-xl md:text-2xl mb-5 font-thin uppercase tracking-[8px] border-b-2  border-[#c2d167]">
                            {data.domain}
                        </h1>
                    ))
                }
                <motion.img
                    src="https://avatars.githubusercontent.com/u/63898896?v=4"
                    alt="hero"
                    style={{ height: 150, width: 150 }}
                    className="rounded-full border-[#c2d167] border-4 mt-10"
                    initial={{
                        rotate: 360,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                />
                <div className="mt-10">
                    <Link to="/skills" className="bg-[#c2d167] hover:bg-white hover:text-black hover:border-[#c2d167] border-4 border-white font-Mont text-black px-7 py-3 rounded-md mt-10"> My Skills </Link>
                    <Link to="/contact" className="bg-black text-white border-4 border-[#c2d167] px-7 py-3 ml-5 rounded-md mt-10"> Contact </Link>
                </div>
                <h1 className="font-Zen text-3xl text-center md:text-5xl xl:text-6xl font-bold mt-20">
                    {text}
                    <Cursor cursorColor="#c2d167" cursorStyle="|" />
                </h1>
            </div>
        </div>
    )
}

export default Home