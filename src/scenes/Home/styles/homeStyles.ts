
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DefStyles } from "../../../DefaultStyles";

export const MovieAppMain = styled.div`
@media screen and (min-width: 75rem){
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100vh;
    overflow-y: hidden;
    padding: 2rem;
    padding-right: 0;
}

   


`
export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 56px;
padding-inline: 1rem;
background-color:${DefStyles.MainColors.SemiDarkBlue};
@media screen and (min-width: 75rem){
    height: 90vh;
    flex-direction: column;
    justify-content: start;
    padding: 0;
    width: 96px;
    padding-top: 2.25rem;
    padding-bottom: 2rem;
    margin: 0;
    border-radius: 20px;
}

    


`
export const Links = styled(Link)<{ isActive: boolean }>`
    outline: none;
    transition: transform .2s;
    

    /* background-color: ${(props) => (props.isActive ? 'white' : '')}; */
     &:where(:focus,:hover) {
    transform: scale(1.1);
}
`
export const Imgs = styled.img`
width: 25px;
display: block;
@media screen and (min-width: 75rem){
    margin-bottom: 75px;
}
`
export const ImgPRimary = styled.img`
width: 16px;
display: block;


 



`
export const AvatarIMg = styled.img`
width: 100%;
width: 24px;
@media screen and (min-width: 75rem){
    margin-top: 28rem;
    width: 2.5rem;
}

    

`

export const NavBarPRimary = styled.div`
    display: flex;
    gap: 1.5rem;
    @media screen and (min-width: 75rem){
        flex-direction: column;
    gap: 2.5rem;
    }

  

`
export const Main = styled.nav`
padding: 1.5rem 1rem 4rem;
@media screen and (min-width: 75rem){
    padding-inline: 2.25rem;
    margin-bottom: -2rem;
    overflow-y: scroll;
}

    

`

export const SearchBar = styled.div`
display: flex;
align-items: flex-start;
gap: 1rem;
svg{
    width: 1.5rem;
}
`
export const SearchInput = styled.input`
position: relative;
width: 100%;
background-color: transparent;
border: none;
outline: none;
caret-color: ${DefStyles.MainColors.Red};
padding-bottom: 14px;
border-bottom: 1px solid transparent;
color: white;
&::placeholder{
    font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.5;
}

`
export const SearchLogo = styled.img`
    width: 1.5rem;
`
export const TrendingSection = styled.section`
margin-top: 0.635rem;
padding-bottom: 1.5rem;
`
export const TrandingTItle = styled.h2`
    font-size: 1.25rem;
    margin-bottom: 1rem;
    letter-spacing: -.3px;
`
export const TrandingVideos = styled.ul`
    display: flex;
    gap: 1rem;
    overflow: auto;
    overscroll-behavior-inline: contain;
    margin-inline: -1rem;
    padding-inline: 1rem;
  
    @media screen and (min-width: 45rem){
        gap: 2.5rem;
    margin-inline: -1.5rem;
    padding-inline: 1.5rem;
    }
 

`
export const TrendingVideo = styled.li`
flex: 0 0 15rem;
height: 8.75rem;
border-radius:0.5rem 0.5rem 0 0;
overflow: hidden;
@media screen and (min-width: 45rem){
        flex-basis: 29.375rem;
    height: 14.375rem;
    }
`
export const PLayBtn = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    align-items: center;
    gap: 1.25rem;
    border: none;
    background-color: #ffffff40;
    height: 48px;
    width: 117px;
    padding: 9px;
    border-radius: 100rem;
    display: none;

`
export const VIdeo = styled.div`
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    cursor: pointer;
    &:hover > ${PLayBtn} {
    display: flex;
  }
`
export const VideoBookMark = styled.button`
position: absolute;
top: 0.5rem;
right: 0.5rem;
width: 2rem;
aspect-ratio: 1;
border-radius: 50%;
border: none;
background-color: #10141e80;
display: flex;
align-items: center;
justify-content: center;
outline: none;
transition: background-color .3s,color .3s;
`

export const VideoCOntent = styled.div`
    background: linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.75) 100%);
    padding: 1rem;
    position: relative;
    top: 70px;
    width: 100%;
    @media screen and (min-width: 45rem){
        padding: 1.5rem;
        top:150px;
    }

  

`
export const VIdeoInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: .75;
    margin-bottom: 0.25rem;
    font-size: .75rem;

`
export const VideoYear = styled.div`

`
export const Dot = styled.div`
width: 3px;
    aspect-ratio: 1;
    background-color: ${DefStyles.MainColors.White};
    border-radius: 50%;
`
export const VideoCategory = styled.div`
    display: flex;
    align-items: center;
    gap: 0.375rem;

`
export const VideoRating = styled.div`

`
export const MovieName = styled.h3`
    font-size: .9375rem;
`





export const RecomendedSection = styled.section`
margin-top: 20px;
`
export const VideosTitle = styled.h2`
    font-size: 1.25rem;
    letter-spacing: -.3px;
    margin-bottom: 1.5rem;
`
export const VideosList = styled.ul`
    --column-count: 2;
    display: grid;
    grid-template-columns: repeat(var(--column-count),1fr);
    gap: 1rem;
    @media screen and (min-width: 75rem){
    --column-count: 4;
    row-gap: 2rem;
    column-gap: 2.5rem;
}
@media screen and (min-width: 45rem){
  --column-count: 3;
    row-gap: 1.5rem;
    column-gap: 1.875rem;
}
@media screen and (min-width: 100rem){
    --column-count: 5;
}

   


  

`
export const VideosItem = styled.li`


    

`

export const RecomendedVideo = styled.div`

`

export const VIdeoCard = styled.div`
position: relative;
    height: 110px;
    background-size: cover;
    background-position: center;
    border-radius: 0.5rem;
    margin-bottom: 0.5em;
    cursor: pointer;
    @media screen and (min-width: 45rem){
        height: 140px;
    }
    &:hover > ${PLayBtn} {
    display: flex;
  }
   

`

export const VideoInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.375rem;
    opacity: .75;
    margin-bottom: 0.25rem;
    font-size: .6875rem;

`


export const BookMarkedVideo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

`
