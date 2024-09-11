// import logo from './Logo.png';
import './App.scss';
import  './styles.module.scss';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home  from "./Pages/Home.jsx"
import Navbar from "./components/Navbar/nav.jsx";
import AuthRootComponent from './components/auth';

function App() {
  return (
    <>
    <Navbar/>

   <Router>
   <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="login" element= {<AuthRootComponent/> } />
      <Route path="register" element= {<AuthRootComponent/> } />

      
    </Routes>
   </Router>
   
    </>

  );
}

export default App;
