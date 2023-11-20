import styled from "styled-components";
import '../style.css';
import Sidebar from '../Structure/Sidebar.js';
import TT from '../static/Tarun_black_bgrnd.jpg';
import Button from '../Structure/Button.js';
import Hobbies from '../Structure/hobbies.js';
import webdev from '../static/icon_application_caching.svg';
import cloud from '../static/icon_cloud.svg'
import maths from '../static/icon_Cloud_Paas.svg'

export default function About(){

    return (<>
    <Sidebar></Sidebar>
    <Aboutstyle>
    <div className="abouttitle">    
    <h1 className="about">&nbsp;About Me</h1> 
    <img className="TT" src={TT}></img>
    </div>
    <div className="Abouttext">
     <div className="imgtext">
      <p>Hello I am<span className="Name">&nbsp;Tarunesh Thangaraju</span></p>
      <br />
      <p>A passionate Full-Stack Developer who enjoys building 3D interactive websites.</p>
    <p>Currently broadening my Skills in Three Js and WebGL technologies.</p>
      <p>Do check on my GitHub for more Info.</p>  
      <br /> 
    </div>
     <div className="info">
       <p>Full Name&nbsp;:&nbsp;&nbsp;&nbsp;Tarunesh Thangaraju</p>
       <p>Age&nbsp;:&nbsp;&nbsp;&nbsp;23</p>
       <p>Nationality&nbsp;:&nbsp;&nbsp;&nbsp;Indian</p>
       <p>Languages&nbsp;:&nbsp;&nbsp;&nbsp;English,Tamil</p>
       <p>Location&nbsp;:&nbsp;&nbsp;&nbsp;Chennai</p>
       <p>Graduate(UG) College&nbsp;:&nbsp;&nbsp;&nbsp;PSG iTECH</p>
       <p>CGPA&nbsp;:&nbsp;&nbsp;&nbsp;8.68</p>  
     </div>
     <h1 className="workexp1">Hobbies</h1>
    </div> 
    
    <Button></Button>
    <div className="hobbies">
    <div>
    <Hobbies className="fullcov" image={webdev} topic={'Web Development'} content={'Create Dynamic Websites using tools like Wordpress,Hypertext Preprocessor,\n HTML,CSS etc., and develop \n cool CSS styling'}></Hobbies>
    </div>
    <div>
    <Hobbies image={cloud} topic={'3D-Interactive Website'} content={'3D Interactive website using:\n Webgl \n three js \n react-three-fibre'}></Hobbies>
    </div>
    <div>
    <Hobbies image={maths} topic={'Mathematics'} content={'Enjoy spending my time in Mathematics.Always ready to learn and explore stuffs in Mathematics.Currently learning mathematical stuffs used for creating 3D Websites'}></Hobbies>
    </div>
    </div>
    <div className="space"></div>
    </Aboutstyle>
    </>)
}

const Aboutstyle = styled.div`

position: relative;
margin-left: 270px;
height:100vh;
background-color: #10121A;
overflow: auto;

.TT{
        width: 27%;
        border: 4px solid var(--border-color);
        border-radius: 8px;
}

.about,.imgtext,.info{
    font-family: Impo,sans-serif;
    font-size: 20px;
    color: wheat;
}

.space{
    height:100%;
    width:100%;
    position: absolute;
    top:230px;
}

.hobbies{
    width: 92%;
    position: absolute;
    top: 95%;
    left: 4%;
    transform: translate(-top,-left);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
}

.workexp1{
    font-size: 30px;
    letter-spacing: 1px;
    position: absolute;
    top: 125%;
    left: -63%;
    transform: translate(-top,-left);
}

.workexp1{
    font-family: Impo,sans-serif;
    font-size: 35px;
    color: wheat;
}

.Abouttext{
    position: absolute;
    top: 30%;
    left: 40%;
    transform: translate(-20%,-20%);
}

.about{
    margin-bottom: 30px;
    font-size: 50px;
}

.abouttitle{
    position: absolute;
    top: 20%;
    left: 20%;
    transform: translate(-20%,-20%);
}

.Name{
    font-family: Imported;
    color: rgb(168, 157, 136);
    font-size: 43px;
    margin-bottom: 14px;
    padding: 0px;
}

.info{
    display: grid;
    grid-row-gap: 8px;
}



`;