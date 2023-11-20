import styled from "styled-components";
import '../style.css';
import Sidebar from '../Structure/Sidebar.js';
import yoga from '../static/projects/Yoga.png';
import Starbucks from '../static/projects/Starbucks.png';
import Shareup from '../static/projects/Shareup.png';
import Stygian from '../static/projects/Stygian.png';

export default function About(){

    return (<>
    <Sidebar></Sidebar>
    <Aboutstyle>
        <h1 className="projects">Projects</h1>
        <div className="certificate">
        <div>
           <img className="htmlcss" src={Starbucks}></img>
           <p className="certpara1">&nbsp;Starbucks Coffee Company - Wordpress Website</p>
        </div>
        <div>
           <img className="htmlcss" src={Stygian}></img>
           <p className="certpara">&nbsp;Stygian - Your One spot Fashion style Desitination</p>
        </div>
        <div>
           <img className="htmlcss" src={yoga}></img>
           <p className="certpara">&nbsp;YOGA blog website</p>
        </div>
        <div>
           <img className="htmlcss" src={Shareup}></img>
           <p className="certpara">&nbsp;Share Up - Share Your thoughts</p>
        </div>
    </div>  
    </Aboutstyle>
    </>)
}

const Aboutstyle = styled.div`

position: relative;
margin-left: 270px;
height:100vh;
background-color: #10121A;
overflow: auto;

.certificate{
    position: absolute;
    top: 28%;
    left: 12%;
    transform: translate(-8%,-6%);
    display: grid;
    width: 85%;
    gap:35px;
    grid-template-columns: 1fr 1fr ;
    grid-row-gap:60px ;
}

.certpara,.certpara1{
    color: black;
    font-family: Impo;
    font-size: 18px;
    background-color: #77498fab;
    margin-right:113px ;
}

.certpara1{
    margin-right: 117px;
}

.projects{
    font-family: Impo,sans-serif;
    font-size: 20px;
    color: wheat;
}

.projects{
    font-size: 50px;
    position: absolute;
    top: 8%;
    left: 6%;
    transform: translate(-8%,-6%);
}


`;