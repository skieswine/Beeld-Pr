import './App.scss';
import  './styles.module.scss';
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes , useLocation} from 'react-router-dom';
import Home  from "./Pages/Home.jsx"
import Navbar from "./components/Navbar/nav.jsx";
import AuthRootComponent from './components/auth';
import Crews from './Pages/Crews';

function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const location = useLocation();

  // Використовуємо useEffect для відстеження змін URL
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setNavbarVisible(false); // Приховуємо навбар на сторінках логіну та реєстрації
    } else {
      setNavbarVisible(true); // Показуємо навбар на всіх інших сторінках
    }
  }, [location]);
  return (
    <>
     {isNavbarVisible && <Navbar />} {/* Навбар відображається тільки якщо isNavbarVisible true */}

   
   <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="login" element= {<AuthRootComponent/> } />
      <Route path="register" element= {<AuthRootComponent/> } />
      <Route path="crews" element= {<Crews/>}/>
      
    </Routes>
   
   
    </>

  );
}

export default App;
