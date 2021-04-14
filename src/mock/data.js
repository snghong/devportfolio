import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is ',
  name: 'Sng Hong',
  subtitle: "I'm a Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: "Hi there! I'm Sng Hong, a software developer from Singapore.",
  paragraphTwo:
    'My projects include: Game Development with C# and Unity, Web Development with React, and UI/UX for E-Commerce. My stack includes: C#, Python, HTML5, CSS3, JavaScript and React.',
  paragraphThree: "Carnegie Mellon University '25",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'novena image.PNG',
    title: 'Novena Furniture Singapore',
    info:
      'As the Front-End Developer for their E-Commerce website, I focused on Mobile Optimization, Responsive Design and building utility features for consumers.',
    info2: 'User Interface/Experience design with Shopify Liquid and SCSS.',
    url: 'https://www.novena.com.sg',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'E-Commerce Project with Nextjs',
    info: 'Fully functional E-Commerce site built with React, Nextjs and styled with Tailwind.',
    info2:
      'Uses Airtable for database management and a serverless lambda function for payment integration at checkout.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project sushi 1.png',
    title: 'Project Sushi',
    info:
      "In Project Sushi, you control a tiny human with a large craving for salmon sushi! Help him navigate various perils including the conveyor belt, onerous onigiri, monstrous maki, and even chopsticks from above whose owners think that he's a food item as well! ",
    info2: 'Light-hearted arcade game built with Unity 2D and C# scripting.',
    url: 'https://red-bean.itch.io/project-sushi',
    repo: 'https://github.com/snghong/project-sushi', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'HomeboundSS1.PNG',
    title: 'Homebound',
    info:
      'Aliens have invaded your homeland, leaving destruction in their wake. Make the perilous journey home, and restore peace to your beloved night sky.',
    info2: 'Intergalactic space chase built with Unity 3D, C# scripting, and animated using Unity.',
    url: 'https://red-bean.itch.io/homebound',
    repo: 'https://github.com/snghong/Homebound', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sng_hong@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/sng-hong',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/snghong',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
