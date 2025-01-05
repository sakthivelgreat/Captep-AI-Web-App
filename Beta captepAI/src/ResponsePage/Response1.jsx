import React from 'react'

export default function Response1() {
  return (
    <div style={{display:'grid' ,gridTemplateRows:' 1fr auto',padding:'20px'}}>
        <div>
            
        </div>
        <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className="main-search" style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:' #F3E9E6', width:'700px', height:'80px', borderRadius:'20px'}}>
                <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'50px',padding:'0px 40px', width:'90%'}}>
                    <span className="sparkle-icon"><img src="/Gemini logo.png" style={{ height:'24px', width:'20px'}}   /></span>
                    <input type="text" placeholder="What Would you like to create?"  style={{border:'none',flexGrow:'1',margin:'0 10x', backgroundColor:'#F3E9E6', fontSize:'22px', fontFamily:' "Inter", serif ' , outline:'none'}} />
                    <div style={{ display:'flex',justifyContent:'center',alignItems:'center',gap:'40px'}}>
                    <span > <img src="/mic logo.png" style={{ height:'20px', width:'16px'}}  /></span>
                    <button style={{border:'none',backgroundColor:'#F3E9E6'}} > <img src="/Send prompt Arrow.png"  style={{ height:'34px', width:'40px',backgroundColor:'#F3E9E6'}}  /></button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
