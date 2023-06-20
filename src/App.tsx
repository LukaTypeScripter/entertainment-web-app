import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './scenes/SignIn/SignIn';
import SignUp from './scenes/signUp/SignUp';
import Home from './scenes/Home/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <Router>
    <Routes>
    {/**routes go here */}
    <Route index element={<Home />} />
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default App
