import React from 'react'
import Header from './Header'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <div className='flex flex-col justify-between h-[100vh]'>
            <Header />
            <div>Landing page</div>
            <Footer />
        </div>
    )
}

export default LandingPage
