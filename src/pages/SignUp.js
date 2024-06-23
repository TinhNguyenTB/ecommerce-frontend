import React, { useState } from 'react'
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import signUpIcon from '@Assets/signin.gif'
import imageToBase64 from '@Utils/imageToBase64';
import SummaryApi from '@Common';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: ""
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

    const handleUploadPic = async (e) => {
        const file = e.target.files[0];
        const imagePic = await imageToBase64(file)
        setData((prev) => {
            return {
                ...prev,
                profilePic: imagePic
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.password === data.confirmPassword) {
            const res = await fetch(SummaryApi.signUp.url, {
                method: SummaryApi.signUp.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const dataRes = await res.json();
            if (dataRes && dataRes.success === true) {
                toast.success(dataRes.message);
                navigate("/login");
            }
            if (dataRes && dataRes.error === true) {
                toast.error(dataRes.message);
            }
        }
        else {
            toast.error("Please check password and confirm password")
        }
    }

    return (
        <section id='signup'>
            <div className='mx-auto container p-6'>
                <div className='bg-white w-full px-4 py-5 max-w-sm mx-auto rounded'>

                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <img src={data.profilePic ? data.profilePic : signUpIcon} alt='signupIcon' />
                        <form>
                            <label>
                                <div className='text-xs bg-opacity-80 cursor-pointer pb-5 pt-0 bg-slate-200 py-4 text-center absolute bottom-0 w-full'>
                                    Upload photo
                                </div>
                                <input type='file' className='hidden' onChange={handleUploadPic} />
                            </label>

                        </form>
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Name:</label>
                            <div className='bg-slate-100 p-2'>
                                <input type='text' placeholder='Enter your name'
                                    className='w-full h-full outline-none bg-transparent rounded'
                                    name='name'
                                    value={data.name}
                                    required
                                    onChange={(event) => handleOnchange(event)}
                                />
                            </div>
                        </div>
                        <div className='grid'>
                            <label>Email:</label>
                            <div className='bg-slate-100 p-2'>
                                <input type='email' placeholder='Enter your email'
                                    className='w-full h-full outline-none bg-transparent rounded'
                                    name='email'
                                    value={data.email}
                                    required
                                    onChange={(event) => handleOnchange(event)}
                                />
                            </div>
                        </div>
                        <div>
                            <label>Password:</label>
                            <div className='bg-slate-100 p-2 flex items-center'>
                                <input type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter your password'
                                    className='w-full h-full outline-none bg-transparent rounded'
                                    name='password'
                                    value={data.password}
                                    required
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
                        </div>
                        <div>
                            <label>Confirm password:</label>
                            <div className='bg-slate-100 p-2 flex items-center'>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder='Enter your confirm password'
                                    className='w-full h-full outline-none bg-transparent rounded'
                                    name='confirmPassword'
                                    value={data.confirmPassword}
                                    required
                                    onChange={(event) => handleOnchange(event)}
                                />
                                <div className='cursor-pointer text-xl'
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    <span>
                                        {showConfirmPassword ? <IoEye /> : <IoEyeOff />}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>
                            Sign Up
                        </button>
                    </form>
                    <p className='my-4 mx-auto w-fit'>
                        Already have account ? <Link to={"/login"} className='text-red-500 hover:underline hover:text-red-600 transition-all'>Login</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SignUp