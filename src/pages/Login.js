import React, { useState } from 'react'
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { url } from '@Utils/constant';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section id='login'>
            <div className='mx-auto container p-6'>
                <div className='bg-white w-full px-4 py-5 max-w-sm mx-auto rounded'>

                    <div className='w-fit mx-auto text-7xl'>
                        <FaUserAstronaut />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email:</label>
                            <div className='bg-slate-100 p-2'>
                                <input type='email' placeholder='Enter email'
                                    className='w-full h-full outline-none bg-transparent rounded'
                                    name='email'
                                    value={data.email}
                                    onChange={(event) => handleOnchange(event)}
                                />
                            </div>
                        </div>
                        <div>
                            <label>Password:</label>
                            <div className='bg-slate-100 p-2 flex items-center'>
                                <input type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    className='w-full h-full outline-none bg-transparent rounded'
                                    name='password'
                                    value={data.password}
                                    onChange={(event) => handleOnchange(event)}
                                />
                                <div className='cursor-pointer text-xl'
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    <span>
                                        {showPassword ? <IoEye /> : <IoEyeOff />}
                                    </span>
                                </div>
                            </div>
                            <Link to={url.FORGOT_PASSWORD} className='w-fit block ml-auto hover:underline hover:text-red-600 transition-all'>
                                Forgot password ?
                            </Link>
                        </div>
                        <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>
                            Login
                        </button>
                    </form>
                    <p className='my-4 mx-auto w-fit'>
                        Don't have an account ? <Link to={url.SIGN_UP} className='text-red-500 hover:underline hover:text-red-600 transition-all'>Sign up</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Login