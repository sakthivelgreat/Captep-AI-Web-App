import React from 'react';
import './Navbar.css';
import FormatIndentIncreaseRoundedIcon from '@mui/icons-material/FormatIndentIncreaseRounded';

const Navbar = ( {showSideBar , showProfileEdit} ) => {
  return (
    <nav className="navbar" style={{ display:'flex',justifyContent:'space-between'}}>
      <div style={{ display:'flex',  justifyContent:'center',alignContent:'center',gap:'40px', padding:'0 20px'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> <FormatIndentIncreaseRoundedIcon  onClick={showSideBar}  style={{width:'30px',height:'30px'}}  /> </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><img src="/captep logo.png"   style={{ height:'30px', width:'150px'}} /></div>
      </div>
      <div style={{height:'100%', width:'400px'}} className="profileContiner" >
        <div className="profile" >
         <span onClick={ showProfileEdit } style={{padding:'8px 25px', backgroundColor:'white', borderRadius:'6px', cursor:'pointer'}}>
          <span style={{backgroundColor:'#6B3117',padding:'5px 10px', borderRadius:'50%', color:'white'}}>S</span>
          <span className="user-name">Sakthivel Kandhasami</span>
         </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
