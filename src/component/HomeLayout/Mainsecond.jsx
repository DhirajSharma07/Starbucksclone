
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
function Mainsecond() {
    return (
        <div className="mainsecond  w-full h-[calc(100vh-96px)] p-4 lg:px-36" id="mainsecond">
                 {/* ------------------ SWIPER-CONTAINER------------------ */}
            <div className="container-first w-full flex relative  mt-10 h-[200px] md:h-[220px] sm:h-60 rounded-lg ">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper rounded-lg ">
                    {/* 1 swiperslider */}
                    <SwiperSlide className='' ><div className=' relative w-full h-full bg-hero-pattern bg-cover flex overflow-hidden rounded-lg gap-4 lg:gap-12'>
                        <div className='div-left-image h-full  max-w-40 rounded-lg
                    '><img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Holiday_Dashboard_Middle_1_189e129df8.png" alt="" className=' w-full h-full bg-contain bg-no-repeat rounded-lg' /> </div>

                        <div className=' container-content text-white  flex  flex-col  gap-4 sm:gap-12'>
                            <div className=' pt-5 flex flex-col gap-5 '>
                                <p className=' text-white text-sm font-bold '>`Tis The season</p>
                                <p className=' capitalize text-white text-xl font-extrabold  '>Merrier Together</p>
                                <p className='max-w-full text-xs md:text-sm text-gray-200'>Get into the holiday spirit with our seasonal offerings</p>
                            </div>
                        </div>
                        <button className=' absolute right-5 bottom-5 px-5 py-2 lg:px-16 lg:py-4 bg-white text-black rounded-full text-xs'><Link to="/">know more</Link></button>
                    </div>

                    </SwiperSlide>
                    {/* 2 swiperslider */}
                    <SwiperSlide className='' ><div className=' relative w-full h-full bg-hero-pattern2 bg-cover flex  overflow-hidden rounded-lg gap-4 lg:gap-12'>
                        <div className='div-left-image h-full  max-w-40 
                    '><img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/285_x_595_App_removebg_preview_2_c4bc942184.png" alt="" className=' w-full h-full bg-contain bg-no-repeat ' /> </div>

                        <div className=' container-content text-white  flex  flex-col  gap-4 sm:gap-12'>
                            <div className=' pt-5 flex flex-col gap-5 '>
                                <p className=' text-white text-sm  '>starbucks</p>
                                <p className=' capitalize text-white text-xl font-bold  '>Beverage subscrition</p>
                                <p className='max-w-full text-xs md:text-sm text-gray-200'>Get into the holiday spirit with our seasonal offerings</p>
                            </div>
                        </div>
                        <button className=' absolute right-5 bottom-5 px-5 py-2 lg:px-16 lg:py-4 bg-white text-black rounded-full text-xs'><Link to="/">know more</Link></button>
                    </div>

                    </SwiperSlide>
                   
                </Swiper>
            </div>
            {/* ------------------HANDCRAFT-CONTAINER------------------ */}
            <h2 className="text-xl sm:text-2xl pt-8 sm:pt-16 pl-3 font-bold">Handcrafted Curations</h2>
            <div className="flex flex-wrap justify-center sm:justify-between gap-10 sm:gap-8 h-auto pt-8 sm:pt-12">

                <div className="rounded-full flex flex-col justify-center items-center gap-2 w-20 h-20 sm:w-28 sm:h-28 ">
                    <img src="https://www.starbucks.in/assets/icon/Bestseller.webp" alt="Bestseller" className=" bg-cover rounded-full hover:scale-90 transition-transform duration-200" />
                    <p className="font-medium text-center text-sm sm:text-base">Bestseller</p>
                </div>

                <div className="rounded-full flex flex-col justify-center items-center gap-2 w-20 h-20 sm:w-28 sm:h-28">
                    <img src="https://www.starbucks.in/assets/icon/Drinks.webp" alt="Drinks" className=" bg-cover rounded-full hover:scale-90 transition-transform duration-200" />
                    <p className="font-medium text-center text-sm sm:text-base">Drinks</p>
                </div>

                <div className="rounded-full flex flex-col justify-center items-center gap-2 w-20 h-20 sm:w-28 sm:h-28">
                    <img src="https://www.starbucks.in/assets/icon/Food.webp" alt="Food" className=" bg-cover rounded-full hover:scale-90 transition-transform duration-200" />
                    <p className="font-medium text-center text-sm sm:text-base">Food</p>
                </div>

                <div className="rounded-full flex flex-col justify-center items-center gap-2 w-20 h-20 sm:w-28 sm:h-28">
                    <img src="https://www.starbucks.in/assets/icon/Merchandise.webp" alt="Merchandise" className=" bg-cover rounded-full hover:scale-90 transition-transform duration-200" />
                    <p className="font-medium text-center text-sm sm:text-base">Merchandise</p>
                </div>

                <div className="rounded-full flex flex-col justify-center items-center gap-2 w-20 h-20 sm:w-28 sm:h-28">
                    <img src="https://www.starbucks.in/assets/icon/CoffeeAtHome.webp" alt="Coffee At Home" className=" bg-cover rounded-full hover:scale-90 transition-transform duration-200" />
                    <p className="font-medium text-center text-sm sm:text-base">Coffee </p>
                </div>

                <div className="rounded-full flex flex-col justify-center items-center gap-2 w-20 h-24 sm:w-28 sm:h-28">
                    <img src="https://www.starbucks.in/assets/icon/ReadyToEat.webp" alt="Ready To Eat" className=" bg-cover rounded-full hover:scale-90 transition-transform duration-200" />
                    <p className="font-medium text-center text-sm sm:text-base">Ready To Eat</p>
                </div>

            </div>
        </div>

    )
}

export default Mainsecond;
