import { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { LuPopcorn } from "react-icons/lu";
import { MdDone } from "react-icons/md";

export default function SidebarButton ({text}) {

    let icon
    text == "Search"? icon = <IoSearchSharp className='ico'/>:0;
    text == "My WatchList"?icon = <LuPopcorn className='ico'/>:0;
    text == "My CompletedList"?icon = <MdDone className='ico'/>:0;

    return (
        <button><span>{text}</span>{icon}</button>
    )
}