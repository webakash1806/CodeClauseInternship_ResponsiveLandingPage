import React from 'react'

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        <li><a>Home</a></li>
                        <li><a>Products</a></li>
                        <li><a>Contact</a></li>
                        <li><a>About Us</a></li>
                        <div className='flex justify-around w-full mt-3 font-semibold text-black'>
                            <button className='bg-[#fb02ea] hover:bg-[#f829ea] p-1 px-6 rounded-md font-600'>Sign up</button>
                            <button className='bg-[#00ffdd] hover:bg-[#00ecfd] p-1 px-6 rounded-md '>Login</button>
                        </div>
                    </ul>
                </div>
                <a className="text-xl btn btn-ghost">Mighty Cart</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    <li><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>Contact</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
            <div className='font-semibold text-black navbar-end'>
                <button className='bg-[#fb02ea] hover:bg-[#f829ea] p-1 px-6 rounded-md font-600 mr-2'>Sign up</button>
                <button className='bg-[#00ffdd] hover:bg-[#00ecfd] p-1 px-6 rounded-md '>Login</button>
            </div>
        </div>
    )
}

export default Header
