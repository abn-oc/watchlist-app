import { useState } from 'react'
import SidebarButton from './components/SidebarButton'
import WatchListTab from './components/WatchListTab';
import SearchTab from './components/SearchTab'
import { LuPopcorn } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import './App.css'

function App() {

  let [tab,setTab] = useState(0)
  let content;
  if(tab == 0) content = <SearchTab/>
  else if(tab == 1) content = <WatchListTab/>


  function opensidebar() {
    document.getElementById("closeicon").style.display = "block"
    document.getElementById("sbbg").style.display = "block"
    document.getElementById("sidebar").classList.add("sbopen")
  }
  function closesidebar() {
    document.getElementById("closeicon").style.display = "none"
    document.getElementById("sbbg").style.display = "none"
    document.getElementById("sidebar").classList.remove("sbopen")
  }

  window.addEventListener('resize', () => {
    if(window.innerWidth > 900) {
      closesidebar()
    }
  })

  return (
    <>
    <div className='container'>
      <RxHamburgerMenu id='hamburgericon' onClick={opensidebar}/>
      <div id='sidebar' className='sidebar'>
        <IoIosClose id='closeicon' onClick={closesidebar}/>
        <SidebarButton text={"Search"} Icon={IoSearchSharp} tab={tab} setTab={setTab} />
        <SidebarButton text={"WatchList"} Icon={LuPopcorn} tab={tab} setTab={setTab} />
      </div>
      <div id='sbbg' onClick={closesidebar}></div>
      {content}
    </div>
    </>
  )
}

export default App
