import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hotel from '../Assets/hotel.jpg'
import { IoStarSharp } from 'react-icons/io5'
import { FaUserAlt } from "react-icons/fa";

const LandingPage = () => {
    return (
        <div className='flex flex-col justify-between h-[100vh]'>
            <Header />
            <div className='flex flex-col items-center justify-center gap-4 mt-6 md:flex-row md:mt-10'>
                <div className='flex flex-col items-center justify-center p-2 '>
                    <img src={Hotel} alt=""
                        className='h-[22rem] rounded-md w-full object-cover' />

                </div>
                <div className='w-[90vw] sm:w-[30rem]'>
                    <h1 className='font-bold text-[1.8rem] tracking-wide text-white'>Luxury Haven Suite</h1>
                    <p className='mt-1 text-[0.95rem] text-white flex gap-4 items-center'><span className='flex items-center gap-1 w-fit px-2 rounded-md bg-[#00ab1f]'>4.2 <IoStarSharp /></span> 9,556 Ratings</p>
                    <p className='mt-1 text-[0.87rem] tracking-wide text-[#27f84e]'>Extra &#8377;999 off</p>
                    <p className='text-[1.5rem] font-semibold mt-2 tracking-wide text-white'>&#8377;4,999</p>
                    <div className='mt-2'>
                        <p className='font-semibold text-gray-200 text-[1.1rem]'>Features:-</p>
                        <ul className='pl-7 text-white list-disc text-[0.95rem]'>
                            <li>Enjoy breathtaking cityscape views from your private balcony.</li>
                            <li>Sink into the embrace of our premium, king-sized mattress for a restful sleep.</li>
                            <li>Experience gourmet delights with our 24/7 room service.</li>
                        </ul>
                    </div>
                    <div className='mt-6 text-white font-[500] flex gap-2 ml-2'>
                        <button className='bg-[#fb02ea] hover:bg-[#f829ea] p-1 px-6 rounded-md font-600'>Add to cart</button>
                        <button className='bg-[#00ffdd] hover:bg-[#00ecfd] p-1 px-6 rounded-md text-black'>Rent</button>
                    </div>

                </div>
            </div>
            <div className='flex flex-col items-center gap-2 mt-10'>
                <p className='text-center text-white text-[1.3rem] font-semibold'>Testimonials</p>
                <ul className='flex flex-wrap items-center justify-center gap-2 mb-4 text-center'>
                    <li className='w-[15rem] gap-2 flex flex-col items-center justify-center  border rounded-md p-2 py-4'>
                        <p>The Smiths</p>
                        <FaUserAlt className='w-[3.5rem] h-[3.5rem] border p-1 pt-2 rounded-full' />
                        "An absolute oasis of luxury! The attention to detail in the design and the impeccable service exceeded our expectations."
                        <div className='flex gap-[1px]'>
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp />
                        </div>
                    </li>
                    <li className='w-[15rem] border gap-2 flex flex-col items-center p-2 py-4 rounded-md'>
                        <p>The Smiths</p>
                        <FaUserAlt className='w-[3.5rem] h-[3.5rem] border p-1 pt-2 rounded-full' />
                        "An absolute oasis of luxury! The attention to detail in the design and the impeccable service exceeded our expectations."
                        <div className='flex gap-[1px]'>
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp />
                        </div>
                    </li>
                    <li className='w-[15rem] gap-2 flex flex-col items-center border p-2 py-4 rounded-md'>
                        <p>The Smiths</p>
                        <FaUserAlt className='w-[3.5rem] h-[3.5rem] border p-1 pt-2 rounded-full' />
                        "An absolute oasis of luxury! The attention to detail in the design and the impeccable service exceeded our expectations."
                        <div className='flex gap-[1px]'>
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp className='text-[#16ff7b]' />
                            <IoStarSharp />
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage
