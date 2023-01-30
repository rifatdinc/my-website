import Banner from "./components/Banner";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Banner />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
