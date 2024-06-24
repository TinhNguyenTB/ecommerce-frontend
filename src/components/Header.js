import React from 'react'
import Logo from '@/components/Logo'
import { GrSearch } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { url } from '@/utils/constant';

const Header = () => {
    return (
        <header className='h-16 shadow-md bg-white'>
            <div className='h-full container mx-auto flex items-center px-6 justify-between'>
                <div>
                    <Link to={url.HOME}>
                        <Logo w={50} h={50} />
                    </Link>
                </div>
                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-sm pl-2'>
                    <input
                        type='text' placeholder='Search product here...'
                        className='w-full outline-none'
                    />
                    <div className='cursor-pointer text-lg text-white min-w-[50px] h-8 bg-red-500 flex items-center justify-center rounded-r-full'>
                        <GrSearch />
                    </div>
                </div>
                <div className='flex items-center gap-7'>
                    <div className='text-2xl cursor-pointer'>
                        <FaUserCircle />
                    </div>
                    <div className='text-2xl cursor-pointer relative'>
                        <span><FaShoppingCart /></span>
                        <div className='bg-red-500 flex items-center justify-center h-5 w-5 rounded-full absolute -top-3 -right-2'>
                            <p className='text-sm text-white'>
                                0
                            </p>
                        </div>
                    </div>
                    <div>
                        <Link to={url.LOGIN} className='px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header