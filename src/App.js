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
      info: [
        {
          name: 'First Name',
          text: ''
        },

        {
          name: 'Last Name',
          text: ''
        },
        {
          name: 'Niche: Font-End Developer',
          text: ''
        },
        {
          name: 'Tell something about yourself to stand out from other candidates',
          text: ''
        },
        {
          name: 'School',
          text: ''
        },
        {
          name: 'Degree',
          text: ''
        },
        {
          name: 'Address',
          text: ''
        },
        {
          name: 'E-Mail',
          text: ''
        },
        {
          name: 'Phone number',
          text: ''
        },
        {
          name: 'Link to portfolio',
          text: ''
        }
      ],

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

    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.addNewExperience = this.addNewExperience.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.addNewSkill = this.addNewSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  handleInfoChange(e) {
    console.log(e.target.value.length)
    const newInfo = this.state.info.map((information) => {
      if(information.name === e.target.placeholder) {
        information.text = e.target.value;
        return information;
      } else {
        return information;
      }
    });

    this.setState({
      ...this.state, info: newInfo,
    });
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
          <PersonalData 
              outputInputValue={this.handleInfoChange}/>
          <Experience 
              experiences={this.state.experiences}
              addNewExperience={this.addNewExperience}
              removeExperience={this.removeExperience}/>
          <Skills 
              skills={this.state.skills} 
              addNewSkill={this.addNewSkill}
              removeSkill={this.removeSkill}/>
          <Education 
              outputInputValue={this.handleInfoChange}/>
          <Contacts 
              outputInputValue={this.handleInfoChange}/>
        </div>
        <CVPreview 
            info={this.state.info}/>
      </>
    );
  }
}

export default App;