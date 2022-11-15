import uniqid from 'uniqid';

const filledInfo = [
    {
        name: 'First Name',
        text: 'Oleksandr'
      },

      {
        name: 'Last Name',
        text: 'Didyshen'
      },
      {
        name: 'Niche: Font-End Developer',
        text: 'Front-End Developer'
      },
      {
        name: 'Tell something about yourself to stand out from other candidates',
        text: `From the moment I produced the very first "Hello World" in the console, I knew I was hooked into the world of software development. But software development is not "just a job" for me, it's offered an engaging challenge to continually learn and improve my skills in creating high-quality software.  It  became a full-fledged passion that only gets more exciting with time. Below you'll find projects I've completed that showcase my skills and general background in developing software.`
      },
      {
        name: 'School',
        text: 'KHMELNYTSKYI NATIONAL UNIVERSITY'
      },
      {
        name: 'Degree',
        text: `Bachelor Degree: Germanic Philology and Translation Studies:
               English and Second Foreign Language`
      },
      {
        name: 'Address',
        text: 'Ukraine, Khmelnytskyi'
      },
      {
        name: 'E-Mail',
        text: 'didyshen.oleksandr@gmail.com'
      },
      {
        name: 'Phone number',
        text: '+380982732201'
      },
      {
        name: 'Link to portfolio',
        text: 'https://github.com/alex-dishen'
      }
];

const filledSkills = [
  {
    id: uniqid(),
    name: 'HTML'
  },
  {
    id: uniqid(),
    name: 'CSS'
  },
  {
    id: uniqid(),
    name: 'JavaScript'
  },
  {
    id: uniqid(),
    name: 'React'
  },
  {
    id: uniqid(),
    name: 'SASS'
  },
  {
    id: uniqid(),
    name: 'Git'
  },
];

const filledExperience = [
  {
    id: uniqid(),
    position: 'Senior Software Engineer',
    company: 'Dice',
    start: '2016',
    end: 'Present',
    dailyWork: 'I provided technical leadership for complex projects. I used the latest technologies such as Cloud Service, Visual Studio 2019 and Azure DevOps. I gained experience with data technologies such as SQL Servers, NoSQL databases, full text search engines and caching. My daily work consisted mostly of maintaining full project life-cycle tasks including testing, debugging, technical analysis, design and coding.',
  },
  {
    id: uniqid(),
    position: 'Software Engineer',
    company: 'Rose International',
    start: '2014',
    end: '2016',
    dailyWork: 'I worked on the company\'s software development plans including all aspects of the SDLC in collaboration with peer programmers. My daily workflow here consisted of performing error analysis, assisting with IT issues and building/accessing databases including NoSQL and Node.js. I, together with my team of peers, developed 25+ Java Applications in the time of my employment.',
  },
];

export { filledInfo, filledSkills, filledExperience };