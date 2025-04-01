import React from 'react'
import Bestseller from './Bestseller'

function Coffee() {
  return (
    <>
    <Bestseller />
       <section className=' py-10'>
                <div className='my-8  lg:px-40 px-3'>
                    <h3 className=' font-bold tracking-wider '>Wholebeans</h3>
                    <p className=' text-sm mt-2'>Exclusive range of coffee beans roasted to perfection.</p>
                </div>
                {/* ------------------ Multiple card container------------------------- */}
                <div className='cards-container flex flex-wrap gap-4 justify-center lg:px-40 px-3'>
                    {/* card 1 */}
                    <div className='card flex py-5  h-64 max-w-80 min-w-96  bg-slate-100 rounded-lg  hover:shadow-2xl'>
                        <div className=' h-full w-24 pl-4'>
                            <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/M103049.png" alt="" className=' rounded-full h-24  max-w-none  ' /></div>
                        <div className=' flex flex-col justify-between  pl-6'>
                            <div className='  flex flex-col gap-2'>
                                <div className=''><img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" className=' h-4 w-4' /></div>
                                <h3>VIA Christmas Blend</h3>
                                <span className=' text-xs font-thin'>0 Kcal</span>
                                <p className=' text-xs'>Starbucks Premium Instant Coffee: VIA Christmas Blend.This s...</p></div>
                            <div className=' flex  justify-between items-center mr-3'>
                                <h4 className=' font-semibold'>1000<span className=' text-sm'>.00</span></h4>
                                <button className=' py-2 px-5 bg-zinc-400 rounded-[50px] text-sm'>add item </button>
                            </div>

                        </div>

                    </div>
                    {/* card 2 */}
                    <div className='card flex py-5  h-64 max-w-80  min-w-96  bg-slate-100 rounded-lg  hover:shadow-2xl'>
                        <div className=' h-full w-24 pl-4'>
                            <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/M111929.png" alt="" className=' rounded-full h-24  max-w-none  ' /></div>
                        <div className=' flex flex-col justify-between  pl-6'>
                            <div className='  flex flex-col gap-2'>
                                <div className=''><img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" className=' h-4 w-4' /></div>
                                <h3>250G Christmas Blend</h3>
                                <span className=' text-xs font-thin'>0 kcal</span>
                                <p className=' text-xs'>This seasonal favourite is back with aged Sumatran coffees l...</p></div>
                            <div className=' flex  justify-between items-center mr-3'>
                                <h4 className=' font-semibold'>2000<span className=' text-sm'>.00</span></h4>
                                <button className=' py-2 px-5 bg-zinc-400 rounded-[50px] text-sm'>add item </button>
                            </div>

                        </div>

                    </div>
                    {/* card 3 */}
                    <div className='card flex py-5  h-64 max-w-80  min-w-96  bg-slate-100 rounded-lg  hover:shadow-2xl'>
                        <div className=' h-full w-24 pl-4'>
                            <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/105468.jpg" alt="" className=' rounded-full h-24  max-w-none  ' /></div>
                        <div className=' flex flex-col justify-between  pl-6'>
                            <div className='  flex flex-col gap-2'>
                                <div className=''><img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" className=' h-4 w-4' /></div>
                                <h3>Java Chip Frappuccino</h3>
                                <span className=' text-xs font-thin'>TALL(354 mL) .392 kcal</span>
                                <p className=' text-xs'>Mocha sauce and Frappuccino® chips blended with with Frappu...</p></div>
                            <div className=' flex  justify-between items-center mr-3'>
                                <h4 className=' font-semibold'>420.<span className=' text-sm'>00</span></h4>
                                <button className=' py-2 px-5 bg-zinc-400 rounded-[50px] text-sm'>add item </button>
                            </div>

                        </div>

                    </div>
                    {/* card 4 */}
                    <div className='card flex py-5  h-64  max-w-80 min-w-96  bg-slate-100 rounded-lg  hover:shadow-2xl'>
                        <div className=' h-full w-24 pl-4'>
                            <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/109617_1.png" alt="" className=' rounded-full h-24 max-w-none  bg-contain   ' /></div>
                        <div className=' flex flex-col justify-between  pl-6'>
                            <div className='  flex flex-col gap-2'>
                                <div className=''><img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" className=' h-4 w-4' /></div>
                                <h3>Java Chip Frappuccino</h3>
                                <span className=' text-xs font-thin'>TALL(354 mL) .392 kcal</span>
                                <p className=' text-xs'>Mocha sauce and Frappuccino® chips blended with with Frappu...</p></div>
                            <div className=' flex  justify-between items-center mr-3'>
                                <h4 className=' font-semibold'>420.<span className=' text-sm'>00</span></h4>
                                <button className=' py-2 px-5 bg-zinc-400 rounded-[50px] text-sm'>add item </button>
                            </div>

                        </div>

                    </div>
                    {/* card 5 */}
                    <div className='card flex py-5  h-64  max-w-80 min-w-96  bg-slate-100 rounded-lg  hover:shadow-2xl'>
                        <div className=' h-full w-24 pl-4'>
                            <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/100419.jpg" alt="" className=' rounded-full h-24  max-w-none  ' /></div>
                        <div className=' flex flex-col justify-between  pl-6'>
                            <div className='  flex flex-col gap-2'>
                                <div className=''><img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" className=' h-4 w-4' /></div>
                                <h3>Java Chip Frappuccino</h3>
                                <span className=' text-xs font-thin'>TALL(354 mL) .392 kcal</span>
                                <p className=' text-xs'>Mocha sauce and Frappuccino® chips blended with with Frappu...</p></div>
                            <div className=' flex  justify-between items-center mr-3'>
                                <h4 className=' font-semibold'>420.<span className=' text-sm'>00</span></h4>
                                <button className=' py-2 px-5 bg-zinc-400 rounded-[50px] text-sm'>add item </button>
                            </div>

                        </div>

                    </div>
                    {/* card 6 */}
                    <div className='card flex py-5  h-64  max-w-80 min-w-96  bg-slate-100 rounded-lg  hover:shadow-2xl'>
                        <div className=' h-full w-24 pl-4'>
                            <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/100100_1.png" alt="" className=' rounded-full h-24  max-w-none  ' /></div>
                        <div className=' flex flex-col justify-between  pl-6'>
                            <div className='  flex flex-col gap-2'>
                                <div className=''><img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" className=' h-4 w-4' /></div>
                                <h3>Java Chip Frappuccino</h3>
                                <span className=' text-xs font-thin'>TALL(354 mL) .392 kcal</span>
                                <p className=' text-xs'>Mocha sauce and Frappuccino® chips blended with with Frappu...</p></div>
                            <div className=' flex  justify-between items-center mr-3'>
                                <h4 className=' font-semibold'>420.<span className=' text-sm'>00</span></h4>
                                <button className=' py-2 px-5 bg-zinc-400 rounded-[50px] text-sm'>add item </button>
                            </div>

                        </div>

                    </div>
                    
                </div>
       </section>

    </>
  )
}

export default Coffee
