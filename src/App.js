import Education from './components/Education';
import Header from './components/Header';
import PersonalData from './components/PersonalData';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CVPreview from './components/Preview/CVPreview';
import './styles/App.css'
import './styles/normalize.css';
import './styles/cv_form.css'

function App() {
  return (
    <>
      <div className='cvForm'>
        <Header />
        <PersonalData />
        <Experience />
        <Skills />
        <Education />
      </div>
      {/* <CVPreview /> */}
    </>
  );
}

export default App;
