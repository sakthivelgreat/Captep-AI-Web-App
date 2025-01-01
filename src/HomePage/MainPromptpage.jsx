
import FunctionsSharpIcon from '@mui/icons-material/FunctionsSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

export default function MainPromptpage() {
  return (
    <div style={{display:'grid',gridTemplateColumns:' 1fr auto'}}>
      <div  style={{ display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', gap:'40px'}}   className='mainContainer'>
        <div><MainSearch/></div>
        <div><ActionButtons/></div>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'end', padding:'30px 0px'}}    className="FeedbackBackground">
        <div style={{display:'flex', justifyContent:'center',alignItems:'center',height:'auto', width:'40px',padding:'30px 0px',backgroundColor:'#FC8200',cursor:'pointer',borderRadius:' 8px 0px 0px 8px' ,border:' 3px solid #C4C2D0'}}><p style={{color:'white',fontSize:'16px', letterSpacing:'1.2px',fontWeight:'500',writingMode:'vertical-lr'}}>FeedBack</p></div>
        </div>
      </div>
  )
}

const ActionButtons = () => {
  const actions = [
    { id: 1, name: 'Calculator', icon: <FunctionsSharpIcon/> }, 
    { id: 2, name: 'Blog Post Writer', icon: <LocalPostOfficeIcon/> },
    { id: 3, name: 'LinkedIn Ad Writer', icon: <LinkedInIcon/> },
    { id: 4, name: 'LinkedIn Post Writer', icon: <LinkedInIcon/> },
  ];

  return (
    <div className="action-buttons" style={{display:'flex',justifyContent:'center',gap:'20px',flexWrap:'wrap'}}>
      {actions.map((action) => (
        <button key={action.id} className="action-button" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'15px',flex:' 0 0 48%', boxSizing:'border-box', backgroundColor:'white',border:'1.5px solid #FC8200',color:'black', padding:'8px 15px',width:'130px',height:'45px',borderRadius:'8px',cursor:'pointer',fontSize:'16px',textAlign:'center'}}>
          <span  style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'24px',marginBottom:'5px'}}>
            {action.icon}
          </span>
          <span>{action.name}</span>
        </button>
      ))}
    </div>
  );
};

const MainSearch = () => {
  return (
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
  );
};
