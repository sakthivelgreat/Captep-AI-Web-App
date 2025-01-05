import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ClickPatternCards ()  {
   


  return (
    <div style={{width:'800px'}}>
        <span style={{display:'flex', flexDirection:'column', gap:'2px',padding:'5px'}}>
            <span style={{fontSize:'16px',fontWeight:'600'}}>Software Proposal Writer</span>
            <span style={{fontSize:'14px',display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: '2', textOverflow: 'ellipsis'}} >The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs. By leveraging user inputs, this tool eliminates the complexity and time involved in drafting proposals manually.</span>
        </span>
        <div style={{display:'grid', gridTemplateColumns:' auto 1fr auto'}}>
            <div style={{ display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'start',gap:'20px', padding:'10px 20px'}}> 
                <button  style={{all:'unset'}}><div style={{background:'#F4F2FE',padding:'8px 15px',borderRadius:'4px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}> <span style={{display:'block',width:'120px', fontSize:'14px' ,fontWeight:'600' ,textOverflow:'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>Project Details</span></div></button>
                <button  style={{all:'unset'}}><div style={{background:'#F4F2FE' ,padding:'8px 15px',borderRadius:'4px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}> <span style={{ display:'block',width:'120px',fontSize:'14px' ,fontWeight:'600' ,textOverflow:'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>Company Information</span></div></button>
            </div>
            <div style={{display:'grid',gridTemplateRows:'auto 1fr auto',gap:'10px',width:'100%'}}>
                <div style={{ width:'100%'}}>
                <button  style={{all:'unset',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><div style={{backgroundColor:'#F4F2FE' ,width:'100%',display:'flex',justifyContent:'center',alignItems:'center',padding:'5px 10px',borderRadius:'4px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}> <span style={{ display:'block',fontSize:'14px' ,fontWeight:'600' ,textOverflow:'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>Company Information</span></div></button>
                </div>
                <div style={{ display:'grid', gridTemplateRows:' auto 1fr',padding:'8px 0px',height:'250px', width:'100%',backgroundColor:'white',borderRadius:'5px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}>
                    <div style={{ width:'90%', padding:'5px 20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <div style={{display:'flex',justifyContent:'start'}}>
                            <div style={{backgroundColor:'white', padding:'2px 4px',border:'1.5px solid #C2CDD8',borderRadius:'4px',width:'auto',display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}> <ArrowBackIcon on style={{color:'#7A7C7F', width:'15px',height:'15px'}}/> <button   style={{all:'unset',color:'#7A7C7F'}}><span style={{fontSize:'12px',fontWeight:'600'}}>Back</span></button></div>
                        </div>
                        <div style={{display:'flex',justifyContent:'start'}}>
                            <div style={{backgroundColor:'white', padding:'2px 4px',border:'1.5px solid #C2CDD8',borderRadius:'4px',width:'auto',display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}> <ArrowBackIcon on style={{color:'#7A7C7F', width:'15px',height:'15px'}}/> <button   style={{all:'unset',color:'#7A7C7F'}}><span style={{fontSize:'12px',fontWeight:'600'}}>Next</span></button></div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px 0px', width:'100%',backgroundColor:'#F9F9FB',borderRadius:'8px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}>
                    <div style={{display:'flex',padding:'5px 10px',justifyContent:'center',alignItems:'center',gap:'10px'}}> <FilterListIcon style={{color:' #FC8200'}}/> <span style={{color:' #C28D74',fontSize:'14px' ,fontWeight:'600'}}>Blog Post Writer</span></div>
                    <div style={{display:'flex',padding:'5px 10px',justifyContent:'center',alignItems:'center',gap:'10px'}}> <FilterListIcon style={{color:' #FC8200'}}/> <span style={{color:' #C28D74',fontSize:'14px' ,fontWeight:'600'}}>Gemini 1.5 Flash</span></div>
                </div>
              


            </div>
            <div style={{ display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'start',gap:'15px', padding:'10px 20px'}}>
                <button  style={{all:'unset'}}><div style={{background:'#F4F2FE',padding:'8px 15px',borderRadius:'4px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}> <span style={{display:'block',width:'120px', fontSize:'14px' ,fontWeight:'600' ,textOverflow:'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>Technology Stack</span></div></button>
                <button  style={{all:'unset'}}><div style={{background:'#F4F2FE' ,padding:'8px 15px',borderRadius:'4px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}> <span style={{ display:'block',width:'120px',fontSize:'14px' ,fontWeight:'600' ,textOverflow:'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>Time Lline</span></div></button>
                <button  style={{all:'unset'}}><div style={{background:'#F4F2FE' ,padding:'8px 15px',borderRadius:'4px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}> <span style={{ display:'block',width:'120px',fontSize:'14px' ,fontWeight:'600' ,textOverflow:'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>Budget</span></div></button>
            </div>
        </div>
    </div>
  )
}
