import styled from "styled-components";
import Navigation from '../Structure/Navigation.js';

export default function Sidebar(){

    return (<>
    <Sidebarstyled>
    <Navigation></Navigation>
    </Sidebarstyled>
    </>)
}

const Sidebarstyled = styled.div`

height:100vh;
width:270px;
position: fixed;
background-color: var(--sidebar-color);

`;