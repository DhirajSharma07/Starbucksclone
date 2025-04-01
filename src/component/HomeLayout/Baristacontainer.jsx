import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
function Baristacontainer() {
    return (
        <>
            <div className="container-second  relative items-center gap-4 h-80 mt-2 p-4 lg:px-36 overflow-hidden">
                <img src="https://www.starbucks.in/assets/icon/greyleafright.svg" alt=""  className=' absolute right-0 top-0 h-20'/>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl md:text-2xl pt-5 font-bold">Barista Recommends</h2>
                    <Link to="/OrderList">
                        <h2 className="text-base text-green-900 font-medium pt-5 hidden md:block">view more</h2>
                    </Link>
                </div>

                <div className=" container-overflow flex gap-3  h-52 pt-7 overflow-x-auto ">
                   
                    {/* Container 0 */}
                    <div className="h-[160px] max-w-[250px] min-w-[400px] shrink-0 bg-slate-50 rounded-xl">
                        <div className="p-5">
                            <div className="flex ">
                                <div className="h-20 w-20 flex items-center">
                                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp" alt="" className="h-20 rounded-xl max-w-none" />
                                </div>
                                <div className="h-4 w-full pl-4">
                                    <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                                    <h3 className="font-medium w-full">Signature Hot Chocolate</h3>
                                    <span className="text-xs">SORTH()</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-2">
                                <h4>420.<span className="text-xs">54</span></h4>
                                <button className="h-8 w-24 rounded-2xl mr-2 bg-green-800 hover:bg-gray-500 shadow-xl text-white items-center flex justify-center font-medium text-sm">Add item</button>
                            </div>
                        </div>
                    </div>

                    {/* container  1*/}
                    <div className="h-[160px] max-w-[250px] min-w-[400px] shrink-0 bg-slate-50 rounded-xl">
                        <div className="p-5">
                            <div className="flex ">
                                <div className="h-20 w-20 flex items-center">
                                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp" alt="" className="h-20 rounded-xl max-w-none" />
                                </div>
                                <div className="h-4 w-full pl-4">
                                    <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                                    <h3 className="font-medium w-full">Signature Hot Chocolate</h3>
                                    <span className="text-xs">SORTH()</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-2">
                                <h4>420.<span className="text-xs">54</span></h4>
                                <button className="h-8 w-24 rounded-2xl mr-2 bg-green-800 text-white hover:bg-gray-500 shadow-2xl items-center flex justify-center font-medium text-sm">Add item</button>
                            </div>
                        </div>
                    </div>

                    {/* Container 2 */}
                    <div className="h-[160px] max-w-[320px] min-w-[400px] shrink-0 bg-slate-50 rounded-xl">
                        <div className="p-5">
                            <div className="flex ">
                                <div className="h-20 w-20 flex items-center">
                                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp" alt="" className="h-20 rounded-xl max-w-none" />
                                </div>
                                <div className="h-4 w-full pl-4">
                                    <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                                    <h3 className="font-medium w-full">Signature Hot Chocolate</h3>
                                    <span className="text-xs">SORTH()</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-2">
                                <h4>420.<span className="text-xs">54</span></h4>
                                <button className="h-8 w-24 rounded-2xl mr-2 bg-green-800 text-white  hover:bg-gray-500 shadow-2xl items-center flex justify-center font-medium text-sm">Add item</button>
                            </div>
                        </div>
                    </div>

                    {/* Container 3 */}
                    {/* <div className="h-[176px] max-w-[320px] min-w-[400px] shrink-0 bg-slate-50 rounded-xl">
                        <div className="p-5">
                            <div className="flex ">
                                <div className="h-20 w-20 flex items-center">
                                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp" alt="" className="h-20 rounded-xl max-w-none" />
                                </div>
                                <div className="h-4 w-full pl-4">
                                    <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                                    <h3 className="font-medium w-full">Signature Hot Chocolate</h3>
                                    <span className="text-xs">SORTH()</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-6">
                                <h4>420.<span className="text-xs">54</span></h4>
                                <button className="h-8 w-24 rounded-2xl mr-2 bg-green-800 text-white  hover:bg-gray-500 shadow-2xl items-center flex justify-center font-medium text-sm">Add item</button>
                            </div>
                        </div>
                    </div> */}
                    {/* Container 4 */}
                    {/* <div className="h-[176px] max-w-[320px] min-w-[400px] shrink-0 bg-slate-50 rounded-xl">
                        <div className="p-5">
                            <div className="flex ">
                                <div className="h-20 w-20 flex items-center">
                                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp" alt="" className="h-20 rounded-xl max-w-none" />
                                </div>
                                <div className="h-4 w-full pl-4">
                                    <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                                    <h3 className="font-medium w-full">Signature Hot Chocolate</h3>
                                    <span className="text-xs">SORTH()</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-6">
                                <h4>420.<span className="text-xs">54</span></h4>
                                <button className="h-8 w-24 rounded-2xl mr-2 bg-green-800 text-white hover:bg-gray-500 shadow-2xl items-center flex justify-center font-medium text-sm">Add item</button>
                            </div>
                        </div>
                    </div> */}
                    {/* Container 5 */}
                    {/* <div className="h-[176px] max-w-[320px] min-w-[400px] shrink-0 bg-slate-50 rounded-xl">
                        <div className="p-5">
                            <div className="flex ">
                                <div className="h-20 w-20 flex items-center">
                                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp" alt="" className="h-20 rounded-xl max-w-none" />
                                </div>
                                <div className="h-4 w-full pl-4">
                                    <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                                    <h3 className="font-medium w-full">Signature Hot Chocolate</h3>
                                    <span className="text-xs">SORTH()</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-6">
                                <h4>420.<span className="text-xs">54</span></h4>
                                <button className="h-8 w-24 rounded-2xl mr-2 bg-green-800 text-white hover:bg-gray-500 shadow-2xl items-center flex justify-center font-medium text-sm">Add item</button>
                            </div>
                        </div>
                    </div> */}
                    {/* Container 6*/}
                    {/* <div className="h-[176px] max-w-[320px] min-w-[400px] shrink-0 bg-slate-50 rounded-xl">
                        <div className="p-5">
                            <div className="flex ">
                                <div className="h-20 w-20 flex items-center">
                                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp" alt="" className="h-20 rounded-xl max-w-none" />
                                </div>
                                <div className="h-4 w-full pl-4">
                                    <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                                    <h3 className="font-medium w-full">Signature Hot Chocolate</h3>
                                    <span className="text-xs">SORTH()</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-6">
                                <h4>420.<span className="text-xs">54</span></h4>
                                <button className="h-8 w-24 rounded-2xl mr-2 bg-green-800 text-white hover:bg-gray-500 shadow-2xl items-center flex justify-center font-medium text-sm">Add item</button>
                            </div>
                        </div>
                    </div> */}
                    {/* Container 7*/}
                    {/* <div className="h-[176px] max-w-[320px] min-w-[400px] shrink-0 bg-slate-50 rounded-xl">
                        <div className="p-5">
                            <div className="flex ">
                                <div className="h-20 w-20 flex items-center">
                                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp" alt="" className="h-20 rounded-xl max-w-none" />
                                </div>
                                <div className="h-4 w-full pl-4">
                                    <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                                    <h3 className="font-medium w-full">Signature Hot Chocolate</h3>
                                    <span className="text-xs">SORTH()</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-6">
                                <h4>420.<span className="text-xs">54</span></h4>
                                <button className="h-8 w-24 rounded-2xl mr-2 bg-green-800 text-white hover:bg-gray-500 shadow-2xl items-center flex justify-center font-medium text-sm">Add item</button>
                            </div>
                        </div>
                    </div> */}
                    {/* Container 8*/}
                    {/* <div className="h-[176px] max-w-[320px] min-w-[400px] shrink-0 bg-slate-50 rounded-xl">
                        <div className="p-5">
                            <div className="flex ">
                                <div className="h-20 w-20 flex items-center">
                                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp" alt="" className="h-20 rounded-xl max-w-none" />
                                </div>
                                <div className="h-4 w-full pl-4">
                                    <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                                    <h3 className="font-medium w-full">Signature Hot Chocolate</h3>
                                    <span className="text-xs">SORTH()</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-6">
                                <h4>420.<span className="text-xs">54</span></h4>
                                <button className="h-8 w-24 rounded-2xl mr-2 bg-green-800 text-white hover:bg-gray-500 shadow-2xl items-center flex justify-center font-medium text-sm">Add item</button>
                            </div>
                        </div>
                    </div> */}
                </div>


                {/* <div className="leftbtn h-9 w-9 bg-amber-300 rounded-full absolute left-[100px] flex items-center justify-center top-1/2 -translate-y-1/2">btn
                    </div>
                    <div className="rightbtn h-9 w-9 bg-amber-300 rounded-full absolute right-[100px] flex items-center justify-center top-1/2 -translate-y-1/2">btn

                    </div> */}
            </div>

        </>
    )
}

export default Baristacontainer
