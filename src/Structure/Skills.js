import styled from "styled-components";
import '../style.css';
import Sidebar from '../Structure/Sidebar.js';
import Bar from '../Structure/Bar.js';
import Experience from '../Structure/experience.js';
import Education from '../Structure/education.js';
import Education1 from '../Structure/education1.js';

export default function Skills(){

    return (<>
    <Sidebar></Sidebar>
    <Skillstyle>
    <h1 className="skills">Skills</h1>
    
    <div className="bars">
    <Bar topic={'HTML'} status={'90%'} text={'90%'}></Bar>
    <Bar topic={'CSS'} status={'85%'} text={'85%'}></Bar>
    <Bar topic={'JavaScript'} status={'70%'} text={'70%'}></Bar>
    <Bar topic={'PHP'} status={'70%'} text={'70%'}></Bar>
    <Bar topic={'CodeIgniter Framework'} status={'80%'} text={'80%'}></Bar>
    <Bar topic={'WebGL'} status={'30%'} text={'30%'}></Bar>
    <Bar topic={'C++'} status={'60%'} text={'60%'}></Bar>
    <Bar topic={'C#/.NET'} status={'50%'} text={'50%'}></Bar>
    <Bar topic={'Three Js'} status={'30%'} text={'30%'}></Bar>
    <Bar topic={'GreenSock Animation Platform(GSAP)'} status={'30%'} text={'30%'}></Bar>
    <Bar topic={'SVG Morphing'} status={'20%'} text={'20%'}></Bar>
    <Bar topic={'React Js'} status={'30%'} text={'30%'}></Bar>
    </div>
    
    <h1 className="workexp">Work Experience</h1>
    
    <div className="experience">
        <Experience year={'2022-2023'} company={'Mbit Wireless'} topic={'Development Engineer'} 
        text={'Development of 4G telecommunication in LTE technology \n 4G LTE Evolved Packet Core Technologies \n Call flow procedures related to SIP \n Documented complete SIP 24 229 specification along with all related RFCs \n Coding action performed for complete call flow related procedures(Language used - C programming)'} />
    </div>

     
    <h1 className="workexp1">Education</h1>
    <div className="education">
        <div className="college">
        <Education year={'2018-2022'} company={'PSG ITech'}  
        text={'Bachelor of Engineering \n Electrical and Electronics Engineering \n CGPA: 8.68'} />
        </div>
        <div className="college">
        <Education1 className="school" year={'2017-2018'} company={'Chettinad Vidyashram - 10th Standard'}  
        text={'93%'} />
        </div>
        <div className="college1">
        <Education1  year={'2015-2016'} company={'Chettinad Vidyashram - 12th Standard'}  
        text={'9.20'} />
        </div>
    </div>
    <div className="space"></div>
    </Skillstyle>
    </>)
}

const Skillstyle = styled.div`

position: relative;
margin-left: 270px;
height:100vh;
background-color: #10121A;
overflow-x: hidden;

.skills,.workexp,.workexp1{
    font-family: Impo,sans-serif;
    font-size: 20px;
    color: wheat;
}

.school{
    padding-top: 100px;
}

.space{
    height:100%;
    width:100%;
    position: absolute;
    top:590px;
}

.skills{
    font-size: 50px;
    position: absolute;
    top: 8%;
    left: 6%;
    transform: translate(-8%,-6%);
}

.workexp{
    font-size: 30px;
    letter-spacing: 1px;
    position: absolute;
    top: 77%;
    left: 7%;
    transform: translate(-8%,-6%);
}

.workexp1{
    font-size: 30px;
    letter-spacing: 1px;
    position: absolute;
    top: 124%;
    left: 6%;
    transform: translate(-8%,-6%);
    margin-top: 20px;
    margin-bottom: 10px;
}

.experience{
    position: relative;
    width: 100%;
    top: 88%;
    left: 6%;
    transform: translate(-top,-left);
    border-left: 2px solid #2e344e;
    padding-left: 20px;
    &::before{
        content: '';
        position: absolute;
        width:10px;
        height: 10px;
        left:-7px;
        top:6px;
        background-color:  #10121A;
        border-radius: 50%;
        border: 2px solid #2e344e;
    }
}

.college1{
    margin-bottom: 7px;
}

.college,.college1
{
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width:10px;
        height: 10px;
        left:-27px;
        top:6px;
        background-color: #10121A;
        border-radius: 50%;
        border: 2px solid #2e344e;
    }
}

.education{
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    width: 100%;
    top: 108%;
    left: 6%;
    transform: translate(-top,-left);
    border-left: 2px solid #2e344e;
    padding-left: 20px;
}

.bars{
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    grid-column-gap: 0px;
    position: absolute;
    top: 23%;
    left: 14%;
    transform: translate(-8%,-6%);
}

`;