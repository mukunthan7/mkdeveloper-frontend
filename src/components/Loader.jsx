import React from 'react'
import { ScaleLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <ScaleLoader
                color="#bcbf1a"
                cssOverride={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                height={70}
                margin={5}
                speedMultiplier={1}
                width={4}
            />
        </div>
    )
}

export default Loader