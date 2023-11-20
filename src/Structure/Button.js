import styled from 'styled-components';
import '../style.css';

export default function Button(){
    return (
        <Buttonstyled>
        <div class="resumebutton">    
         <a class="resumedown">DOWNLOAD RESUME</a>
        </div> 
        </Buttonstyled>
    )
}


const Buttonstyled = styled.a`

.resumebutton{
    background-color: #7A3E9E;
    border-radius: 3px;
    position: absolute;
    top: 78%;
    left: 14%;
    transform: translate(-top,-left);
}


`;