
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import SignIn from './scenes/SignIn/SignIn';
import SignUp from './scenes/signUp/SignUp';
import Home from './scenes/Home/Home';
import Movies from './scenes/movies/Movies';
import Navigation from './scenes/Home/Navigation/Navigation';
import TvSeries from './scenes/Tvseries/TvSeries';
import BookMarked from './Bookmarked/BookMarked';
import { MovieAppMain } from './scenes/Home/styles/homeStyles';


function App() {
 

  return (
    <MovieAppMain>

<Router>
<Navigation/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<TvSeries />} />
        <Route path="/bookmarked" element={<BookMarked />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </MovieAppMain>
  )
}

export default App
