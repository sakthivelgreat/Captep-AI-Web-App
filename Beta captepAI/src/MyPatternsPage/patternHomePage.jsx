import React, { useRef, useState } from 'react';

import './patternHomePage.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebhookIcon from '@mui/icons-material/Webhook';
import EmailIcon from '@mui/icons-material/Email';
import PostAddIcon from '@mui/icons-material/PostAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WorkIcon from '@mui/icons-material/Work';


import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';


import PatternCustomizeButton from './PattersCustomizeButton';
import { Slide } from '@mui/material';
import Cards from './Cards';
import Cards2 from './Cards2';
import ClickPatternCards from './ClickPatternCards';


const Crown = () => { return ( <img src="/crown logo.png"  alt="Crown Logo" style={{width: '40px', height: '40px'}} /> ); }

const categories = [ 
    { name: "Use Story Writer" , img:" Use writer.png"},
    { name:"Marketing" , img:"Marketing.png"},
    { name:"All Tools", img:"All Time.png"},
    { name:"Sales", img:"Sales.png"},
    { name:"SEO", img:"SEO.png"},
    { name: "Use Story Writer" , img:" Use writer.png"},
    { name:"Marketing" , img:"Marketing.png"},
    { name:"All Tools", img:"All Time.png"},
    { name:"Sales", img:"Sales.png"},
    { name:"SEO", img:"SEO.png"},
];

