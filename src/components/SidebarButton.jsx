import { IoSearchSharp } from "react-icons/io5";
import { LuPopcorn } from "react-icons/lu";
import { MdDone } from "react-icons/md";

export default function SidebarButton ({text, func}) {

    let icon
    text == "Search"? icon = <IoSearchSharp className='ico'/>:0;
    text == "My WatchList"?icon = <LuPopcorn className='ico'/>:0;
    text == "My CompletedList"?icon = <MdDone className='ico'/>:0;

    return (
        <button className='sbButton' onClick={func}><span>{text}</span>{icon}</button>
    )
}