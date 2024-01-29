import logo from './logo.svg';
import './App.css';
import { MyNavbar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
