import React, { useState } from 'react'
import { Nav, Links, Imgs, NavBarPRimary, ImgPRimary, AvatarIMg, MovieAppMain } from '../styles/homeStyles'
import Logo from '../../../assets/logo.svg'
import home from '../../../assets/icon-nav-home.svg'
import movies from '../../../assets/icon-category-movie.svg'
import series from '../../../assets/icon-nav-tv-series.svg'
import bookmark from '../../../assets/icon-nav-bookmark.svg'
import Avatar from '../../../assets/image-avatar.png'
function Navigation() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path:any) => {
    setActiveLink(path);
  };
  return (
 
    <Nav>
    <Links to="/" isActive={false} onClick={() => handleLinkClick('/')}>
      <Imgs src={Logo} />
    </Links>
    <NavBarPRimary>
      <Links to="/" isActive={activeLink === '/'} onClick={() => handleLinkClick('/')}>
        <ImgPRimary src={home} />
      </Links>
      <Links to="/movies" isActive={activeLink === '/movies'} onClick={() => handleLinkClick('/movies')}>
        <ImgPRimary src={movies} />
      </Links>
      <Links to="/series" isActive={activeLink === '/series'} onClick={() => handleLinkClick('/series')}>
        <ImgPRimary src={series} />
      </Links>
      <Links to="/bookmarked" isActive={activeLink === '/bookmarked'} onClick={() => handleLinkClick('/bookmarked')}>
        <ImgPRimary src={bookmark} />
      </Links>
    </NavBarPRimary>
    <Links to="/" isActive={false}>
      <AvatarIMg src={Avatar} />
    </Links>
  </Nav>

  )
}

export default Navigation