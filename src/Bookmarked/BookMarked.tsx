import React, { useContext, useState } from 'react'
import Search from '../assets/icon-search.svg'
import data from '../data';
import { Main, SearchBar, SearchLogo, SearchInput, RecomendedSection, VideosTitle, VideosList, VideosItem, RecomendedVideo, VIdeoCard, VideoBookMark, PLayBtn, VideoInfo, VideoYear, Dot, VideoCategory, VideoRating, MovieName, BookMarkedVideo } from '../scenes/Home/styles/homeStyles';
import BookMarkedSeries from '../bookmarkedSeries/BookMarkedSeries';
import AppContext from '../context/AppContext';

function BookMarked() {
    const { setTrendingMovies,trendingMovies,toggleBookmark} = useContext(AppContext)
    const [searchQuery, setSearchQuery] = useState('');
 
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
      const filteredMovies = data.filter((movie) =>
        movie.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setTrendingMovies(filteredMovies);
    };
  if(trendingMovies === undefined) {
    return <div>..loading</div>
  }
  return (
   <Main>
   <SearchBar>
        <SearchLogo  src={Search}/>
        <SearchInput type='text' placeholder='Search for movies or TV series' value={searchQuery} onChange={handleSearch} />
        </SearchBar>
        <BookMarkedVideo>
   <RecomendedSection>
    {searchQuery.length === 0 ? (<VideosTitle>Bookmarked Movies</VideosTitle> ):
         <VideosTitle>found {trendingMovies.length} for {searchQuery}</VideosTitle>
    }
         
          <VideosList>
            {trendingMovies .filter((movie) => movie.isBookmarked).map((movie,index) => (
              <>
              {movie.category === 'TV Series'&& (
                <VideosItem key={movie.title}>
                <RecomendedVideo>
                  <VIdeoCard style={{ backgroundImage: `url(${movie.thumbnail.regular.small})` }}>
                  {movie.isBookmarked ? (
                     <VideoBookMark onClick={() => toggleBookmark(index)}>
  <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF"/></svg>
  </VideoBookMark>
) : (
  // JSX for non-bookmarked movie
  <>
    <VideoBookMark onClick={() => toggleBookmark(index)}>
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF"/>
      </svg>
    </VideoBookMark>
  </>
)}
                    <PLayBtn>
                      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                          fill="#FFF"
                        />
                      </svg>
                      <h2>play</h2>
                      
                    </PLayBtn>
                  </VIdeoCard>
                  <VideoInfo>
                    <VideoYear>{movie.year}</VideoYear>
                    <Dot />
                    <VideoCategory>
                      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                          fill="#FFF"
                          opacity=".75"
                        />
                      </svg>
                    </VideoCategory>
                    <Dot />
                    <VideoRating>{movie.rating}</VideoRating>
                  </VideoInfo>
                  <MovieName>{movie.title}</MovieName>
                </RecomendedVideo>
              </VideosItem>
              )}
               
              </>
             
            ))}
          </VideosList>
          <RecomendedSection>
          {searchQuery.length === 0 && (<VideosTitle>Bookmarked Tv series</VideosTitle> )}
         
    
         
          <VideosList>
            {trendingMovies.filter((movie) => movie.isBookmarked).map((movie,index) => (
              <>
              
          
            <BookMarkedSeries index={index} title={movie.title} year={movie.year} rating={movie.rating} toggleBookmark={toggleBookmark} key={index}/>
            
            
               
              </>
             
            ))}
          </VideosList>
        </RecomendedSection>
        </RecomendedSection>
        
        </BookMarkedVideo>
   </Main>
  )
}

export default BookMarked