import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Handyman() {
  return (
    <div>
      <div className='flex flex-w'>
        <Sidebar/>
        <div>
        <div class=" p-20 pt-10 flex flex-wrap gap-x-12">
        <div className='p-10 bg-amber-200 rounded-[30px] mt-5'>
            <div className='p-3 pl-5 pr-10'>
                <span className='text-[40px] font-bold text-black '>12</span><br/>
                <span className='text-md font-bold text-black '>Verified Handyman</span>
                </div>
        </div>
        <div className='p-10 bg-orange-300 rounded-[30px] mt-5'>
            <div className='p-3 pl-5 pr-10'>
                <span className='text-[40px] font-bold text-black '>2</span><br/>
                <span className='text-md font-bold text-black '>Verified Requests</span>
                </div>
        </div>
        <div className='p-10 bg-orange-200 rounded-[30px] mt-5'>
            <div className='p-3 pl-5 pr-10'>
                <span className='text-[40px] font-bold text-black '>5</span><br/>
                <span className='text-md font-bold text-black '>Pending Requests</span>
                </div>
        </div>
        
</div>
<div className='flex flex-wrap'>
    <div>
    <span className='text-[28px] font-bold pl-20'>Handyman Details</span>
    <div className="flex flex-wrap mt-10 pl-20">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-x-auto">
        <table class="min-w-full">
        <thead class="border-b bg-neutral-900 text-white">
            <tr>
              <th scope="col" class="text-sm font-medium px-6 py-4 text-left text-white">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                Email Address
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                Phone Number
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                Gender
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                Address
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                City
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                Status
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                Verified
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                Tasks
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Larry
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Wild
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
  </div>
    
</div>
</div>
    </div>

  )
}
