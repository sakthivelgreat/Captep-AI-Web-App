import { useState } from 'react';
import './Homepage.css'
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import DescriptionIcon from '@mui/icons-material/Description';

import { useDropdown, DropdownContext } from '@mui/base/useDropdown';
import { useMenuButton } from '@mui/base/useMenuButton';


import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton  } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { padding, styled } from '@mui/system';




export const HistorySideBar = ( { clickMenu ,clickHistoryMenu ,isOpen} ) => {
    const [ClickMenu, setClickMenu] =useState("Chat");
    const clickChildMenuOption = ( Menu) => {
        setClickMenu(Menu);
        clickMenu(Menu);
    }
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`} style={{ height:'92%',display:'flex', gap:'15px',flexDirection:'column' ,alignItems:'center',backgroundColor:'#FFF8F0',padding:'20px 0px',boxShadow: "4px 0 5px rgba(50, 48, 48, 0.2)", marginRight: "8px",  width:'260px'}}>
        <div > 
       <div style={{padding:'10px',backgroundColor:'white', borderRadius:'8px' ,width:'auto'}}>
            <Dropdown>
                <MenuButton style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#09757A',borderRadius:'6px',padding:'6px 70px', cursor:'pointer'}} >
                    <button style={{all:'unset'}}><span style={{color:'white',fontSize:'18px',fontFamily:'"Inter", serif'}}>Menu</span></button>
                </MenuButton>
                <Menu   slots={{ listbox: StyledListbox }}>
                    <StyledMenuItem  onClick={()=>clickChildMenuOption("Chat")}className={`menu-option ${ClickMenu === 'Chat' ? 'active' : ''}`} >
                        <div style={{ width: '20px', height: '20px',padding:'2px 10px'}}>{ClickMenu === 'Chat' && <img src="/mark tick.png" alt="tick" style={{ width: '15px', height: '13px' }} />}</div>
                        <div style={{ width:'80%',display:'flex',justifyContent:'left',alignItems:'center',gap:'20px'}}>
                            <DescriptionIcon style={{  width: '22px', height: '22px' }} />
                            <span style={{fontSize:'18px'}}>Chat</span>
                        </div>
                    </StyledMenuItem>
                    <StyledMenuItem  onClick={()=>clickChildMenuOption("Patterns")}  className={`menu-option ${ClickMenu === 'Patterns' ? 'active' : ''}`} >
                        <div style={{width: '20px', height: '20px',padding:'2px 10px'}}>  {ClickMenu === 'Patterns' && <img src="/mark tick.png" alt="tick" style={{ width: '15px', height: '13px' }} />}</div>
                        <div style={{width: '80%',display:'flex',justifyContent:'left',alignItems:'center',gap:'20px'}}>
                            <ViewKanbanIcon style={{ width: '22px', height: '22px' }} />
                            <span style={{fontSize:'18px'}}>Patterns</span>
                        </div>
                    </StyledMenuItem>
                </Menu>
            </Dropdown>
        </div>
        </div>
        <div style={{ position:'',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:' white',boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",borderRadius:'6px',padding:'6px 20px', cursor:'pointer'}}>
            <button style={{all:'unset', display:'flex',justifyContent:'left',alignItems:'center', gap:'16px'}}> <img src="/New Chat Icon.png"  style={{ width:'23px', height:'23px'}} /> <span style={{color:'#FC8200',fontSize:'16px' ,fontWeight:'500'}}>New Chat</span></button>
        </div>
        <div style={{ display:'grid', gridTemplateRows:'auto 1fr', gap:'15px', width:'80%'}}>
            <div style={{ display:'flex', justifyContent:'start',alignItems:'center',gap:'15px'}} > 
                <svg viewBox="64 64 896 896" focusable="false" data-icon="history" width="1.25em" height="1.25em" fill="currentColor" aria-hidden="true"><path d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"></path></svg> 
                <span style={{fontSize:'20px',fontWeight:'600'}} > All Results</span> 
            </div>
            <div>
                <div style={{display:'flex',justifyContent:'start',alignItems:'center'}}>
                    <span style={{ fontSize:'16px', fontWeight:'600',color:'#8C8C93'}}>Today</span>
                </div>
                <div style={{ padding:'15px 10px' , display:'flex', flexDirection:'column',gap:'7px'}}>
                    <div onClick={()=> clickHistoryMenu("history1")}>  <span  style={{ cursor:'pointer',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',width:'175px'}}>What is  AI</span></div>
                    <span style={{cursor:'pointer', whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',width:'175px'}}>Machine Learning</span>
                    <span style={{cursor:'pointer', whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',width:'175px'}}>AI Generate Capabilities</span>
                </div>
                <div style={{display:'flex',justifyContent:'start',alignItems:'center'}}>
                    <span style={{ fontSize:'16px', fontWeight:'600',color:'#8C8C93'}}>Yesterday</span>
                </div>
                <div style={{ padding:'15px 10px' , display:'flex', flexDirection:'column',gap:'7px'}}>
                    <span style={{ cursor:'pointer',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',width:'175px'}}>Content  Generate  Request</span>
                    <span style={{ cursor:'pointer',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',width:'175px'}}>NavBar CSS Styling</span>
                    <span style={{cursor:'pointer', whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',width:'175px'}}>Login Page Token Removal</span>
                    <span style={{ cursor:'pointer',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',width:'175px'}}>Merge Table Cells Example</span>
                    <span style={{cursor:'pointer', whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',width:'175px'}}>Google Search Guide</span>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default HistorySideBar;
 const StyledListbox = styled('ul')`
  background: white;
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 200px;
  margin-top: 4px;
  margin: 0;
`;

const StyledMenuItem = styled(BaseMenuItem)`
  width: 80%;
  display: flex;
  gap:5px;
  padding:'0px';
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e5eaf2;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid #3399ff;
  }
`;
