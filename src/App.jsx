import SidebarButton from './components/SidebarButton'
import { RxHamburgerMenu } from "react-icons/rx";
import './App.css'
import { NavLink, Navigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import SearchTab from './components/SearchTab'
import WatchListTab from './components/WatchListTab'
import CompletedListTab from './components/CompletedListTab'
import Details from './components/Details'

function App() {

  //functions and event listener for responsiveness
  function opensidebar() {
    document.getElementById("sbbg").style.display = "block"
    document.getElementById("sidebar").style.left = "0%"
  }
  function closesidebar() {
    document.getElementById("sbbg").style.display = "none"
    document.getElementById("sidebar").style.left = "-100%"
  }
  // window.addEventListener('resize', () => {
  //   if(window.innerWidth > 500 && document.getElementById("sidebar").style.left == "0%") {
  //     document.getElementById("sbbg").style.display = "none"
  //   }
  // })

  return (
    <>
      <RxHamburgerMenu id='hamburgericon' onClick={opensidebar}/>
      <div id='sidebar'>
        <NavLink to='/search/'><SidebarButton text="Search"/></NavLink>
        <NavLink to='/my-watchlist'><SidebarButton text="My WatchList"/></NavLink>
        <NavLink to='/my-completedlist' ><SidebarButton text="My CompletedList"/></NavLink>
      </div>
      <div id='sbbg' onClick={closesidebar}></div>
      <Routes>
        <Route path='/' element={<Navigate to={'/search/'}/>}/>
        <Route path='/search/' element={<SearchTab/>}></Route>
        <Route path='/search/:value' element={<SearchTab/>}></Route>
        {/* <Route path='/my-watchlist' element={<WatchListTab/>} /> */}
        {/* <Route path='/my-completedlist' element={<CompletedListTab/>} /> */}
        <Route path='/:a/:b/details/:title' element={<Details/>}></Route>
        {/* <Route path='/:a/details/:title' element={<Details/>}></Route> */}
      </Routes>
    </>
  )
}

export default App
