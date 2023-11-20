import styled from "styled-components";
import '../style.css';
import Sidebar from '../Structure/Sidebar.js';


export default function About(){

    return (<>
    <Sidebar></Sidebar>
    <Aboutstyle>
        <h1 className="contact">Contact</h1>
        <div className="connect">
        <p>Want to connect ? - feel free to leave a message</p>
        </div>
        <form className="formdata">
            <div className="namefield">
                <label htmlFor="name"> Enter your Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <textarea id="name" rows="10" cols="30" />
            </div>
            <div className="contactfield">
                <label htmlFor="contactt"> Enter your Contact: &nbsp;&nbsp;&nbsp;</label>
                <textarea id="contactt" rows="10" cols="30" />
            </div>
            <div className="thoughtsfield">
                <label htmlFor="thoughts">Share your thoughts: </label>
                <textarea id="thoughts" rows="10" cols="30" />
            </div>
        </form>
        <div class="resumebutton">    
         <a class="resumedown">SHARE MESSAGE</a>
        </div> 
    </Aboutstyle>
    </>)
}

const Aboutstyle = styled.div`

position: relative;
margin-left: 270px;
height:100vh;
background-color: #10121A;
font-family: Impo,sans-serif;
color: wheat;

.contact{
    font-size: 20px;
}

.connect{
    font-size: 24px;
    position: absolute;
    top: 20%;
    left: 11%;
    transform: translate(-20%,-12%);
}

.contact{
    font-size: 50px;
    position: absolute;
    top: 8%;
    left: 6%;
    transform: translate(-8%,-6%);
}

.formdata{
    color: #77498fab !important;
    font-size: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap:30px;
    position: absolute;
    top: 30%;
    left: 5%;
    transform: translate(-top,-left);
}

input,textarea{
    background-color: #10121A;
    border-color: #77498fab;
    height: 23px;
    border-width: 2px;
    width: 250px;
    color:#77498fab;
    font-size: 16px;
    padding-left: 4px;
    padding-top: 1px;
    font-family: Impo,sans-serif;
}

textarea{
    height: 200px;
}

#name,#contactt{
    height:22px;
}

.resumebutton{
    background-color: #7A3E9E;
    border-radius: 3px;
    position: absolute;
    top: 79%;
    left: 29%;
    transform: translate(-top,-left);
    padding-top: 2px;
}

.resumedown{
    font-size: 20px;
    justify-items: center;
    align-items: center;

}

`;