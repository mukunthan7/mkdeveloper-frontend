import { useEffect, useState } from 'react'
import CardLayout from '../components/CardLayout'
import Card from '../components/Card'
import Loader from '../components/Loader'

const Skills = () => {

    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/skills`)
        const { data } = await res.json()
        setSkills(data)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }
    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen bg-black'>
                <Loader />
            </div>
        )
    }

    return (
        <div className='space-y-5 min-h-screen bg-black'>
            <br />
            <CardLayout title={"Mern Stack"}>
                <Card image={skills[0]?.image} title={skills[0]?.title} />
                <Card image={skills[1]?.image} title={skills[1]?.title} />
                <Card image={skills[2]?.image} title={skills[2]?.title} />
                <Card image={skills[3]?.image} title={skills[3]?.title} />
            </CardLayout>
            <CardLayout title={"Programming"}>
                <Card image={skills[4]?.image} title={skills[4]?.title} />
                <Card image={skills[5]?.image} title={skills[5]?.title} />
                <Card image={skills[6]?.image} title={skills[6]?.title} />
                <Card image={skills[7]?.image} title={skills[7]?.title} />
            </CardLayout>
            <CardLayout title={"UI/UX and CSS Framework"}>
                <Card image={skills[8]?.image} title={skills[8]?.title} />
                <Card image={skills[9]?.image} title={skills[9]?.title} />
                <Card image={skills[10]?.image} title={skills[10]?.title} />
                <Card image={skills[11]?.image} title={skills[11]?.title} />
            </CardLayout>
            <CardLayout title={"Database"}>
                <Card image={skills[0]?.image} title={skills[0]?.title} />
                <Card image={skills[12]?.image} title={skills[12]?.title} />
                <Card image={skills[13]?.image} title={skills[13]?.title} />
                <Card image={skills[14]?.image} title={skills[14]?.title} />
            </CardLayout>
            <br />
        </div>
    )
}



export default Skills