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
        position: '',
        company: '',
        start: '',
        end: '',
        dailyWork: '',
      },

      experiences: [
        {
          id: uniqid(),
          position: '',
          company: '',
          start: '',
          end: '',
          dailyWork: '',
        },
      ],

      newSkill: {
        id: uniqid(),
        name: '',
      },

      skills: [
          {
              id: uniqid(),
              name: ''
          },
      ]
    }

    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
    this.addNewExperience = this.addNewExperience.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.addNewSkill = this.addNewSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  handleInfoChange(e) {
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

  handleExperienceChange(e) {
    const { name, value, id } = e.target;
    const newExperience = this.state.experiences.map(experience => {
      if(experience.id === id) {
        experience[name] = value;
        return experience;
      } else {
        return experience;
      }
    });

    this.setState({
      ...this.state, experiences: newExperience
    });
  }

  handleSkillsChange(e) {
    const newSkills = this.state.skills.map(skill => {
      if(skill.id === e.target.id) {
        skill.name = e.target.value;
        return skill;
      } else {
        return skill;
      }
    });

    this.setState({
      ...this.state, skills: newSkills
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
        name: '', 
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
              removeExperience={this.removeExperience}
              outputInputValue={this.handleExperienceChange}/>
          <Skills 
              skills={this.state.skills} 
              addNewSkill={this.addNewSkill}
              removeSkill={this.removeSkill}
              outputInputValue={this.handleSkillsChange}/>
          <Education 
              outputInputValue={this.handleInfoChange}/>
          <Contacts 
              outputInputValue={this.handleInfoChange}/>
        </div>
        <CVPreview 
            info={this.state.info}
            skills={this.state.skills}
            experiences={this.state.experiences}/>
      </>
    );
  }
}

export default App;