import React from 'react';
import Education from './components/Education';
import Header from './components/Header';
import PersonalData from './components/PersonalData';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import CVPreview from './components/Preview/CVPreview';
import uniqid from 'uniqid'
import './styles/App.css'
import './styles/normalize.css';
import './styles/cv_form.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newSkill: {
        id: uniqid(),
        skill: '',
      },

      skills: [
          {
              id: uniqid(),
              skill: ''
          }
      ]
    }

    this.addNewSkill = this.addNewSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }
  
  
  addNewSkill() {
    this.setState({
      skills: this.state.skills.concat(this.state.newSkill),

      newSkill: {
        skill: '', 
        id: uniqid()
      },
    });
  }

  removeSkill(index) {
    const list = [...this.state.skills];
    list.splice(index, 1);

    this.setState({
      skills: list
    });
  }

  render() {
    return (
      <>
        <div className='cvForm'>
          <Header />
          <PersonalData />
          <Experience />
          <Skills 
              skills={this.state.skills} 
              addNewSkill={this.addNewSkill}
              removeSkill={this.removeSkill}/>
          <Education />
          <Contacts />
        </div>
        <CVPreview />
      </>
    );
  }
}

export default App;
