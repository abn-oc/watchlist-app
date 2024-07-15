import { useState } from 'react'
import SidebarButton from './components/SidebarButton'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import './App.css'
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import SearchTab from './components/SearchTab'
import WatchListTab from './components/WatchListTab'
import CompletedListTab from './components/CompletedListTab'

function App() {

  //functions and event listener for responsiveness
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
        <Link to="/"> <SidebarButton text={"Search"} /> </Link>
        <Link to="my-watchlist"> <SidebarButton text={"My WatchList"} /> </Link>
        <Link to="my-completedlist"> <SidebarButton text={"My CompletedList"} /> </Link>
      </div>
      <div id='sbbg' onClick={closesidebar}></div>
      <Routes>
        <Route path='/' element={<SearchTab/>} />
        <Route path='my-watchlist' element={<WatchListTab/>} />
        <Route path='my-completedlist' element={<CompletedListTab/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
