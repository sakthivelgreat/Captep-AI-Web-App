import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import './Homepage.css';
import HistorySideBar from './HistorySideBar';
import ProfileDetails from './profileDetails';
import MainPromptpage from './MainPromptpage';
import { PatternHomePage } from '../MyPatternsPage/patternHomePage';
import Response1 from '../ResponsePage/Response1';


export const Homepage = () => {
  const [ showbar, setshowsidebartem] = useState(false);
  const [ showProfile, setShowProfile] = useState(false);
 
  const [ clickMenuOption, setclickMenuOption] = useState("Chat");
  const [ clickHistoryOption, setclickHistoryOption] = useState(null);


  const showSideBar = () =>{
    setshowsidebartem(!showbar);

  } 
  const showProfileEdit =() => {
    setShowProfile(!showProfile)
  }

  const handleMenuClick = (option) => {
    setclickMenuOption(option); 
    setclickHistoryOption(null); 
  };
  const ClickHistory = (option) => {
    setclickHistoryOption(option); 
    setclickMenuOption(null);
  };
  
  return (
    <div style={{ display:'grid',gridTemplateRows:'auto 1fr',height: '100vh'}}>
      <div><Navbar showSideBar={showSideBar} showProfileEdit={ showProfileEdit }/> </div>
      <div style={{display:'grid',gridTemplateColumns: showbar ? 'auto 1fr' : '1fr',overflow:'hidden', width:'100%'}}>
       
        {showbar && <HistorySideBar clickMenu={handleMenuClick} clickHistoryMenu={ClickHistory} />}
        {showProfile && <ProfileDetails />}
        {clickMenuOption === "Chat" && <MainPromptpage />}
        {clickMenuOption === "Patterns" && <PatternHomePage />}
        {clickHistoryOption === "history1"  && <Response1/>}

      </div>
    </div>
  )
}

export default Homepage;