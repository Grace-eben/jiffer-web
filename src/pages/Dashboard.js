import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  return (
    <div>
    <div className='flex flex-wrap  '>
        <Sidebar/>
        <div>
        <div class=" p-20 pt-10 flex flex-wrap gap-x-12">
        <div className='p-10 bg-amber-200 rounded-[30px] mt-5'>
            <div className='p-3 pl-5 pr-10'>
                <span className='text-[40px] font-bold text-black '>12</span><br/>
                <span className='text-md font-bold text-black '>Total Customers</span>
                </div>
        </div>
        <div className='p-10 bg-orange-300 rounded-[30px] mt-5'>
            <div className='p-3 pl-5 pr-10'>
                <span className='text-[40px] font-bold text-black '>32</span><br/>
                <span className='text-md font-bold text-black '>Total Handyman</span>
                </div>
        </div>
        <div className='p-10 bg-orange-200 rounded-[30px] mt-5'>
            <div className='p-3 pl-5 pr-10'>
                <span className='text-[40px] font-bold text-black '>50</span><br/>
                <span className='text-md font-bold text-black '>Completed Services</span>
                </div>
        </div>
        
</div>
<div className='flex flex-wrap'>
    <span className='text-[28px] font-bold pl-20'>Summary</span>
    <div className="flex flex-wrap">
    

    </div>
</div>
</div>
 </div>
 </div>
  )
}
