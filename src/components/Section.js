import React from 'react'
import styled from "styled-components"

export default function Section({ title,description,leftBtnText,rightBtnText,bgimage }) {
    return (
        <Wrap background={bgimage}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>

            </ItemText>
            <Button>
                <ButtonGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                    {rightBtnText  &&
                        <RightButton>{rightBtnText}</RightButton>
                    }

                    

                </ButtonGroup>
                <DownArrow src ="/images/down-arrow.svg"/>
            </Button>
            
        </Wrap>
    )
}
const  Wrap  = styled.div`
    width: 100vw;
    height:100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image:${props => `url("/images/${props.background}")`};
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    display:flex;  
    `

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    margin-bottom:30px;
`

const ButtonGroup = styled.div`
    display:flex;
    @media (max-width: 768px){
        flex-direction:column;    }
`
const  LeftButton  = styled.div`
    background-color:  rgba(23, 26, 32, 0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    border-radius:100px;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    opacity :0.85;
    font-size:12px;
    cursor:pointer;
    margin:20px
`
const  RightButton  = styled(LeftButton)`
    background:white  ;
    opacity :0.65;
    color : rgba(23, 26, 32, 0.8);
`
const DownArrow = styled.img`
    
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite  1.5s;

`
const  Button  = styled.div``


