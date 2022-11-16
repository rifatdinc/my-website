import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar";
import Banner  from "./components/Banner";
import { Skills } from "./components/Skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Navbar />
      <Banner />

      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
