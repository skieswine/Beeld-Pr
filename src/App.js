// import logo from './Logo.png';
import './App.scss';
import  './styles.module.scss';
import Navbar from './components/Navbar/nav';
import Footer from './components/Footer/footer';
import Promo from './components/PromoBlock/promo';
import Teamb from './components/TeamBuildBlock/teamb';

function App() {
  return (
    <>
    
    <Navbar/>
    <Promo/>
    <Teamb/>
    <Footer/>
    </>

  );
}

export default App;
