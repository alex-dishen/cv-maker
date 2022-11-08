import Education from './components/Education';
import Header from './components/Header';
import PersonalData from './components/PersonalData';
import Experience from './components/Experience';
import CV from './components/Preview/CV';
import './styles/App.css';
import './styles/normalize.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalData />
      <Education />
      <Experience />
      <CV />
    </div>
  );
}

export default App;
