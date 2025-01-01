import { useState } from 'react';

import './PatternHomePage.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebhookIcon from '@mui/icons-material/Webhook';
import EmailIcon from '@mui/icons-material/Email';
import PostAddIcon from '@mui/icons-material/PostAdd';
import GroupsIcon from '@mui/icons-material/Groups';

import SearchIcon from '@mui/icons-material/Search';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import Cards from '../../public/Cards';

const Crown = () => { return ( <img src="/crown logo.png"  alt="Crown Logo" style={{width: '40px', height: '40px'}} /> ); }

const categories = [ 
    { name: "Use Story Writer" , img:" Use writer.png"},
    { name:"Marketing" , img:"Marketing.png"},
    { name:"All Tools", img:"All Time.png"},
    { name:"Sales", img:"Sales.png"},
    { name:"SEO", img:"SEO.png"},
];

export const PatternHomePage = () => {

   const [clickPattern , setclickPattern] = useState('AllTools');

   const [CurrentIndex , setCurrentIndex] = useState(2);

//  get categories
 
   const getCategory = ( Offset) =>{
    return categories[(CurrentIndex + Offset+ categories.length)% categories.length];
   };

    const ClickLeftSideArrow = () =>{
        setCurrentIndex((prevIndex) => prevIndex === 0 ? categories.length -1 : prevIndex - 1 );
    };
    
    const ClickRightSideArrow = () =>{
        setCurrentIndex((prevIndex) => prevIndex === categories.length -1 ? 0 : prevIndex + 1 );
    };


  return (
    <div style={{width:'100%',display:'grid', gridTemplateRows:' auto 1fr',overflow:'auto' }}>
        <div style={{height:'20em',background: 'linear-gradient(to bottom,  #1A1A1A 9%,  #383838 36%,  #4D4D4D 55%, #4D4D4D 84%)', padding:'20px'}}>
            <div style={{display:'flex',justifyContent:'center'}}><span style={{fontSize:'22px', fontWeight:'600' ,color:'white'}}>Categories</span></div>
            <div style={{position:'relative',bottom:'2em',display:'flex',justifyContent:'space-between'}}>
                <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 
                    <div onClick={()=>  setclickPattern('UseStoryWritter')}><img  style={{width:'6em',height:'4em'}} src= {getCategory(-2).img}   /></div>
                    <span style={{ color:'white',}}>{getCategory(-2).name} </span>
                </div>
                <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 
                    <div onClick={()=>  setclickPattern('SEO')}><img style={{width:'6em',height:'4em'}} src={getCategory(2).img} /></div>
                    <span style={{ color:'white'}}>{getCategory(2).name} </span>
                </div>
            </div>
            <div style={{position:'relative',bottom:'4.55em',display:'flex',justifyContent:'space-around'}}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 
                    <div onClick={()=>  setclickPattern('Marketing')}><img style={{width:'6em',height:'4em'}} src={getCategory(-1).img}   /></div>
                    <span style={{ color:'white'}}>{getCategory(-1).name} </span>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 
                    <div onClick={()=>  setclickPattern('Slaes')}><img style={{width:'6em',height:'4em'}} src={getCategory(1).img}    /></div>
                    <span style={{ color:'white',}}>{getCategory(1).name} </span>
                </div>
            </div>
            <div style={{ position:'relative',bottom:'6.5em',display:'flex',justifyContent:'center'}}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'10px'}}>
                   <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <div onClick={()=>  setclickPattern('AllTools')} style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'40px'}}> 
                            <div onClick={ ClickLeftSideArrow }> <img src="/left side  arrow.png" style={{ width:'37px',height:'55px'}}  /></div>
                            <div><img  style={{width:'8em',height:'6em'}} src={getCategory(0).img}    /></div>
                            <div onClick={ ClickRightSideArrow }> <img src="/Right side arrow.png"  style={{ width:'37px',height:'55px'}} /></div>
                        </div>
                        <span style={{ color:'white'}}>{getCategory(0).name} </span>
                   </div>
                    <div style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'10px'}}>
                        <input type="radio" name="customRadio" id="radio1" />
                        <input type="radio" name="customRadio" id="radio2" />
                        <input type="radio" name="customRadio" id="radio3" />
                        <input type="radio" name="customRadio" id="radio4" />
                        <input type="radio" name="customRadio" id="radio5" />
                    </div>
                </div>
            </div>
            <div style={{ position:'relative',bottom:'5em', display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{ display:'grid',gridTemplateColumns:' auto 1fr',backgroundColor:'white', width:'60%', gap:'40px',borderRadius:'8px', padding:'12px 10px'}}>
                    <SearchIcon/>
                    <input type='text' className='searchInputText'  placeholder='Search Patterns' />
                </div>
            </div> 
        </div>
        <div style={{ width:'100%',padding:'10px', backgroundColor:'#F0F4F6',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div style={{ display:'flex', width:'80%',justifyContent:'space-between', alignItems:'center', gap:'50px', padding:'20px 0px'}}>
                <div style={{ backgroundColor:'white', padding:'2px 20px',width:'200px', height:'50px', borderRadius:'8px',boxShadow: '0px 0px 15px rgba(54, 52, 52, 0.25)',display:'flex' ,justifyContent:'space-around',alignItems:'center',gap:'30px'}} >  
                    <BarChartSharpIcon  style={{ width:'30', height:'30'}} />
                    <span style={{ fontSize:'18px', fontWeight:'600',fontFamily: '"Inter", serif'}}>All</span>
                    <KeyboardArrowDownSharpIcon/>
                </div>
                <div style={{ backgroundColor:'white', padding:'2px 20px',width:'200px', height:'50px', borderRadius:'8px',boxShadow: '0px 0px 15px rgba(54, 52, 52, 0.25)',display:'flex' ,justifyContent:'center',alignItems:'center',gap:'10px'}} >  
                  
                    <span style={{ fontSize:'18px', fontWeight:'600',fontFamily: '"Inter", serif'}}>Create Section</span>
                    
                </div>
                <div style={{ backgroundColor:'white', padding:'2px 20px', width:'200px', height:'50px', borderRadius:'8px',boxShadow: '0px 0px 15px rgba(54, 52, 52, 0.25)',display:'flex' ,justifyContent:'center',alignItems:'center',gap:'10px'}} >  
                    <AddCircleOutlineSharpIcon style={{ width:'30', height:'30'}}/>
                    <span style={{ fontSize:'18px', fontWeight:'600',fontFamily: '"Inter", serif'}}>New patterns</span>
                </div>
            </div>
            <div style={{width:'100%',display:'flex', justifyContent:'center',alignItems:'center' }}>
               {clickPattern == 'AllTools' &&(
                            <div style={{ display:'flex', width:'80%', flexDirection:'column', justifyContent:'center',alignItems:'center'  ,gap:'20px'}}>
                                <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                    <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}} >My Patterns:</span>
                                    <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                        <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>
                                            <Cards 
                                                Logo={<Crown />} SpanTitle="Custom Pattern  1" 
                                                SpanParagraph="The Project Proposal Writer is atn intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient(200deg, #057F8C 40%,  #1AC8DA 100%)" 
                                                Border=" 4.2px solid #F7AE5F"/>
                                                
                                            <Cards 
                                                Logo={<Crown />} SpanTitle="Custom Pattern  2" 
                                                SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient(200deg, #ae0503 40%, #f39492 100%)"
                                                Border=" 4.2px solid #F7AE5F"/>
                                            <Cards 
                                                Logo={<Crown />} SpanTitle="Custom Pattern  3" 
                                                SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient( 200deg, #a706f4 40%,rgb(234, 176, 245) 100%)"
                                                Border=" 4.2px solid #F7AE5F"/>    


                                            <Cards 
                                                Logo={<LinkedInIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />} SpanTitle="LinkedIn Ad Writer" 
                                                SpanParagraph="An expertly crafted framework to design impactful LinkedIn Ad content that captures attention and drives engagement." 
                                                BackgroundColor="linear-gradient(200deg, #ae0503 40%, #f39492 100%)"
                                                Border=" 4.2px solid #F7AE5F"/>
                                            <Cards 
                                                Logo={<Crown />} SpanTitle="Custom Pattern  4" 
                                                SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient(200deg, #2806A6 40%, #8664e4 100%)"
                                                Border=" 4.2px solid #F7AE5F"/>

                                            <Cards 
                                                Logo={<FacebookIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />} 
                                                SpanTitle="Facebook Ad Writer" 
                                                SpanParagraph=" An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals." 
                                                BackgroundColor="linear-gradient(200deg, #057F8C 50%,  #1AC8DA 100%)" 
                                                Border=" 4.2px solid #A04218 "/>
                                        </div>         
                                    </div>
                                </div>
                                <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                    <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}> Custom Patterns:</span>
                                    <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                        <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                
                                            <Cards 
                                                Logo={<Crown />} SpanTitle="Custom Pattern  1" 
                                                SpanParagraph="The Project Proposal Writer is atn intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient(200deg, #057F8C 40%,  #1AC8DA 100%)" 
                                                Border=" 4.2px solid #F7AE5F"/>
                                                    
                                            <Cards 
                                                Logo={<Crown />} SpanTitle="Custom Pattern  2" 
                                                SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient(200deg, #ae0503 40%, #f39492 100%)"
                                                Border=" 4.2px solid #F7AE5F"/>
                                            <Cards 
                                                Logo={<Crown />} SpanTitle="Custom Pattern  3" 
                                                SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient(200deg, #a706f4 40%,  #eab0f5 100%)"
                                                Border=" 4.2px solid #F7AE5F"/>    

                                            <Cards 
                                                Logo={<Crown />} SpanTitle="Custom Pattern  4" 
                                                SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient( 200deg, #119439 40%,rgb(156, 216, 146) 100%)"
                                                Border=" 4.2px solid #F7AE5F"/>
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
                                    <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}>Standard Patterns:</span>
                                    <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                        <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                               
                                            <Cards 
                                                Logo={<WebhookIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                                SpanTitle="Software Proposal Writer" 
                                                SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                                BackgroundColor="linear-gradient(200deg, #057F8C 40%,  #1AC8DA 100%)" 
                                                Border=" 4.2px solid #A04218 "/>
                                                
                                            <Cards 
                                                Logo={<LinkedInIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                                SpanTitle="LinkedIn Ad Writer" 
                                                SpanParagraph="An expertly crafted framework to design impactful LinkedIn Ad content that captures attention and drives engagement." 
                                                BackgroundColor="linear-gradient(200deg, #ae0503 40%, #f39492 100%)"
                                                Border=" 4.2px solid #A04218"/>
                                            <Cards 
                                                Logo={<FacebookIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                                SpanTitle="Facebook Ad Writer" 
                                                SpanParagraph="An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals." 
                                                BackgroundColor="linear-gradient( 200deg, #a706f4 40%,  #eab0f5 100%)"
                                                Border=" 4.2px solid #A04218"/>    

                                            <Cards 
                                                Logo={<EmailIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                                SpanTitle="Email  Writer" 
                                                SpanParagraph="A smart framework for crafting effective email content that captures attention and drives action." 
                                                BackgroundColor="linear-gradient( 200deg, #119439 40%,rgb(156, 216, 146) 100%)"
                                                Border=" 4.2px solid #A04218"/>
                                            <Cards 
                                                Logo={<PostAddIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                                SpanTitle="Blog Post Writer" 
                                                SpanParagraph="An SEO Writer specializes in creating content that is optimized for both search engines and users" 
                                                BackgroundColor="linear-gradient(200deg, #2806A6 40%, #8664e4 100%)"
                                                Border=" 4.2px solid #A04218"/>
                                            <Cards 
                                                Logo={<GroupsIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />} 
                                                SpanTitle="Minutes of Meeting(MOM) Writer Ad Writer" 
                                                SpanParagraph=" This pattern transforms meeting transcripts into well-organized Minutes of Meeting (MoM), capturing key discussions, decisions, and actionable tasks." 
                                                BackgroundColor="linear-gradient(200deg, #186E6F 40%,rgb(66, 157, 128) 100%)" 
                                                Border=" 4.2px solid #A04218 "/>      
                                        </div>   
                                    </div>
                               </div>
                        </div>   
                    )}
                    {clickPattern == 'UseStoryWritter' &&(
                        <div style={{ display:'flex', width:'80%', flexDirection:'column', justifyContent:'center',alignItems:'center'  ,gap:'20px'}}>
                       c    <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}} >My Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                              
                                        <Cards 
                                            Logo={<Crown />} SpanTitle="Custom Pattern  3" 
                                            SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                            BackgroundColor="linear-gradient( 200deg, #a706f4 40%,rgb(234, 176, 245) 100%)"
                                            Border=" 4.2px solid #F7AE5F"/>    
                                        <Cards 
                                            Logo={<FacebookIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />} 
                                            SpanTitle="Facebook Ad Writer" 
                                            SpanParagraph=" An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals." 
                                            BackgroundColor="linear-gradient(200deg, #057F8C 50%,  #1AC8DA 100%)" 
                                            Border=" 4.2px solid #A04218 "/>            
                                    </div>
                                </div>
                            </div>
                            <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 25px', backgroundColor:'white', borderRadius:'20px'}}>
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}> Custom Patterns:</span>
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
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}>Standard Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                                
                                        <Cards 
                                            Logo={<WebhookIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                            SpanTitle="Software Proposal Writer" 
                                            SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                            BackgroundColor="linear-gradient(200deg, #057F8C 40%,  #1AC8DA 100%)" 
                                            Border=" 4.2px solid #A04218 "/>
                                            
                                        <Cards 
                                            Logo={<LinkedInIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                            SpanTitle="LinkedIn Ad Writer" 
                                            SpanParagraph="An expertly crafted framework to design impactful LinkedIn Ad content that captures attention and drives engagement." 
                                            BackgroundColor="linear-gradient(200deg, #ae0503 40%, #f39492 100%)"
                                            Border=" 4.2px solid #A04218"/>
                                        <Cards 
                                            Logo={<FacebookIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                            SpanTitle="Facebook Ad Writer" 
                                            SpanParagraph="An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals." 
                                            BackgroundColor="linear-gradient( 200deg, #a706f4 40%,  #eab0f5 100%)"
                                            Border=" 4.2px solid #A04218"/>    
                                    </div>
                                </div>    
                            </div>
                        </div>                     
                    )}
                    {clickPattern == 'SEO' &&(
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
                                <span style={{fontSize:'22px', width:'100%', textAlign:'left',padding:'20px',fontWeight:'600',fontFamily: '"Inter", serif'}}>Standard Patterns:</span>
                                <div  style={{ width:'100%', display:'flex', justifyContent:'start',alignItems:'center'}} >    
                                    <div style={{width:'auto',display:'flex', justifyContent:'start',flexDirection:'row',alignItems:'center',flexWrap:'wrap', gap:' 40px',padding:'20px'}}>                               
                                        <Cards 
                                            Logo={<WebhookIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                            SpanTitle="Software Proposal Writer" 
                                            SpanParagraph="The Project Proposal Writer is an intelligent solution designed to help users effortlessly generate comprehensive, professional-quality project proposals tailored to their needs." 
                                            BackgroundColor="linear-gradient(200deg, #057F8C 40%,  #1AC8DA 100%)" 
                                            Border=" 4.2px solid #A04218 "/>
                                            
                                        <Cards 
                                            Logo={<LinkedInIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                            SpanTitle="LinkedIn Ad Writer" 
                                            SpanParagraph="An expertly crafted framework to design impactful LinkedIn Ad content that captures attention and drives engagement." 
                                            BackgroundColor="linear-gradient(200deg, #ae0503 40%, #f39492 100%)"
                                            Border=" 4.2px solid #A04218"/>
                                        <Cards 
                                            Logo={<FacebookIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                            SpanTitle="Facebook Ad Writer" 
                                            SpanParagraph="An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals." 
                                            BackgroundColor="linear-gradient( 200deg, #a706f4 40%,  #eab0f5 100%)"
                                            Border=" 4.2px solid #A04218"/>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {clickPattern == 'Marketing' &&(
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
                                        <Cards 
                                            Logo={<LinkedInIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                            SpanTitle="LinkedIn Ad Writer" 
                                            SpanParagraph="An expertly crafted framework to design impactful LinkedIn Ad content that captures attention and drives engagement." 
                                            BackgroundColor="linear-gradient(200deg, #ae0503 40%, #f39492 100%)"
                                            Border=" 4.2px solid #A04218"/>
                                        <Cards 
                                            Logo={<FacebookIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                            SpanTitle="Facebook Ad Writer" 
                                            SpanParagraph="An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals." 
                                            BackgroundColor="linear-gradient( 200deg, #a706f4 40%,  #eab0f5 100%)"
                                            Border=" 4.2px solid #A04218"/>    
                                        <Cards 
                                            Logo={<LinkedInIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                            SpanTitle="LinkedIn Post Writer" 
                                            SpanParagraph="An expertly crafted framework to design impactful LinkedIn Ad content that captures attention and drives engagement." 
                                            BackgroundColor="linear-gradient(200deg, #186E6F 40%,rgb(66, 157, 128) 100%)"
                                            Border=" 4.2px solid #A04218"/>
                                        <Cards 
                                            Logo={<FacebookIcon style={{ width: '35px', height: '35px', color: '#1976D2', padding: '4px' }} />}
                                            SpanTitle="Facebook Post Writer" 
                                            SpanParagraph="An intuitive framework designed to create compelling Facebook Ad content by incorporating key elements such as an engaging headline, a clear call-to-action, and attention-grabbing visuals." 
                                            BackgroundColor="linear-gradient(200deg, #2806A6 40%, #8664e4 100%)"
                                            Border=" 4.2px solid #A04218"/>  
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

