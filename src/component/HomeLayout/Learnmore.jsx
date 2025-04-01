import React from 'react';
import { PiGreaterThan } from "react-icons/pi";

function Learnmore() {
  return (
    <>
      <section className='pt-20 pb-5  h-full'>

        <div className='lg:px-40 px-4 h-10 w-full flex items-center font-extralight text-sm capitalize gap-1'>
          home <PiGreaterThan className="text-xs" /> coffee culture
        </div>


        <div className="video-container w-full h-64 bg-green-200">
          <video src="" className="w-full h-full object-cover" />
        </div>


        <div className="containerof-content pt-6 px-4 lg:px-40 gap-5 flex flex-col">
          <h3 className='capitalize text-2xl font-semibold'>Art & Science of coffee Brewing</h3>
          <p><span className='text-green-600 px-2 text-xs rounded-md bg-slate-300'>Articles</span></p>

          <div className='flex gap-2 items-center'>
            <img src="" alt="" className='h-8 w-8 bg-red-500 rounded-full' />
            <h4 className='capitalize font-semibold'>Dhiraj Sharma</h4>
          </div>

          <p className='font-extralight'>Balance artistry and precision in brewing with "Art & Science of Coffee Brewing."</p>
          <p>Demystify the barista's craft and elevate your home brewing skills.</p>


          <img
            src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_1_decd6c1b6f.jpg"
            alt="Coffee Brewing"
            className='bg-cover bg-no-repeat w-full h-3/5 rounded-lg'
          />
        </div>
      </section>
    </>
  );
}

export default Learnmore;
