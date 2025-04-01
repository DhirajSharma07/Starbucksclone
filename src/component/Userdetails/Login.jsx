import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Login() {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [visible, setvisible] = useState(true)

    function result(e) {
        e.preventDefault()
        console.log('email or name  =', input1);
        console.log('password =', input1);
        setInput1("")
        setInput2("")
    }
    function changestage(ev) {
        setvisible(false)
        console.log("working");


    }
    return (
        <>
            {visible && (<section className=' pt-20 min-h-screen bg-gray-100 flex justify-center items-center ' id='Login'>
                <div className='w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-3xl h-auto bg-white shadow-lg rounded-3xl p-8'>
                    <div className=' flex justify-end'>
                        <button className='' onClick={changestage}><Link to="/" className=' text-green-600 p-2 font-bold uppercase text-xs tracking-wider'>skip</Link></button>
                    </div>
                    <h1 className=' text-3xl font-black mb-6 '>Login</h1>
                    {/* ------------------form layout---------------------- */}
                    <form onSubmit={result}>
                        <div className="flex flex-col  gap-4 ">
                            {/* ------------------UserName input---------------------- */}
                            <div className="flex flex-col">
                                <label htmlFor="email" className="block text-gray-500 text-sm uppercase">USERNAME</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={input1}
                                    onChange={(e) => setInput1(e.target.value)}
                                    placeholder="Enter Email ID 0r Mobile Number *"
                                    className="w-full px-4 py-2 mt-2 border-b-2 border-black border-t-0 border-r-0 border-l-0 outline-none  placeholder:text-xs"
                                    required
                                      autoComplete="off"
                                />
                            </div>
                            {/* ------------------UserName input---------------------- */}
                            <div className='flex flex-col'>

                                <label  className="block text-gray-500 text-sm uppercase">Password</label>
                                <input
                                    type="password" 
                                    id="password"
                                    name="password"
                                    value={input2}
                                    onChange={(e) => setInput2(e.target.value)}
                                    placeholder="Enter Password *"
                                    className="w-full px-4 py-2 mt-2 border-b-2 border-black border-t-0 border-r-0 border-l-0 outline-none text-gray-500 placeholder:text-xs"  
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            <p className=' text-xs mt-4'>Don't have an account? <span><Link to="/SignupForm" className=' text-green-600 text-sm underline'>signup</Link></span></p>
                            <div className=' flex justify-center items-center text-center py-3  '>
                                <button type="submit" className=" text-white  rounded-[50px] py-3 px-32 bg-slate-500 ">
                                    Login
                                </button></div>
                            <div className='flex flex-col justify-center text-center items-center gap-2 mt-3'>
                                <div className=' '>
                                    <p className=' text-xs'>Facing trouble logging in? <span><a href="/" className=' text-green-600 underline capitalize text-sm'>Get help</a></span></p>
                                </div>
                                <div>
                                    <p className=' text-xs'>Already registered via WhatsApp? <span className=''><a href="/" className=' text-green-600 underline  text-xs font-bold'>Continue Here</a></span></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            )}
        </>
    )
}

export default Login
