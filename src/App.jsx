import { useState } from 'react'
import SidebarButton from './components/SidebarButton'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import './App.css'
import { Link, Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import SearchTab from './components/SearchTab'
import WatchListTab from './components/WatchListTab'
import CompletedListTab from './components/CompletedListTab'
import Details from './components/Details'

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
      <div className='w'>
      <div id='sidebar' className='sidebar'>
        <IoIosClose id='closeicon' onClick={closesidebar}/>
        <NavLink to='/search/' className="sbButton"><SidebarButton text="Search"/></NavLink>
        <NavLink to='/my-watchlist' className="sbButton"><SidebarButton text="My WatchList"/></NavLink>
        <NavLink to='/my-completedlist' className="sbButton"><SidebarButton text="My CompletedList"/></NavLink>
      </div>
      </div>
      <div id='sbbg' onClick={closesidebar}></div>
      <Routes>
        <Route path='/' element={<Navigate to={'/search/'}/>}/>
        <Route path='/search/' element={<SearchTab/>}></Route>
        <Route path='/search/:value' element={<SearchTab/>}></Route>
        <Route path='/my-watchlist' element={<WatchListTab/>} />
        <Route path='/my-completedlist' element={<CompletedListTab/>} />
        {/* <Route path='/search/:movie/details/:title' element={<Details/>}></Route> */}
        <Route path='/:a/:b/details/:title' element={<Details/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
