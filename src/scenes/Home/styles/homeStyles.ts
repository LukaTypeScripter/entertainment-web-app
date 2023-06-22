
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DefStyles } from "../../../DefaultStyles";

export const MovieAppMain = styled.div`


`
export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 56px;
padding-inline: 1rem;
background-color:${DefStyles.MainColors.SemiDarkBlue};

`
export const Links = styled(Link)`
    outline: none;
    transition: transform .2s;
`
export const Imgs = styled.img`
width: 25px;
display: block;
`
export const ImgPRimary = styled.img`
width: 16px;
display: block;
`
export const AvatarIMg = styled.img`
width: 100%;
width: 24px;
`

export const NavBarPRimary = styled.div`
    display: flex;
    gap: 1.5rem;
`
export const Main = styled.nav`
padding: 1.5rem 1rem 4rem;
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
`
export const TrendingVideo = styled.li`
flex: 0 0 15rem;
height: 8.75rem;
border-radius:0.5rem 0.5rem 0 0;
overflow: hidden;
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
position: relative;
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
    top: 55px;
    width: 100%;
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

