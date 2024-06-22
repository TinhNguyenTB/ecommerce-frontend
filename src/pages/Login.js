import React, { useState } from 'react'
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section id='login'>
            <div className='mx-auto container p-6'>
                <div className='bg-white w-full px-2 py-5 max-w-md mx-auto rounded'>

                    <div className='w-fit mx-auto text-7xl'>
                        <FaUserAstronaut />
                    </div>

                    <form>
                        <div className='grid'>
                            <label>Email:</label>
                            <div className='bg-slate-100 p-2'>
                                <input type='email' placeholder='Enter email'
                                    className='w-full h-full outline-none bg-transparent rounded'
                                />
                            </div>
                        </div>
                        <div>
                            <label>Password:</label>
                            <div className='bg-slate-100 p-2 flex items-center'>
                                <input type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    className='w-full h-full outline-none bg-transparent rounded'
                                />
                                <div className='cursor-pointer text-xl'
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    <span>
                                        {showPassword ? <IoEye /> : <IoEyeOff />}
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='w-fit block ml-auto hover:underline hover:text-red-600 transition-all'>
                                Forgot password ?
                            </Link>
                        </div>
                        <button className='bg-red-500 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login