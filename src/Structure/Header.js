import styled from "styled-components";
import '../style.css';
import Tarunesh_Thangaraju from '../static/Tarunesh_Thangaraju.jpg';
import GitHubIcon from '@material-ui/icons/GitHub.js';
import LinkedIn from '@material-ui/icons/LinkedIn.js';
import Sidebar from '../Structure/Sidebar.js';


export default function Header(){

    return (<>
    
    <Sidebar></Sidebar>
    <Headerstyled>
    
    <div className="headpara">   
       <h1 className="fullstk"><strong>FULL-STACK DEVELOPER</strong></h1>
    </div>
    
    <div className="headpara2">
    <p>- A passionate and evolving Full-Stack developer</p>
    <p>&nbsp; &nbsp;Have a good time exploring my Portfolio</p>
    </div>

    <div className="icons"> 
    <GitHubIcon className="github"/>
    <span className="linedivider"></span>
    <LinkedIn className="linkedin" />
    <span className="linedivider"></span>
    <img className="photoicon" src={Tarunesh_Thangaraju}></img>
    </div>
    </Headerstyled>
    </>)
}

const Headerstyled = styled.div`

position: relative;
margin-left: 270px;
height:100vh;
background-color: #10121A;

.linedivider{
    flex-grow: 1;
    border-bottom: 1px solid wheat;
    margin-bottom: 13px;
}

.fullstk{
    font-size: 100px;
    color: wheat;
    animation-name:moveinLeft;
   animation-duration:2s;
}

.headpara{
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-bottom: 1px solid wheat;
    width:900px;
}

.headpara2{
    color:wheat;
    font-size: 21px;
    position: absolute;
    top: 55%;
    left: 65%;
    transform: translate(-50%,-50%);
    animation-name:moveinRight;
    animation-duration:4s;
}

.photoicon{
    width:6%;
    border: 3px solid var(--border-color);
    border-radius: 500px;
}

.linkedin{
    color: white;
    font-size: 27px;
}

.icons{
    display: flex;
    gap: 20px;
    position: absolute;
    top: 75%;
    left: 29%;
    transform: translate(-top,-left);
    animation-name:moveinRight;
    animation-duration:3s;
}

.github{
    color: white;
}

@keyframes moveinLeft {
    0% {
      opacity: 0;  
      transform: translateX(-100px);
    }

    20%{
     opacity: 0;  
      transform: translateX(-80px);
    }

    40%{
        opacity: 0;  
         transform: translateX(-60px);
       }
    
    80%{
        opacity: 1;
        transform: translateX(20px);
    }
    
    100%{
      opacity: 1;  
      transform: translateX(0);
    }
}

@keyframes moveinRight {
    0% {
      opacity: 0;  
    }
    
    100%{
      opacity: 1;  
    }
}

`;