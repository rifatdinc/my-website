import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Footer from './components/Footer';


function App() {

  return (
      <BrowserRouter>
        <Header
          title="Rıfat Dinç's Blog"
          menuItems={['Home', 'Blog', 'About']} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
