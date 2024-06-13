import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <Services/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
