import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import Customer from '../pages/Customer';
import Dashboard from '../pages/Dashboard';
import Handyman from '../pages/Handyman';


export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const Menus=[
      {title : "Dashboard", src:"Dash",path:"/"},
      {title : "Customer Details", src:"Cust", path:"/customer"},
      {title : "Handyman Details", src:"Handy", path:"/handyman"},
      
    ];
  return (
    <div className='flex'>
        <div className={`${ open ? "w-80":"w-24"} h-screen bg-red p-5 pt-12 text-white font-semibold relative duration-300`}>
        <img src="../assets/images/back.png" alt="shrink" width="30px"
        className={`absolute cursor-pointer -right-5 top-16 border-10 border-red rounded-full  bg-red ${!open && "rotate-180"} `}
        onClick={()=>setOpen(!open)}/>
        <div className='flex gap-x-4 items-center'>
        <img src="./assets/images/logo.svg" width="60px" className={`cursor-pointer duration-200 `} alt=""/>
        <h1 className={`font-bold text-white origin-left text-xl duration-100 ${!open && "scale-0"}`}>Jiffer</h1> 
         </div>
         <ul className="pt-8">
             {Menus.map((menu,index)=>{
               return(
                 <Link to={menu.path}>
               <li  key={index} className="text-white text-md inline p-3 mt-4 rounded-xl flex items-center gap-x-4 cursor-pointer hover:bg-orange-200 active:bg-orange-200 focus:outline-none focus:bg-orange-200...">
                 <img src={`./assets/images/${menu.src}.png`} width="30px"alt="img"/> 
               <span className={` ${!open && "scale-0"}`}>{menu.title}</span>
               </li>
               </Link>
             );
             })}
         </ul>
        </div>
    </div>
  )
}
