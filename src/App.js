import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginEmple from './Pages/Home/LoginEmple';
import LoginBoss from './Pages/Home/LoginBoss';
import HomeEmpleyees from './Pages/Routes/HomeEmpleyees'
import Home from './Pages/Home/Home';

const App = () => {

  const logged = false;

  return (
    <Router>
      {
        !logged ? (
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/loginemple" element={<LoginEmple/>}/>
            <Route path="/loginboss" element={<LoginBoss/>}/>
          </Routes>
          ) : (
          <Routes>
            <Route path="/homeempleyees" element={<HomeEmpleyees/>}/>
          </Routes>
        )
      }
    </Router>
  )
}

export default App
