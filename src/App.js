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
      newExperience: {
        id: uniqid(),
      },

      experiences: [
        {
          id: uniqid(),
        },
      ],

      newSkill: {
        id: uniqid(),
        skill: '',
      },

      skills: [
          {
              id: uniqid(),
              skill: ''
          },
      ]
    }

    this.addNewExperience = this.addNewExperience.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.addNewSkill = this.addNewSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  addNewExperience() {
    this.setState({
      experiences: this.state.experiences.concat(this.state.newExperience),

      newExperience: {
        id: uniqid()
      }
    });
  }

  removeExperience(index) {
    const list = [...this.state.experiences];
    list.splice(index, 1);

    this.setState({
      experiences: list
    });
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
          <Experience 
              experiences={this.state.experiences}
              addNewExperience={this.addNewExperience}
              removeExperience={this.removeExperience}/>
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