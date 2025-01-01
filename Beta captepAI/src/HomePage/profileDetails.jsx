

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export const ProfileDetails = () => {
  return (
    <div  style={{position:'absolute',left:'80%', fontFamily:'"Inter", serif '}}>
      <div className="profile-dropdown" style={{ position:'relative',top:'0', right:'0',backgroundColor:'white', border:'1px solid #ddd',borderRadius:'8px',boxShadow:'1px 2px 16px rgba(0, 0, 0, 0.1)',width:'220px',padding:'10px 15px',zIndex:'1000'}} >
      <div  style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'30px' , width:'100%'} } >
          <span><svg viewBox="64 64 896 896" focusable="false" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg></span>
          <span>Profile</span>
        </div>
        <hr style={{border:'none',borderTop:' 1px solid #ddd', margin:'10px 0'}}  />
        <div style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'30px' , width:'100%'} } >
          <span> <SettingsRoundedIcon/> </span>
          <span>Settings</span>
        </div>
        <hr style={{border:'none',borderTop:' 1px solid #ddd', margin:'10px 0'}} />
        <div  style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'30px' , width:'100%'} } >
          <span> <LogoutRoundedIcon/> </span>
          <span>Lagout</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
