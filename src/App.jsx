// App.js
import SpaceBackground from './Components/Space/Space';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer'
// ... other imports

function App() {
  return (
    <div className="App">
      <SpaceBackground />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;