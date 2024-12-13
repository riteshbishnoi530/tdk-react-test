import React from 'react'
import Header from './Header'

function Hero() {
    return (
        <div className='min-h-screen bg-hero-image bg-center bg-cover bg-no-repeat'>
            <Header/>
            <div className='px-4'>
            <div className="container">
                <h1 className='text-custom-6xl max-xl:!max-w-[753px] max-lg:!max-w-[600px] max-md:!max-w-md max-sm:!max-w-96 text-white font-bold leading-custom-md mx-auto text-center heading max-lg:text-5xl max-md:text-4xl max-sm:text-3xl'>Driving Transformation for Performance and Passion Within </h1>
                <p className='text-white font-normal max-xl:!max-w-[430px] max-sm:!max-w-[300px] mx-auto text-custom-xl max-sm:text-base text-center mt-4'>The future of electric mobility is here. TDK and NEOM McLaren Formula E</p>
            </div>
            </div>
        </div>
    )
}

export default Hero