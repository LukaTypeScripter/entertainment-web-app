import React, { useState } from 'react'
import { ImgPRimary, Imgs, Links, MovieAppMain, Nav, NavBarPRimary,AvatarIMg, Main, SearchBar, SearchInput, SearchLogo, TrendingSection, TrandingTItle, TrandingVideos, TrendingVideo, VIdeo, VideoBookMark, PLayBtn, VideoCOntent, VIdeoInfo, VideoYear, Dot, VideoCategory, VideoRating, MovieName } from './styles/homeStyles'
import Logo from '../../assets/logo.svg'
import home from '../../assets/icon-nav-home.svg'
import movies from '../../assets/icon-category-movie.svg'
import series from '../../assets/icon-nav-tv-series.svg'
import bookmark from '../../assets/icon-nav-bookmark.svg'
import Avatar from '../../assets/image-avatar.png'
import Search from '../../assets/icon-search.svg'
import data from '../../data'
function Home() {
  const [trendingMovies ,setTrendingMovies ] = useState(data)
  return (
    <MovieAppMain>
      {/**navigation */}
      <Nav>
          <Links to="/">
          <Imgs src={Logo}/>
          </Links>
          <NavBarPRimary>
          <Links to="/">
          <ImgPRimary src={home}/>
          </Links>
          <Links to="/">
          <ImgPRimary src={movies}/>
          </Links>
          <Links to="/">
          <ImgPRimary src={series}/>
          </Links>
          <Links to="/">
          <ImgPRimary src={bookmark}/>
          </Links>
          </NavBarPRimary>
          <Links to="/">
          <AvatarIMg src={Avatar}/>
          </Links>
      </Nav>
      {/**main */}
      <Main>
        {/**searxch bar */}
        <SearchBar>
        <SearchLogo  src={Search}/>
        <SearchInput type='text' placeholder='Search for movies or TV series' />
        </SearchBar>
        {/**tranding  section*/}
        <TrendingSection>
          <TrandingTItle>Trending</TrandingTItle>
          <TrandingVideos>
  {trendingMovies.map((movie) => (
    <TrendingVideo key={movie.title}>
      {movie.thumbnail?.trending && (
        <VIdeo  style={{ backgroundImage: `url(${movie.thumbnail.trending.small})` }}>
          <VideoBookMark
           
          >
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                stroke="#FFF"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </VideoBookMark>
          <PLayBtn>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg>
          play
          </PLayBtn>
          <VideoCOntent>
            <VIdeoInfo>
              <VideoYear>{movie.year}</VideoYear>
              <Dot></Dot>
              <VideoCategory>
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/></svg>
              </VideoCategory>
              <Dot></Dot>
              <VideoRating>{movie.rating}</VideoRating>
            </VIdeoInfo>
            <MovieName>{movie.title}</MovieName>
          </VideoCOntent>
        </VIdeo>
      )}
    </TrendingVideo>
  ))}
</TrandingVideos>
            {/* <TrendingVideo>
              <VIdeo>
                <VideoBookMark>
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>
                </VideoBookMark>
              </VIdeo>
            </TrendingVideo> */}
       
        </TrendingSection>
      </Main>
    </MovieAppMain>
  )
}

export default Home