import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Grace Culhane | Writer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Grace Culhane | ',
  name: 'Writer',
  subtitle: 'Copywriting, Journalism, Editing',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'LA based content writer investigative journalist',
  paragraphTwo: 'Badass',
  paragraphThree: 'Super',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'story1.jpg',
    title: 'Investigative Reporting',
    info: '',
    info2: '',
    url: 'https://www.vice.com/en/article/dyv8jv/an-oregon-woman-says-a-police-officer-raped-her-she-was-the-one-arrested',
    citation: 'Illustration by Cathryn Virginia',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    citation: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    citation: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Email me!',
  btn: '',
  email: 'gracec.cul@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/graceculhane',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/grace-culhane-72483898/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
