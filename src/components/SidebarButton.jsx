import { useState } from 'react'

export default function SidebarButton ({text, Icon, tab, setTab}) {

    let x;
    if(text == "Search") x = 0
    else if (text == "WatchList") x = 1

    let classtxt;
    if(x == tab) classtxt = "sbButton activebtn";
    else classtxt = "sbButton"

    return (
        <button className={classtxt} onClick={() => {setTab(x)}}><span>{text}</span> <Icon className='ico'/></button>
    )
}