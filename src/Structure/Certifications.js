import styled from "styled-components";
import '../style.css';
import Sidebar from '../Structure/Sidebar.js';
import HTML from '../static/Certificates/HTML_CSS.jpg';
import CodeIgniter from '../static/Certificates/CodeIgniter.jpg';
import JavaScript from '../static/Certificates/JavaScript.jpg';
import Flyers from '../static/Certificates/Flyers.jpg';
import Semester from '../static/Certificates/Semester_Rank_1.jpg';
import Hindi from '../static/Certificates/Hindi_Certificate.jpg';
import PLC from '../static/Certificates/PLC_Programming.jpg';

export default function About(){

    return (<>
    <Sidebar></Sidebar>
    <Aboutstyle>
        <h1 className="certifications">Certifications</h1>
    <div className="certificate">
        <div>
           <img className="htmlcss" src={HTML}></img>
           <p className="certpara">&nbsp;Build Responsive Websites with HTML and CSS</p>
        </div>
        <div>
           <img className="CodeIgniter" src={CodeIgniter}></img>
           <p className="certpara">&nbsp;Complete Web Application</p>
        </div>
        <div>
           <img className="javascript" src={JavaScript}></img>
           <p className="certpara">&nbsp;Build Responsive Websites with HTML and CSS</p>
        </div>
        <div>
           <img className="flyers" src={Flyers}></img>
           <p className="certpara">&nbsp;Cambridge Yound Learners English</p>
        </div>
        <div>
           <img className="semester" src={Semester}></img>
           <p className="certpara">&nbsp;PSG ITECH SEMESTER FIRST RANK</p>
        </div>
        <div>
           <img className="plc" src={PLC}></img>
           <p className="certpara">&nbsp;PLC PROGRAMMING</p>
        </div>
        <div>
           <img className="hindi" src={Hindi}></img>
           <p className="certpara">&nbsp;PARICHAY EXAMINATION</p>
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

.certifications{
    font-family: Impo,sans-serif;
    font-size: 20px;
    color: wheat;
}

.space{
    height:100%;
    width:100%;
    position: absolute;
    top:300px;
}

.certifications{
    font-size: 50px;
    position: absolute;
    top: 8%;
    left: 6%;
    transform: translate(-8%,-6%);
}

.certificate{
    position: absolute;
    top: 28%;
    left: 11%;
    transform: translate(-8%,-6%);
    display: grid;
    width: 85%;
    gap:29px;
    grid-template-columns: 1fr 1fr 1fr;
}

.certpara{
    color: black;
    font-family: Impo;
    font-size: 18px;
    background-color: #77498fab;
    margin-right:27px ;
}

`;