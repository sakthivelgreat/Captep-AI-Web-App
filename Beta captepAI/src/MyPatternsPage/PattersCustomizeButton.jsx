import React from 'react';
import { Select, MenuItem } from '@mui/material';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';


export default function PatternCustomizeButton() {
  const [selectedValue, setSelectedValue] = React.useState('All');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Select value={selectedValue} onChange={handleChange} IconComponent={KeyboardArrowDownSharpIcon}
      style={{ backgroundColor: 'white', width: '250px', height: '50px', border: 'none', borderRadius: '8px', fontWeight: '600', fontFamily: '"Inter", serif', fontSize: '18px', boxShadow: '0px 0px 15px rgba(54, 52, 52, 0.25)', display: 'flex'}}
      renderValue={(value) => (
        <div style={{display:'grid' , gridTemplateColumns:' auto 1fr',gap:'30px',alignItems:'left'}} >  
            <BarChartSharpIcon   />
            <span style={{ fontSize:'18px', fontWeight:'600',fontFamily: '"Inter", serif'}}>{value}</span>
        </div>
      )}
    >
      <MenuItem style={{fontWeight: '600', fontFamily: '"Inter", serif', fontSize: '16px'}} value={'All'}>All</MenuItem>
      <MenuItem style={{fontWeight: '600', fontFamily: '"Inter", serif', fontSize: '16px'}} value={'Most Liked'}>Most Liked</MenuItem>
      <MenuItem style={{fontWeight: '600', fontFamily: '"Inter", serif', fontSize: '16px'}} value={'Most Viewed'}>Most Viewed</MenuItem>
      <MenuItem style={{fontWeight: '600', fontFamily: '"Inter", serif', fontSize: '16px'}} value={'Recently Viewed'}>Recently Viewed</MenuItem>
    </Select>
  );
}
