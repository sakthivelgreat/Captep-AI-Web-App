
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FacebookIcon from '@mui/icons-material/Facebook';




export default function Cards({Logo, SpanTitle, SpanParagraph, BackgroundColor,Border}) {
  return (
     <div style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'200px', height:'300px',background: BackgroundColor || 'linear-gradient(26%, #A706F4 100%, #D407F9 50%)',borderRadius:'12px', border: Border}}>
        <div style={{ display:'flex',flexDirection:'column', justifyContent:'space-between',gap:'10px',width:'96%', height:'94%',background: 'linear-gradient(26%, #A706F4 100%, #D407F9 50%)',borderRadius:'12px', border: ' 2.5px solid white', padding:'8px 4px'}} >
            <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center', padding:'4px 2px'}}>
                <div style={{ backgroundColor:'white',borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                    {/* <FacebookIcon style={{ width:'40px', height:'40px' , color:'#1976D2',padding:'4px' }}/>  */}
                    { Logo}
                </div> 
                <MoreVertIcon style={{ width:'30px', height:'30px',color:'white'}}/>
            </div>
            <div style={{ display:'flex',flexDirection:'column', gap:'15px',justifyContent:'center',alignItems:'center',padding:'5px'}}>
                    <span style={{width:'90%',color:'white', fontFamily: '"Inter", serif' ,fontSize:'21px',fontWeight:'600', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2, textOverflow: 'ellipsis'}}>{SpanTitle}</span>
                    <span style={{width:'90%', color:'white', fontFamily: '"Inter", serif',fontSize:'17px' , display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: '5', textOverflow: 'ellipsis' }}>{SpanParagraph}</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                <ChatBubbleOutlineIcon  style={{ color:'white', width:'30px' ,height:'30px'}} />
                <VisibilityOutlinedIcon style={{ color:'white', width:'30px' ,height:'30px'}}/>
                <FavoriteBorderIcon style={{ color:'white', width:'30px' ,height:'30px'}}/>
            </div>
        </div> 
     </div> 
  );
}
  