export const PatternHomePage = () => {


  

   const [data] = useState([
    { id:1 ,logo:<WebhookIcon/> ,card:'standard',BackgroundColor:'linear-gradient(200deg, #057F8C 40%,  #1AC8DA 100%)'  ,title:'Software Proposal Writer ',Descrioption:'The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs.' },
    { id:2 ,logo:<LinkedInIcon/> ,card:'standard' ,BackgroundColor:'linear-gradient(200deg, #ae0503 40%, #f39492 100%)' ,title:'LinkedIn Ad Writer' ,Descrioption:'An expertly crafted framework to design impactful LinkedIn Ad content that captures attention and drives engagement.'},
    { id:3 ,logo:<FacebookIcon/> ,card:'standard' ,BackgroundColor:'linear-gradient( 200deg, #a706f4 40%,  #eab0f5 100%)' ,title:'Facebook Ad Writer' ,Descrioption:'An intuitive framework designed to create compelling Facebook Post content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals.'},
    { id:4 ,logo:<LinkedInIcon/> ,card:'standard',BackgroundColor:'linear-gradient( 200deg, #119439 40%,rgb(156, 216, 146) 100%)',title:'LinkedIn Post Writer' ,Descrioption:'An expertly crafted framework to design impactful LinkedIn Post content that captures attention and drives engagement.'},
    { id:5 ,logo:<FacebookIcon/> ,card:'standard', BackgroundColor:'linear-gradient(200deg, #2806A6 40%, #8664e4 100%)',title:'Facebook Post Writer' ,Descrioption:'An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals.'},
    { id:6 ,logo:<EmailIcon/> ,card:'standard', BackgroundColor:'linear-gradient(200deg, #186E6F 40%,rgb(66, 157, 128) 100%)' ,title:'Email  Writer' ,Descrioption:'A smart framework for crafting effective email content that captures attention and drives action.'},
   
    { id:7 ,logo:<PostAddIcon/> ,card:'standard',BackgroundColor:'linear-gradient( 200deg, #119439 40%,rgb(156, 216, 146) 100%)'  ,title:'Blog Post Writer' ,Descrioption:'An SEO Writer specializes in creating content that is optimized for both search engines and users'},
    { id:8 ,logo:<GroupsIcon/> ,card:'standard' ,BackgroundColor:'linear-gradient(200deg, #2806A6 40%, #8664e4 100%)' ,title:'Minutes of Meeting(MOM) Writer Ad Writer' ,Descrioption:'This pattern transforms meeting transcripts into well-organized Minutes of Meeting (MoM), capturing key discussions, decisions, and actionable tasks.'},
    { id:9 ,logo:<EventRepeatIcon/> ,card:'standard' , BackgroundColor:'linear-gradient(200deg, #186E6F 40%,rgb(66, 157, 128) 100%)',title:'Daily Scrum Report Writer' ,Descrioption:'Scrum report pattern is designed to transform raw meeting transcripts into a structured and actionable Scrum report. It systematically organizes the transcript data to provide clear insights into the team’s progress and challenges. By breaking down individual contributions in the Sprint Progress section, the prompt ensures accountability and transparency for each team member.'},
    { id:10 ,logo:<MeetingRoomIcon/> ,card:'standard', BackgroundColor:'linear-gradient(200deg, #057F8C 40%,  #1AC8DA 100%)' ,title:'Sprint Retrospect Meeting Summary' ,Descrioption:'This pattern converts a Sprint Retrospective meeting transcript into a clear, actionable summary, helping Agile teams reflect on their sprint performance.'},
    { id:11 ,logo:<AutoStoriesIcon/> , card:'standard', BackgroundColor:'linear-gradient(200deg, #ae0503 40%, #f39492 100%)' , title:'Agile User Story Writer' ,Descrioption:'Generate Agile user stories based on discussion points or transcripts, including clear goals, acceptance criteria for defining "done," and dependencies for successful implementation.'},
    { id:12 ,logo:<WorkIcon/> , card:'standard' ,BackgroundColor:'linear-gradient( 200deg, #a706f4 40%,  #eab0f5 100%)'  , title:'Job Description Writer' ,Descrioption:'This Job Description Writer enables users to input key details and generate a comprehensive, tailored job description. It ensures all necessary elements are included, making the process quick and effective for attracting the right candidates.'},
   
    { id:13 ,logo:<Crown/> ,card:'Custom',BackgroundColor:'linear-gradient(200deg, #057F8C 40%,  #1AC8DA 100%)'  ,title:'Custom Pattern 1' ,Descrioption:'An SEO Writer specializes in creating content that is optimized for both search engines and users'},
    { id:14 ,logo:<Crown/> ,card:'Custom',BackgroundColor:'linear-gradient(200deg, #ae0503 40%, #f39492 100%)' ,title:'Custom Pattern 2' ,Descrioption:'This pattern transforms meeting transcripts into well-organized Minutes of Meeting (MoM), capturing key discussions, decisions, and actionable tasks.'},
    { id:15 ,logo:<Crown/> ,card:'Custom',BackgroundColor:'linear-gradient( 200deg, #a706f4 40%,  #eab0f5 100%)' ,title:'Custom Pattern 3' ,Descrioption:'Scrum report pattern is designed to transform raw meeting transcripts into a structured and actionable Scrum report. It systematically organizes the transcript data to provide clear insights into the team’s progress and challenges. By breaking down individual contributions in the Sprint Progress section, the prompt ensures accountability and transparency for each team member.'},
    { id:16 ,logo:<Crown/> ,card:'Custom' ,BackgroundColor:'linear-gradient( 200deg, #119439 40%,rgb(156, 216, 146) 100%)' ,title:'Custom Pattern 4' ,Descrioption:'This pattern converts a Sprint Retrospective meeting transcript into a clear, actionable summary, helping Agile teams reflect on their sprint performance.'},
    { id:1 ,logo:<Crown/> ,card:'Custom',BackgroundColor:'linear-gradient(200deg, #057F8C 40%,  #1AC8DA 100%)'  ,title:'Custom Pattern 5 ',Descrioption:'The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs.' },
    { id:2 ,logo:<Crown/> ,card:'Custom' ,BackgroundColor:'linear-gradient(200deg, #ae0503 40%, #f39492 100%)' ,title:'Custom Pattern 6' ,Descrioption:'An expertly crafted framework to design impactful LinkedIn Ad content that captures attention and drives engagement.'},
    { id:3 ,logo:<Crown/> ,card:'Custom' ,BackgroundColor:'linear-gradient( 200deg, #a706f4 40%,  #eab0f5 100%)' ,title:'Custom Pattern 7' ,Descrioption:'An intuitive framework designed to create compelling Facebook Post content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals.'},
    { id:4 ,logo:<Crown/> ,card:'Custom',BackgroundColor:'linear-gradient( 200deg, #119439 40%,rgb(156, 216, 146) 100%)',title:'Custom Pattern 8' ,Descrioption:'An expertly crafted framework to design impactful LinkedIn Post content that captures attention and drives engagement.'},
    { id:5 ,logo:<Crown/> ,card:'Custom', BackgroundColor:'linear-gradient(200deg, #2806A6 40%, #8664e4 100%)',title:'Custom Pattern 9' ,Descrioption:'An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals.'},
    { id:6 ,logo:<Crown/> ,card:'Custom', BackgroundColor:'linear-gradient(200deg, #186E6F 40%,rgb(66, 157, 128) 100%)' ,title:'Custom Pattern 10' ,Descrioption:'A smart framework for crafting effective email content that captures attention and drives action.'},
   
    { id:7 ,logo:<Crown/> ,card:'Custom',BackgroundColor:'linear-gradient( 200deg, #119439 40%,rgb(156, 216, 146) 100%)'  ,title:'Custom Pattern 11' ,Descrioption:'An SEO Writer specializes in creating content that is optimized for both search engines and users'},
    { id:8 ,logo:<Crown/> ,card:'Custom' ,BackgroundColor:'linear-gradient(200deg, #2806A6 40%, #8664e4 100%)' ,title:'Custom Pattern 12' ,Descrioption:'This pattern transforms meeting transcripts into well-organized Minutes of Meeting (MoM), capturing key discussions, decisions, and actionable tasks.'},
    { id:9 ,logo:<Crown/> ,card:'Custom' , BackgroundColor:'linear-gradient(200deg, #186E6F 40%,rgb(66, 157, 128) 100%)',title:'Custom Pattern 13' ,Descrioption:'Scrum report pattern is designed to transform raw meeting transcripts into a structured and actionable Scrum report. It systematically organizes the transcript data to provide clear insights into the team’s progress and challenges. By breaking down individual contributions in the Sprint Progress section, the prompt ensures accountability and transparency for each team member.'},
    { id:10 ,logo:<Crown/> ,card:'Custom', BackgroundColor:'linear-gradient(200deg, #057F8C 40%,  #1AC8DA 100%)' ,title:'Custom Pattern 14' ,Descrioption:'This pattern converts a Sprint Retrospective meeting transcript into a clear, actionable summary, helping Agile teams reflect on their sprint performance.'},
    { id:11 ,logo:<Crown/> , card:'Custom', BackgroundColor:'linear-gradient(200deg, #ae0503 40%, #f39492 100%)' , title:'Custom Pattern 15' ,Descrioption:'Generate Agile user stories based on discussion points or transcripts, including clear goals, acceptance criteria for defining "done," and dependencies for successful implementation.'},
    { id:12 ,logo:<Crown/> , card:'Custom' ,BackgroundColor:'linear-gradient( 200deg, #a706f4 40%,  #eab0f5 100%)'  , title:'Custom Pattern 16' ,Descrioption:'This Job Description Writer enables users to input key details and generate a comprehensive, tailored job description. It ensures all necessary elements are included, making the process quick and effective for attracting the right candidates.'},

]);
const containerRef = React.useRef(null);
    const [clickPattern , setclickPattern] = useState({ name: 'All Tools'});
    const [clickSection ,setclickSection] = useState(2);
    const [CurrentIndex , setCurrentIndex] = useState(2);
    const [arrowDir , setarrowDir]  = useState(false);

    const [searchTerm ,setsearchTerm] = useState('');
    const [visible, setVisible] = useState(true);

const [animationClass, setAnimationClass] = useState("");


    // --------------------------------------

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
//    -------------------------------------------
    const logoDefaultStyle = { width: "35px", height: "35px", padding: "4px" };

    const filterCards = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
//  get categories
 
   const getCategory = ( Offset) =>{
    return categories[(CurrentIndex + Offset+ categories.length)% categories.length];
   };
   const clickCatgoriesSection =(offset) => {
      const newIndex = (CurrentIndex + offset + categories.length) % categories.length
      setCurrentIndex( newIndex );
      setclickSection(categories[newIndex] );
      setclickPattern(categories[newIndex]);
      
   }
    const clickArrow = ( arrowDirection ) =>{

      

          const newIndex = 
                arrowDirection == "left"  ? (CurrentIndex === 0 ? categories.length - 1 :
                CurrentIndex - 1) : (CurrentIndex === categories.length - 1 ? 0 : CurrentIndex + 1);
            
            setCurrentIndex(newIndex); 
            setclickSection(categories[newIndex]); 
            setclickPattern(categories[newIndex]);
            setarrowDir(arrowDirection);
            if ( arrowDirection === "left") {
                setAnimationClass("left-to-bottom");
              } else {
                setAnimationClass("right-to-bottom");
              }
       
      
        setVisible(false);
        setTimeout(() => {
            setAnimationClass(""); 
            setVisible(true);
            
        }, 10);
    };
    
    
    const handleRadioClick = (index) => {
        setCurrentIndex(index);
        setclickSection(categories[index]);
        setclickPattern(categories[index]);
      };
    

  return (
    
    <div className='patternContainer' style={{width:'100%',display:'grid', gridTemplateRows:' auto 1fr',overflow:'auto',overflowX:'hidden' }}>

        <div style={{height:'20em',background: 'linear-gradient(to bottom,  #1A1A1A 9%,  #383838 36%,  #4D4D4D 55%, #4D4D4D 84%)', padding:'20px'}}>
            <div style={{display:'flex',justifyContent:'center'}}><span style={{fontSize:'22px', fontWeight:'600' ,color:'white'}}>Categories</span></div>
            <div style={{position:'relative',bottom:'2em',display:'flex',justifyContent:'space-between'}}>
                <div  onClick={() =>clickCatgoriesSection(-2)} style={{ cursor:'pointer', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 
                    <div className='Categoriesdiv'><img  style={{width:'6em',height:'3em'}} src= {getCategory(-2).img}   /></div>
                    <span style={{ color:'white',}}>{getCategory(-2).name} </span>
                </div>
                <div onClick={() =>clickCatgoriesSection(2)} style={{cursor:'pointer', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 
                    <div className='Categoriesdiv'><img style={{width:'6em',height:'3em'}} src={getCategory(2).img} /></div>
                    <span style={{ color:'white'}}>{getCategory(2).name} </span>
                </div>
            </div>
            <div style={{position:'relative',bottom:'4.55em',display:'flex',justifyContent:'space-around'}}>
                <div  onClick={() =>clickCatgoriesSection(-1)}  style={{cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 
                    <div className='Categoriesdiv' ><img style={{width:'7em',height:'4em'}} src={getCategory(-1).img}   /></div>
                    <span style={{ color:'white'}}>{getCategory(-1).name} </span>
                </div>
                <div onClick={() =>clickCatgoriesSection(1)}  style={{cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 
                    <div className='Categoriesdiv'><img style={{width:'7em',height:'4em'}} src={getCategory(1).img}    /></div>
                    <span style={{ color:'white',}}>{getCategory(1).name} </span>
                </div>
            </div>
            <div style={{ position:'relative',bottom:'6.5em',display:'flex',justifyContent:'center'}}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'10px'}}>
                   <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} ref={containerRef}> 
                            <div   onClick={()=> clickArrow("left") }> <KeyboardArrowLeftIcon className='leftarrow' style={{ color:'#D9D9D9',width:'100px',height:'100px'}}  /></div>
                               
                                <div style={{cursor:'pointer'}} className={`animatedContainer ${animationClass}`} onClick={() => clickCatgoriesSection(0)}  >
                                    <img style={{ width: '9em', height: '6em' }} src={getCategory(0).img} alt={getCategory(0).name} />
                                </div>
                            
                            <div  onClick={()=> clickArrow("right")}> <KeyboardArrowRightIcon className='leftarrow' style={{color:'white', width:'100px',height:'100px'}} /></div>
                        </div>
                        <span style={{ color:'white'}}>{getCategory(0).name} </span>
                   </div>
                   <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    {categories.map((_, index) => (
                        <input key={index} type="radio" name="customRadio" checked={CurrentIndex === index} onChange={() => handleRadioClick(index)} />
                    ))}
                    </div>
                </div>
            </div>
            <div style={{ position:'relative',bottom:'5em', display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{ display:'grid',gridTemplateColumns:' auto 1fr',backgroundColor:'white', width:'60%', gap:'40px',borderRadius:'8px', padding:'12px 10px'}}>
                    <SearchIcon/>
                    <input type='text' className='searchInputText'  placeholder='Search Patterns' value={searchTerm} onChange={ (e)=>setsearchTerm(e.target.value)} />
                </div>
            </div> 
        </div>
        <div style={{ width:'100%',padding:'10px', backgroundColor:' #F9FAFB',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div style={{ display:'flex', width:'80%',justifyContent:'space-between', alignItems:'center', gap:'50px', padding:'20px 0px'}}>
                <PatternCustomizeButton/>    
                <div style={{ cursor:'pointer',backgroundColor:'white', padding:'2px 20px',width:'200px', height:'50px', borderRadius:'8px',boxShadow: '0px 0px 15px rgba(54, 52, 52, 0.25)',display:'flex' ,justifyContent:'center',alignItems:'center',gap:'10px'}} >  
                    <span style={{ fontSize:'18px', fontWeight:'600',fontFamily: '"Inter", serif'}}>Create Section</span>
                </div>
                <div style={{ cursor:'pointer',backgroundColor:'white', padding:'2px 20px', width:'200px', height:'50px', borderRadius:'8px',boxShadow: '0px 0px 15px rgba(54, 52, 52, 0.25)',display:'flex' ,justifyContent:'center',alignItems:'center',gap:'10px'}} >  
                    <AddCircleOutlineSharpIcon style={{ width:'30', height:'30'}}/>
                    <span style={{ fontSize:'18px', fontWeight:'600',fontFamily: '"Inter", serif'}}>New patterns</span>
                </div>
            </div>
            <div> <h1>{clickSection.name}</h1></div>
            <div style={{width:'100%',display:'flex', justifyContent:'center',alignItems:'center' }}>
               { clickPattern.name === 'All Tools' &&(
                            <div style={{ display:'flex', width:'90%', flexDirection:'column', justifyContent:'center',alignItems:'center'  ,gap:'20px'}}>
                                <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                    <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}} >My Patterns:</span>
                                    <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                        <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>    
                                        <button  style={{all:'unset'}}   onClick={handleClickOpen}>
                                        <Cards2 onClick={handleClickOpen}
                                            Logo={<Crown />} SpanTitle="Custom Pattern setwre 5" 
                                            SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                            BackgroundColor="linear-gradient(200deg, #2806A6 40%, #8664e4 100%)"
                                            Border=" 4.2px solid #F7AE5F"  />
                                        </button>                                      
                                        <Dialog  style={{background:' #F9FAFB'}} open={open}  onClose={handleClose} maxWidth="lg"  >
                                           <div style={{padding:'15px'}}>
                                                <div style={{display:'flex',justifyContent:'start'}}>
                                                    <div style={{backgroundColor:'white', padding:'2px',border:'1.5px solid #C2CDD8',borderRadius:'4px',width:'auto',display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}> <ArrowBackIcon on style={{color:'#7A7C7F', width:'15px',height:'15px'}}/> <button   onClick={handleClose} style={{all:'unset',color:'#7A7C7F'}}> <span style={{fontSize:'12px'}}>Back</span></button></div>
                                                </div>
                                                <ClickPatternCards/>
                                           </div>  
                                        </Dialog>
                                        </div>         
                                    </div>
                                </div>
                                <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                    <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}> Custom Patterns:</span>
                                    <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                        <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                
                                        {filterCards.filter((item) =>item.card ==='Custom') .map((item) => (
                                            <Cards
                                            key={item.id}
                                            Logo={ item.logo ? React.cloneElement(item.logo,{style:{  ...logoDefaultStyle, ...item.style}}): null } 
                                            SpanTitle={item.title}
                                            SpanParagraph={item.Descrioption}
                                            BackgroundColor={item.BackgroundColor}
                                            Border={item.card === 'standard' ? '4.2px solid #A04218' : '4.2px solid #F7AE5F'}
                                            />
                                        ))}
                                        </div>         
                                    </div>
                                </div>
                                <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                    <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}>Standard Patterns:</span>
                                    <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                        <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                               
                                        {filterCards.filter((item) =>item.card ==='standard') .map((item) => (
                                            <Cards
                                            key={item.id}
                                            Logo={ item.logo ? React.cloneElement(item.logo,{style:{  ...logoDefaultStyle, ...item.style}}): null } 
                                            SpanTitle={item.title}
                                            SpanParagraph={item.Descrioption}
                                            BackgroundColor={item.BackgroundColor}
                                            Border={item.card === 'standard' ? '4.2px solid #A04218' : '4.2px solid #F7AE5F'}
                                            />
                                            
                                        ))}     
                                        </div>   
                                    </div>
                               </div>
                        </div>   
                    )}
                    {clickPattern.name == 'Marketing' &&(
                        <div style={{ display:'flex', width:'80%', flexDirection:'column', justifyContent:'center',alignItems:'center'  ,gap:'20px'}}>
                           <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}} >My Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                              
                                           
                                        <Cards 
                                            Logo={<Crown />} SpanTitle="Custom Pattern  5" 
                                            SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                            BackgroundColor="linear-gradient(200deg, #2806A6 40%, #8664e4 100%)"
                                            Border=" 4.2px solid #F7AE5F"/>
                                        <Cards 
                                            Logo={<Crown />} 
                                            SpanTitle="Facebook Ad Writer" 
                                            SpanParagraph=" An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals." 
                                            BackgroundColor="linear-gradient(200deg, #186E6F 40%,rgb(66, 157, 128) 100%)" 
                                            Border=" 4.2px solid #F7AE5F "/>     
                                    </div>
                                </div>
                            </div>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}> Custom Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                                 
                                    {filterCards.filter((item) =>item.card ==='Custom') .map((item) => (
                                        <Cards
                                        key={item.id}
                                        Logo={ item.logo ? React.cloneElement(item.logo,{style:{  ...logoDefaultStyle, ...item.style}}): null } 
                                        SpanTitle={item.title}
                                        SpanParagraph={item.Descrioption}
                                        BackgroundColor={item.BackgroundColor}
                                        Border={item.card === 'standard' ? '4.2px solid #A04218' : '4.2px solid #F7AE5F'}
                                        />
                                    ))}
                                    </div>            
                                </div>
                            </div>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}>Standard Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                                
                                    {filterCards.filter((item) =>item.card ==='standard') .map((item) => (
                                        <Cards
                                        key={item.id}
                                        Logo={ item.logo ? React.cloneElement(item.logo,{style:{  ...logoDefaultStyle, ...item.style}}): null } 
                                        SpanTitle={item.title}
                                        SpanParagraph={item.Descrioption}
                                        BackgroundColor={item.BackgroundColor}
                                        Border={item.card === 'standard' ? '4.2px solid #A04218' : '4.2px solid #F7AE5F'}
                                        />
                                    ))} 
                                    </div>
                                </div>    
                            </div>
                        </div>                     
                    )}
                    {clickPattern.name == 'Use Story Writer' &&(
                        <div style={{ display:'flex', width:'80%', flexDirection:'column', justifyContent:'center',alignItems:'center'  ,gap:'20px'}}>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}} >My Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                                    
                                        <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                                
                                            <Cards 
                                                Logo={<Crown />} SpanTitle="Custom Pattern  3" 
                                                SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient( 200deg, #a706f4 40%,rgb(234, 176, 245) 100%)"
                                                Border=" 4.2px solid #F7AE5F"/>              
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}> Custom Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                                 
                                    {filterCards.filter((item) =>item.card ==='Custom') .map((item) => (
                                        <Cards
                                        key={item.id}
                                        Logo={ item.logo ? React.cloneElement(item.logo,{style:{  ...logoDefaultStyle, ...item.style}}): null } 
                                        SpanTitle={item.title}
                                        SpanParagraph={item.Descrioption}
                                        BackgroundColor={item.BackgroundColor}
                                        Border={item.card === 'standard' ? '4.2px solid #A04218' : '4.2px solid #F7AE5F'}
                                        />
                                    ))}
                                    </div>            
                                </div>
                            </div>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}>Standard Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                               
                                    {filterCards.filter((item) =>item.card ==='standard') .map((item) => (
                                        <Cards
                                        key={item.id}
                                        Logo={ item.logo ? React.cloneElement(item.logo,{style:{  ...logoDefaultStyle, ...item.style}}): null } 
                                        SpanTitle={item.title}
                                        SpanParagraph={item.Descrioption}
                                        BackgroundColor={item.BackgroundColor}
                                        Border={item.card === 'standard' ? '4.2px solid #A04218' : '4.2px solid #F7AE5F'}
                                        />
                                    ))}     
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {clickPattern.name == 'Sales' &&(
                        <div style={{ display:'flex', width:'80%', flexDirection:'column', justifyContent:'center',alignItems:'center'  ,gap:'20px'}}>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}} >My Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                                    
                                        <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                                
                                            <Cards 
                                                Logo={<Crown />} SpanTitle="Custom Pattern  3" 
                                                SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient( 200deg, #a706f4 40%,rgb(234, 176, 245) 100%)"
                                                Border=" 4.2px solid #F7AE5F"/>              
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}> Custom Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                                 
                                    {filterCards.filter((item) =>item.card ==='Custom') .map((item) => (
                                        <Cards
                                        key={item.id}
                                        Logo={ item.logo ? React.cloneElement(item.logo,{style:{  ...logoDefaultStyle, ...item.style}}): null } 
                                        SpanTitle={item.title}
                                        SpanParagraph={item.Descrioption}
                                        BackgroundColor={item.BackgroundColor}
                                        Border={item.card === 'standard' ? '4.2px solid #A04218' : '4.2px solid #F7AE5F'}
                                        />
                                    ))}
                                    </div>            
                                </div>
                            </div>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}>Standard Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                               
                                    {filterCards.filter((item) =>item.card ==='standard') .map((item) => (
                                        <Cards
                                        key={item.id}
                                        Logo={ item.logo ? React.cloneElement(item.logo,{style:{  ...logoDefaultStyle, ...item.style}}): null } 
                                        SpanTitle={item.title}
                                        SpanParagraph={item.Descrioption}
                                        BackgroundColor={item.BackgroundColor}
                                        Border={item.card === 'standard' ? '4.2px solid #A04218' : '4.2px solid #F7AE5F'}
                                        />
                                    ))}    
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {clickPattern.name == 'SEO' &&(
                        <div style={{ display:'flex', width:'80%', flexDirection:'column', justifyContent:'center',alignItems:'center'  ,gap:'20px'}}>
                           <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}} >My Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                          
                                    
                                    </div>
                                </div>
                            </div>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}> Custom Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                                    <Cards 
                                        Logo={<Crown />} 
                                        SpanTitle="Custom Patterns 1" 
                                        SpanParagraph=" An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals." 
                                        BackgroundColor="linear-gradient(200deg, #186E6F 40%,rgb(66, 157, 128) 100%)" 
                                        Border=" 4.2px solid #F7AE5F "/>
                                    </div>         
                                </div>
                            </div>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}>Standard Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>
                                    {filterCards.filter((item) =>item.card ==='standard') .map((item) => (
                                        <Cards
                                        key={item.id}
                                        Logo={ item.logo ? React.cloneElement(item.logo,{style:{  ...logoDefaultStyle, ...item.style}}): null } 
                                        SpanTitle={item.title}
                                        SpanParagraph={item.Descrioption}
                                        BackgroundColor={item.BackgroundColor}
                                        Border={item.card === 'standard' ? '4.2px solid #A04218' : '4.2px solid #F7AE5F'}
                                        />
                                    ))}  
                                    </div>   
                                </div>
                            </div>
                        </div>

                    )}
            </div>
        </div>
       
    </div>
  );
};

