import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import './Homepage.css';
import HistorySideBar from './HistorySideBar';
import ProfileDetails from './profileDetails';
import MainPromptpage from './MainPromptpage';
import { PatternHomePage } from '../MyPatternsPage/patternHomePage';


export const Homepage = () => {
  const [ showbar, setshowsidebartem] = useState(false);
  const [ showProfile, setShowProfile] = useState(false);
  const [ showManagePatterns, setManagePatterns] = useState();


  const showSideBar = () =>{
    setshowsidebartem(!showbar);

  } 
  const showProfileEdit =() => {
    setShowProfile(!showProfile)
  }

  return (
    <div style={{ display:'grid',gridTemplateRows:'auto 1fr',height: '100vh'}}>
      <div>
        <Navbar showSideBar={showSideBar} showProfileEdit={ showProfileEdit }/>
      </div>
      <div style={{display:'grid',gridTemplateColumns: showbar ? 'auto 1fr' : '1fr',overflow:'hidden', width:'100%'}}>
        {
          showbar &&(
            <HistorySideBar/>
          )
        }
        {showProfile && (
          <ProfileDetails/>
        )}
        <PatternHomePage/>
        {/* <MainPromptpage/> */}
      </div>
    </div>
  )
}

export default Homepage;