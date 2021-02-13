import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '.', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'chess.jpg',
    title: 'Research',
    info: '',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'joevideos.jpg',
    title: 'Videos',
    info: '',
    info2: '',
    url: '',

  },
  {
    id: nanoid(),
    img: 'blog2.jpg',
    title: 'Blog',
    info: '',
    info2: '',
    url: '',

  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCvWRKmcplBTYQS49AVGsLgw',
    },
    {
      id: nanoid(),
      name: 'wordpress',
      url: 'https://majestyofreason.wordpress.com/',
    },
    {
      id: nanoid(),
      name: 'facebook' ,
      url: 'https://www.facebook.com/joe.schmid.338658/',
    },
    ],
};


