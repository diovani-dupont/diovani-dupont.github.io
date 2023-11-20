module.exports = {
  siteTitle: 'Diovani Dupont',
  siteDescription:
    'Diovani Dupont is a Systems Developer and Data Scientist in Brazil, passionate about transforming complex challenges into innovative technological solutions and sharing knowledge in the field of data science.',
  siteKeywords:
    'Diovani Dupont, Systems Analyst, Backend Developer, Python Developer, Java, SQL, Big Data, Machine Learning, University Estácio de Sá, Data Science, Data Analysis, Business Intelligence, IT Projects, Brazil',
  siteUrl: 'https://diovanidupont.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Diovani Dupont',
  location: 'Porto Alegre, Brazil',
  email: 'diovani@dewesdupont.com.br',
  github: 'https://github.com/diovani-dupont',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/diovani-dupont',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/diovani-dupont/',
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/diodupont',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/diovani.dupont/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/diovani_dupont',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
