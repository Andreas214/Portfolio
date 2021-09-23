import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import validator from 'validator';

export const InteractionContainer = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10%;

    @media screen and (min-width: 600px){
        flex-direction: row;
        justify-content: center;   
        padding-bottom: 10px;
    }
`;

export const Input = styled.input`
    border-radius: 50px;
    height: 38px;
    border: 2px solid var(--paleBlue);
    outline: none;
    font-size: 15px;
    margin-top: 1rem;
    padding: 0 10%;
    color: var(--gray);
    opacity: 0.5;
    
    @media screen and (min-width: 600px){
        margin-top: 3%;
        width: 30%;
        padding: 0 2%;
    }
`;

export const SubmitButton = styled.button`
    border-radius: 25px;
    height: 40px;
    margin-top: 3%;
    background: var(--primary-color);
    color: white;
    outline: none;
    border: none;
    -webkit-box-shadow: 0px 6px 17px 0px var(--paleBlue); 
    box-shadow: 0px 6px 17px 0px var(--paleBlue);
    grid-row: 1;

    @media screen and (min-width: 600px){
        margin-top: 3%;
        width: 15%;
        margin-left: 1%;
    }
    :hover{
        opacity: 0.7;
    }
`;

export const Fault = styled.span`
    position: relative;
    font-size: 10px;
    padding: auto;
    margin: 10px;
    margin-bottom: 15px;
    font-style: italic;
    color: red;

    @media screen and (min-width: 600px){
        position: absolute;
        font-size: 14px;
        left: 32vw;
    }
`;


export default function Interaction() {

    const isMobile = useMediaQuery({maxWidth: 600})
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
    
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Please provide a valid email address')
    }
  }

    return (
        <div>
            {isMobile? 
            <InteractionContainer>
                <Input type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)}/>
                <Fault>{emailError}</Fault>
                <SubmitButton type="submit">Notify Me</SubmitButton>
            </InteractionContainer>
            :
            <div>
            <InteractionContainer>
                <Input type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)}/>
                <SubmitButton type="submit">Notify Me</SubmitButton>
            </InteractionContainer>
            <Fault>{emailError}</Fault>
            </div>
            }
        </div>
    )
}
