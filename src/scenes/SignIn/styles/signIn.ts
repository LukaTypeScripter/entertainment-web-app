import styled from "styled-components";
import { DefStyles } from "../../../DefaultStyles";

export const LogoWrap = styled.div`
display: flex;
justify-content: center;
margin-top: 78.41px;
`

export const AccoundWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

min-height: 100vh;
`
export const InsideWrapper = styled.div`
align-items: center;
    background-color: #161d2f;
    border: none;
    border-radius: 2rem;
    display: grid;
    grid-template-rows: 10.9rem 1fr;
    min-height: 28rem;
    justify-items: center;
    padding: 3.2rem;
    width: 30rem;
    @media only screen and (max-width: 600px) {
        width: 22rem;
}
`

export const AccountForm = styled.div`
    width: 100%;
    margin: auto;
`
export const LoginText = styled.h1`
    font-style: normal;
font-weight: 300;
font-size: 32px;
line-height: 40px;
letter-spacing: -0.5px;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 15px;
div{
    margin-top: 24px;
}
@media only screen and (max-width: 600px) {
    margin-top: 5px;
}
`

export const InputAccount = styled.input`
    background-color: #161d2f;
    border:none;
    border-bottom: 1px solid #5a698f;
    padding: 0 0 1.6rem 1.6rem;
    width: 336px;
    caret-color: #fc4747;
    outline: none;
    color: white;
    @media only screen and (max-width: 600px) {
        width: 279px;
}
    
`

export const Btn = styled.button`
padding: 15px 20px;
margin-top: 40px;
color: white;
background-color: ${DefStyles.MainColors.Red};
border: none;
&:hover{
    background-color: white;
    color: black;
}
`

export const LoginFooter = styled.div`
align-items: flex-end;
    display: flex;
    justify-content: center;
    margin-top: 24px;
`
export const FooterText = styled.p`

`
export const SignUpText = styled.span`
color: ${DefStyles.MainColors.Red};
margin-left: 0.8rem;
`