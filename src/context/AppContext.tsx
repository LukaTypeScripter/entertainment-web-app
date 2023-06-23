import React, { createContext, useState } from "react";
import data from "../data";

interface Movie {
    title: string;
    thumbnail: {
      trending?: {
        small: string;
        large: string;
      };
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  }

  interface AppContextValue {
    trendingMovies: Movie[] | undefined;
    setTrendingMovies: React.Dispatch<React.SetStateAction<Movie[] | undefined>>;
    toggleBookmark: (index: number) => void;
  }
  
  const initialContextValue: AppContextValue = {
    trendingMovies: [],
    setTrendingMovies: () => {},
    toggleBookmark: () => {},
  };


  const AppContext = createContext<AppContextValue>(initialContextValue);


  export const AppContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [trendingMovies ,setTrendingMovies ] = useState<Movie[] | undefined>(data)
    const toggleBookmark = (index: number) => {
        setTrendingMovies((prevMovies) => {
          const updatedMovies = prevMovies ? [...prevMovies] : [];
          if (updatedMovies[index]) {
            updatedMovies[index].isBookmarked = !updatedMovies[index].isBookmarked;
            console.log(updatedMovies[index].isBookmarked)
          }
          
          return updatedMovies;
        });
      };
    
  
    
    const value: AppContextValue = {
        trendingMovies,
        setTrendingMovies,
        toggleBookmark
    };
    // Provide the context value to the children components
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  };
  
  export default AppContext;