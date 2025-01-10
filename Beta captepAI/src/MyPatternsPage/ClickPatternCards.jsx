import React from 'react'
import { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



import PropTypes from "prop-types";

import './patternHomePage.css';
import PatternContainer from './swipslider';

export default function ClickPatternCards ( {patternName})  {
 

  const templetes = [
    <Template1 key="template1" />,
    <Template2 key="template2" />,
    <Template3 key="template3" />,
    <Template4 key="template4" />,
    <Template5 key="template5" />
  ];

    const sectionButton = patternName?.sectionButton;

    const [first, ...rest] = sectionButton;



    const [ firstDiv, setfirstDiv] = useState([]);
    const [secondDiv, setSecondDiv] = useState(first);
    const [thirdDiv, setTridDiv] = useState(rest);


    console.log('secondDiv--->',secondDiv); 
    console.log('thiredDiv--->',thirdDiv); 
    const [ showtemplete, setshowtemplete] = useState(templetes[0]);

    const [showslide, setShowSlide] = useState(false);


    const NextButton = () => {
        if (thirdDiv.length === 0) return; 
        const [nextButton, ...remainingThirdDiv] = thirdDiv;
        setShowSlide("bottom-to-topleft");
        setTimeout(() => {
            setfirstDiv([...firstDiv,secondDiv]);
           
            setShowSlide("");
            setSecondDiv([nextButton]);
            setTridDiv(remainingThirdDiv);
            setshowtemplete(templetes[firstDiv.length+1]);
        }, 200);
      
      };

      const BackButton = () => {
        if (firstDiv.length === 0) return; 
        const lastFirstDivButton = firstDiv[firstDiv.length - 1];
        setShowSlide("top-to-rightbottom");
        setTimeout(() => {
            setTridDiv([secondDiv[0], ...thirdDiv]);
            setShowSlide("");
            setshowtemplete(templetes[firstDiv.length-1])
            setSecondDiv([lastFirstDivButton]); 
            setfirstDiv(firstDiv.slice(0, -1));
            
        }, 200);
        
      };  



  return ( 
    <div style={{width:'800px',overflow:'hidden'}}>
        <span style={{display:'flex', flexDirection:'column', gap:'2px',padding:'5px'}}>
            <span style={{fontSize:'16px',fontWeight:'600'}}>{ patternName.title} </span>
            <span style={{fontSize:'14px',display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: '2', textOverflow: 'ellipsis'}} >{ patternName.Descrioption}</span>
        </span>
        <div style={{display:'grid', gridTemplateColumns:' auto 1fr auto'}}>
            <div style={{width:'150px', display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'start',gap:'20px', padding:'10px 20px'}}> 
            {firstDiv?.slice().reverse()?.map((buttonLabel , index) => (
                <button   key={index} style={{all:'unset'}}><div  className={index ==0 ? showslide:''}  style={{background:'#F4F2FE',padding:'8px 15px',borderRadius:'4px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}> <span style={{display:'block',width:'120px', fontSize:'14px' ,fontWeight:'600' ,textOverflow:'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>{buttonLabel}</span></div></button>
            ))}
            </div>
            <div style={{display:'grid',gridTemplateRows:'auto 1fr auto',gap:'10px',width:'100%'}}>
                <div style={{ width:'100%'}}>
                <button  style={{all:'unset',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><div style={{backgroundColor:'#F4F2FE' ,width:'100%',display:'flex',justifyContent:'center',alignItems:'center',padding:'5px 10px',borderRadius:'4px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}> <span style={{ display:'block',fontSize:'14px' ,fontWeight:'600' ,textOverflow:'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>{secondDiv}</span></div></button>
                </div>
                <div style={{ display:'grid', gridTemplateRows:' auto 1fr',padding:'8px 0px',height:'250px', width:'100%',backgroundColor:'white',borderRadius:'5px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}>
                    <div style={{ width:'90%', padding:'5px 20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <div onClick={BackButton} style={{display:'flex',justifyContent:'start'}}>
                            <div style={{backgroundColor:'white', padding:'2px 4px',border:'1.5px solid #C2CDD8',borderRadius:'4px',width:'auto',display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}> <ArrowBackIcon on style={{color:'#7A7C7F', width:'15px',height:'15px'}}/> <button   style={{all:'unset',color:'#7A7C7F'}}><span style={{fontSize:'12px',fontWeight:'600'}}>Back</span></button></div>
                        </div>
                        <div onClick={NextButton} style={{display:'flex',justifyContent:'start'}}>
                            <div style={{backgroundColor:'white', padding:'2px 4px',border:'1.5px solid #C2CDD8',borderRadius:'4px',width:'auto',display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}> <ArrowBackIcon className='rightArrow' on style={{ transform:'ro',color:'#7A7C7F', width:'15px',height:'15px'}}/> <button   style={{all:'unset',color:'#7A7C7F'}}><span style={{fontSize:'12px',fontWeight:'600'}}>Next</span></button></div>
                        </div>
                    </div>
                    <div className='sectionTemplete' style={{maxHeight:'100vh',overflowY:'auto'}}>
                     {showtemplete}
                    </div>
                </div>
                <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px 0px', width:'100%',backgroundColor:'#F9F9FB',borderRadius:'8px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}>
                    <div style={{display:'flex',padding:'5px 10px',justifyContent:'center',alignItems:'center',gap:'10px'}}> <FilterListIcon style={{color:' #FC8200'}}/> <span style={{color:' #C28D74',fontSize:'14px' ,fontWeight:'600'}}>Blog Post Writer</span></div>
                    <div style={{display:'flex',padding:'5px 10px',justifyContent:'center',alignItems:'center',gap:'10px'}}> <FilterListIcon style={{color:' #FC8200'}}/> <span style={{color:' #C28D74',fontSize:'14px' ,fontWeight:'600'}}>Gemini 1.5 Flash</span></div>
                </div>
            </div>
            <div style={{ width:'150px', display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'start',gap:'15px', padding:'10px 20px'}}>
            {thirdDiv?.map((buttonLabel , index) => (
                <button   key={index} style={{all:'unset'}}><div className={index ==0 ? showslide:''} style={{background:'#F4F2FE',padding:'8px 15px',borderRadius:'4px',boxShadow:'0px 0px 5px rgba(52, 36, 36, 0.25)'}}> <span style={{display:'block',width:'120px', fontSize:'14px' ,fontWeight:'600' ,textOverflow:'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>{buttonLabel}</span></div></button>
            ))}
            </div>
        </div>
    </div>
  )
}



const Template1 = () => {
    return (
      <div style={{ display:'flex',flexDirection:'column',gap:'10px',padding:'20px 10px',overflowY:'auto'}}>
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '1.5px solid #D9D9D9', borderRadius: '4px', height: '30px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Project Name" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>Enter your Project Name </span>
        
        </span>    
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '1.5px solid #D9D9D9', borderRadius: '4px', height: '30px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Objectives" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>  Describe the primary goals or aims of this project. </span>
        </span>
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '1.5px solid #D9D9D9', borderRadius: '4px', height: '30px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Expected Outcome" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>Explain the results or benefits expected from this project. </span>
        </span>
      </div>
    );
  };

const Template2 = () => {
    return (
      <div style={{ display:'flex',flexDirection:'column',gap:'10px',padding:'20px 10px',overflowY:'auto'}}>
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '2px solid #D9D9D9', borderRadius: '4px', height: '30px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Company Name" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>Provide the name of the company involved in the project.</span>
        
        </span>    
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '2px solid #D9D9D9', borderRadius: '4px', height: '30px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Website" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}> Enter the official website URL of the company.
            </span>
        </span>
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '2px solid #D9D9D9', borderRadius: '4px', height: '30px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Industry/Domain" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>Specify the industry or domain this project belongs to..
            </span>
        </span>
      </div>
    );
  };

const Template3 = () => {
    return (
      <div style={{ display:'flex',flexDirection:'column',gap:'10px',padding:'20px 10px',overflowY:'auto'}}>
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '2px solid #D9D9D9', borderRadius: '4px', height: '80px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Type something about Key Stakeholders" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>List the individuals or groups who have a significant interest in the project.</span>
        </span>
      </div>
    );
  };

  const Template4 = () => {
    return (
      <div style={{ display:'flex',flexDirection:'column',gap:'10px',padding:'20px 10px' ,maxHeight: '100vh', overflowY: 'auto',}}>
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '2px solid #D9D9D9', borderRadius: '4px', height: '30px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Start Date" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>Enter the planned starting date for the project.</span>
        </span>    
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '2px solid #D9D9D9', borderRadius: '4px', height: '30px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="End Date" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>Enter the planned completion date for the project.</span>
        </span>
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '2px solid #D9D9D9', borderRadius: '4px', height: '30px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Milestones " />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>Define the key phases or milestones of the project timeline.</span>
        </span>
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '2px solid #D9D9D9', borderRadius: '4px', height: '30px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Deadlines " />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>Specify any critical deadlines associated with the project milestones.</span>
        </span>
      </div>
    );
  };

  const Template5 = () => {
    return (
      <div style={{ display:'flex',flexDirection:'column',gap:'10px',padding:'20px 10px',overflowY:'auto'}}>
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '2px solid #D9D9D9', borderRadius: '4px', height: '80px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Type something about  Resource Costs" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>Detail the estimated costs for resources such as personnel or materials. </span>
        
        </span>    
        <span style={{display:'flex',flexDirection:'column',gap:'5px'}}>
            <textarea style={{all: 'unset', border: '2px solid #D9D9D9', borderRadius: '4px', height: '80px',padding:'0px 5px', fontFamily: '"Inter", serif',  fontSize: '14px' ,lineHeight: '1.5',  overflowY: 'auto', resize: 'none',}} className="templeteinput1" placeholder="Expenses  Breakdown" />
            <span style={{ fontSize: '14px', fontFamily: '"Inter",serif', color: ' #AEAEAE' }}>Provide a breakdown of all projected expenses for the project. </span>
        </span>
      </div>
    );
  };
  

  ClickPatternCards.propTypes = {
  patternName: PropTypes.array.isRequired
  // patternDescrition: PropTypes.string.isRequired,
  // buttonSection: PropTypes.arrayOf(PropTypes.string).isRequired,
};


