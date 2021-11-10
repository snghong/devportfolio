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
  name: 'Hong',
  subtitle: "I'm a Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: "Hi there! I'm Hong Sng, a software developer.",
  paragraphTwo:
    'My projects include: AI and Deep Learning with Tensorflow and Detectron, Game Development with C# and Unity, Web Development with React, Ruby on Rails and UI/UX for E-Commerce. My stack includes: Python, HTML5, CSS3, JavaScript, React and Ruby on Rails, C# and C.',
  paragraphThree: "Carnegie Mellon University '25",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'novocall.PNG',
    title: 'Novocall Singapore',
    info:
      'Build features for integrated chat platform using HTML, React in frontend and Ruby on Rails (postgresql) for backend. Used APIs like Whatsapp and Telegram and JavaScript libraries like jQuery, AJAX and Axios. ',
    info2: 'Experience with Agile Scrum methodologies.',
    url: 'https://novocall.co/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'novena image.PNG',
    title: 'Novena Furniture Singapore',
    info:
      'As the Front-End Developer for their E-Commerce website, I focused on Mobile Optimization, Responsive Design and building utility features for consumers.',
    info2: 'User Interface/Experience design with Shopify Liquid and SCSS.',
    url: 'https://www.novena.com.sg/',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'homebox demo.PNG',
    title: 'E-Commerce Project with Nextjs',
    info: 'Fully functional E-Commerce site built with React, Nextjs and styled with Tailwind.',
    info2:
      'Uses Airtable for database management and a serverless lambda function for payment integration at checkout.',
    url: 'https://homebox-psi.vercel.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'detection.png',
    title: 'AI Litter Detection Heatmap',
    info:
      'Retrained Detectron2’s region-based convolutional neural network model to identify litter using the TACO dataset.',
    info2:
      ' Fed model bus camera footage and visualized Pittsburgh litter density on a heatmap with Google Maps’ JavaScript API.',
    url: null,
    repo: 'https://github.com/snghong/heatmap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ASL.jpeg',
    title: 'ASL to Speech Conversion',
    info:
      'Trained Tensorflow’s deep learning model to identify American Sign Language (ASL) through a webcam (openCV) ',
    info2: 'and output speech in a language of choice with Google Text-to-Speech (Gtts)',
    url: null,
    repo: 'https://github.com/snghong/asltospeech', // if no repo, the button will not show up
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
    repo: 'https://github.com/snghong/homebound3D', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rails.PNG',
    title: 'Ruby on Rails twitter clone',
    info:
      'Twitter app built from the rails tutorial by M.Hartl. Learnt about MVC, testing, associations in a relational database, and more.',
    info2: 'Login with email:example@railstutorial.org and password:foobar to have a look around!',
    url: 'https://enigmatic-wave-46036.herokuapp.com/',
    repo: 'https://github.com/snghong/sample_app', // if no repo, the button will not show up
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
