import styled from "styled-components";
import '../style.css';
import { FormatItalic } from "@material-ui/icons";

export default function Experience({year,company,topic,text}){

    return(
        <Experiencestyle>
                <div className="year">
                    <p>{year}</p>
                </div>
                <div className="linedivider"></div>
                <div className="textt">
                    <p className="bachelor"><span className="purptext">College: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{company}</span></p>
                    <div className="textparts">
                    <span>GRADUATE</span>
                    <p className="display-linebreak">{text}</p>
                    </div>              
                </div>
                <br />

        </Experiencestyle>
)}

const Experiencestyle = styled.div`

font-family: Impo,sans-serif;
font-size: 20px;
color: wheat;
display: flex;


.display-linebreak {
white-space: pre-line;
}

.textparts{
    display: flex;
    gap:29px;
    width:600px;
}

.desig{
    padding-top: 5px;
    padding-bottom: 5px;
}

.purptext{
    color: #77498fab;
}

.bachelor{
    margin-bottom: 4px;
}

.year{
   width:90px;
}

.linedivider{
    border-top: 1px solid #2e344e;
    margin-top: 11px;
    margin-right: 50px;
    margin-left: 40px;
    width: 300px;
}

.textt{
    width:80%;
}

`;