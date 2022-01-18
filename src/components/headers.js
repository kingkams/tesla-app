import React from 'react'
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export default function Headers() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg"/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model x</a>
                <a href="#">Model y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#"> Tesla</a>
                <a href="#"> account</a>
                <CustomMenu/>
            </RightMenu>
            <BurgerNav>
                <CustomClosed/>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model x</a></li>
                <li><a href="#">Model y</a></li>
                <li><a href="#">Solar Panels</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Test Driv</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">More</a></li>


            </BurgerNav>


        </Container>
    )
}
const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding:20px;
    justify-content:space-between;
    top:0;
    right:0;
    left:0;
    z-index:1    
    
`
const Menu = styled.div`
    display:flex;
    
    align-items:center;
    flex:1;
    justify-content: center;
     @media (max-width: 768px){
        display:none;   
       }
    
  
    
    a{
        font-weight:200px;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
   }
`


const RightMenu = styled.div`
    display:flex;
    align-items:center;   
    a{
        font-weight:200px;
        text-transform:uppercase;
        margin-right:10px;
        flex-wrap:nowrap;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
    
    
    
`
const BurgerNav = styled.div`
    position:fixed;
    top :0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:100;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align: start;
    li{
    padding:15px;
    
    }
    a{
        font-weight:600;}
    
    
`

const CustomClosed=styled(CloseIcon)``