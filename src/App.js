import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';
import Toggle from './components/toggle/Toggle';

function App() {
  return (
    <div className="App">
      <Toggle/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  );
}

export default App;
