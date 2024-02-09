import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='text-center border-t border-slate-600'>
            <p className='p-2 text-white text-[1.05rem]'>&#169;<span> {date}</span> Hotel Imperial | All rights reserved</p>
        </div>
    )
}

export default Footer
