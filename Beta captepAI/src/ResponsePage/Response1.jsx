import React from 'react'
import EditIcon from '@mui/icons-material/Edit';






export default function Response1() {
  return (
    <div style={{display:'grid' ,gridTemplateRows:' 1fr auto',padding:'20px',overflow:'hidden'}}>
        <div style={{display:'flex', flexDirection:'column',overflowY:'auto'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'30px',padding:'10px 20px'}}>
            <div style={{ display:'flex', justifyContent:'end', alignItems:'center',gap:'10px'}}><EditIcon style={{ width:'20px', height:'20px'}}/> <div style={{ padding:'5px 15px',borderRadius:'4px',boxShadow:' 0px 0px 5px rgb(244, 140, 140)'}}> <span style={{fontSize:'16px',fontFamily: '"Inter", serif'}}>What is AI</span></div> <div style={{display:'flex',justifyContent:'content',alignItems:'center', width:'30px',height:'30px',backgroundColor:' #6B3117', borderRadius:'50%'}}> <span style={{fontSize:'20px', padding:'15px 10px', color:'white', fontWeight:'600',fontFamily: '"Inter", serif'}}>S</span></div> </div>
            <div style={{ display:'flex',justifyContent:'start',gap:'10px',padding:'10px 20px'}}>
              <img src="Captop logo only.png" style={{width:'20px',height:'20px'}} />
              <div style={{ display:'flex',flexDirection:'column' , width:'80%' ,gap:'10px',padding:'10px 30px',borderRadius:'4px',boxShadow:' 0px 0px 5px rgb(244, 140, 140)'}}>
                <span style={{fontSize:'18px',fontFamily: '"Inter", serif'}}><b>Artificial Intelligence (AI)</b></span>
                <span style={{fontSize:'16px',fontFamily: '"Inter", serif',}}>AI (Artificial Intelligence) refers to the simulation of human intelligence by machines, particularly computer systems, enabling them to perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, understanding language, perception, and decision-making.</span>
                <span style={{textAlign:'justify'}}>
                  <span style={{ fontSize: "18px", fontFamily: '"Inter", serif' }}>
                    <b>Terms Related to AI</b>
                  </span>
                  <ul style={{ display: "block", gap: "10px" }}>
                    <li>
                      <span >
                        <b>Machine Learning (ML)</b>: A subset of AI focused on
                        training machines to learn from data and improve over time
                        without explicit programming.
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Natural Language Processing (NLP)</b>: Enables machines
                        to understand, interpret, and generate human language (e.g.,
                        chatbots, translations).
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Computer Vision</b>: The ability of machines to interpret
                        and understand visual information from the world (e.g.,
                        facial recognition, image processing).
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Robotics</b>: The design and use of robots powered by AI
                        for tasks like automation, surgery, and more.
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Deep Learning</b>: A branch of machine learning using
                        neural networks to simulate human decision-making.
                      </span>
                    </li>
                  </ul>
                </span>
              </div>
              
            </div> 
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'30px',padding:'10px 20px'}}>
            <div style={{ display:'flex', justifyContent:'end', alignItems:'center',gap:'10px'}}><EditIcon style={{ width:'20px', height:'20px'}}/> <div style={{ padding:'5px 15px',borderRadius:'4px',boxShadow:' 0px 0px 5px rgb(244, 140, 140)'}}> <span style={{fontSize:'18px',fontFamily: '"Inter", serif'}}>What is AI</span></div> <div style={{display:'flex',justifyContent:'content',alignItems:'center', width:'30px',height:'30px',backgroundColor:' #6B3117', borderRadius:'50%'}}> <span style={{fontSize:'20px', padding:'15px 10px', color:'white', fontWeight:'600',fontFamily: '"Inter", serif'}}>S</span></div> </div>
            <div style={{ display:'flex',justifyContent:'start',gap:'10px',padding:'10px 20px'}}>
              <img src="Captop logo only.png" style={{width:'20px',height:'20px'}} />
              <div style={{ display:'flex',flexDirection:'column' , width:'80%' ,gap:'10px',padding:'20px 15px',borderRadius:'4px',boxShadow:' 0px 0px 5px rgb(244, 140, 140)'}}>
                <span style={{fontSize:'18px',fontFamily: '"Inter", serif'}}><b>Artificial Intelligence (AI)</b></span>
                <span style={{fontSize:'16px',fontFamily: '"Inter", serif',textAlign:'justify'}}>AI (Artificial Intelligence) refers to the simulation of human intelligence by machines, particularly computer systems, enabling them to perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, understanding language, perception, and decision-making.</span>
                
                <span style={{textAlign:'justify'}}>
                  <span style={{fontSize:'18px',fontFamily: '"Inter", serif'}}><b>Types of AI</b></span>
                    <ol style={{display:'block' , gap:'10px'}}>
                      <li><span> <b>Narrow AI</b> :  Focused on specific tasks (e.g., voice assistants like Siri, chatbots like me, recommendation  systems like Netflix).</span></li>
                      <li><span><b>General AI</b> :   Hypothetical AI that can perform any intellectual task a human can do (not yet achieved).</span></li>
                      <li><span><b>Superintelligent AI</b>:  AI surpassing human intelligence in all fields (theoretical and futuristic).</span></li>
                    </ol>
                </span>
              </div>
              
            </div> 
          </div>
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
