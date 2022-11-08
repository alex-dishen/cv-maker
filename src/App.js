import Education from './components/Education';
import Header from './components/Header';
import PersonalData from './components/PersonalData';
import Experience from './components/Experience';
import './styles/App.css';
import './styles/normalize.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalData />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
