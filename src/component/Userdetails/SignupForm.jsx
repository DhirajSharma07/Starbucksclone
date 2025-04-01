
import React from 'react'
import { PiGreaterThan } from "react-icons/pi";
function SignupForm() {
    return (
        <section className=' pt-20' id='SignupForm'>
            <div className=' lg:px-40 px-4 h-10  w-full flex items-center font-extralight text-sm capitalize gap-1' >home  <PiGreaterThan className=" text-xs" /> Create an Account</div>
            <div className=' bg-green-950 min-h-48 max-h-60 relative z-10'>
            </div>

            <div className=' signup-absolute absolute pb-5 flex flex-col gap-7 max-h-screen rounded-tl-3xl rounded-tr-3xl  w-full top-72 z-50'>

                <div className=' flex justify-center  pt-24'>

                    <img src="https://www.starbucks.in/assets/icon/signup_process1.svg" alt="" />


                </div>
                <div >
                    <h1 className=' lg:px-40 px-4 text-xl font-bold pb-6'>Login to Starbucks</h1>
                    <hr className=' text-gray-500 w-full' />
                </div>
                <form action="" className=' lg:px-40 px-4 flex flex-wrap justify-between gap-5'>
                    <div  className=' flex flex-col w-[516px]'>
                        <label htmlFor="">Email Id</label>
                        <input type="text" name="" id="" placeholder='Enter your Email Id' className=' border-b-2 border-black border-t-0 border-r-0 border-l-0 outline-none  placeholder:text-xs' />
                    </div>
                    <div className=' flex flex-col w-[516px]' >
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" name="" id="" placeholder='Enter Mobile Number' className=' border-b-2 border-black border-t-0 border-r-0 border-l-0 outline-none  placeholder:text-xs'/>
                    </div>
                    <div className=' flex flex-col w-[516px]' > 
                        <label htmlFor="">create password</label>
                        <input type="text" name="" id="" placeholder=' Enter Password'  className=' border-b-2 border-black border-t-0 border-r-0 border-l-0 outline-none  placeholder:text-xs'/>
                    </div>
                    <div  className=' flex flex-col w-[516px]'> 
                        <label htmlFor="">Confirm password</label>
                        <input type="text" name="" id=""  placeholder=' Re-enter Password' className=' border-b-2 border-black border-t-0 border-r-0 border-l-0 outline-none  placeholder:text-xs'/>
                    </div>
                    
                </form>
                <div className=' flex items-center justify-center pt-10 w-full '>
                <button className=' h-10 w-80 bg-slate-400 rounded-[50px] '>Confirm</button>
                </div>


            </div>

        </section>
    )
}

export default SignupForm;
