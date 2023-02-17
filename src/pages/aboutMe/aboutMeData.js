import vocces from '../../assets/images/vocces.png'
import assembler from '../../assets/images/assembler.png'
import stulz from '../../assets/images/stulz.png'
import tecnesis from '../../assets/images/tecnesis.png'

const dataAboutMe = [
  {
    company: 'Vocces Lab',
    jobTitle: 'Full stack web developer',
    jobDescription: 'Full-stack developing projects',
    duration: 'June 2022 - at present',
    img: vocces,
    projects: [
      {
        projetcTitle: 'Cleint Dashboard',
        technologies: 'VueJs, NodeJs,  Pinia, SQL, Sass',
      },
      {
        projetcTitle: 'Cleint Survey',
        technologies: 'ReactJs, NodeJs,  Redux-toolkit, SQL, Sass',
      },
    ],
  },
  {
    company: 'Assembler Institute',
    jobTitle: 'Full stack web developer',
    jobDescription: 'Full-stack developing projects',
    duration: 'September 2021 - May 2022',
    img: assembler,
    projects: [
      {
        projetcTitle: 'Clon Spotify',
        technologies: 'ReactJs, Redux-toolkit, NodeJs, Express, Mongoose, Mongo, Sass',
      },
      {
        projetcTitle: 'real estate portal',
        technologies: 'ReactJs, NodeJs,  Redux-toolkit, SQL, Sass',
      },
    ],
  },
  {
    company: 'Stulz Tecnivel S.L,',
    jobTitle: 'Technichal engineer',
    jobDescription: 'Design and development of air handling units as team leader',
    duration: 'April 2018 - September 2021',
    img: stulz,
    projects: [
      // {
      //   projetcTitle: 'Cleint Dashboard',
      //   technologies: 'VueJs, NodeJs,  Pinia, SQL, Sass',
      // },
      // {
      //   projetcTitle: 'Cleint Survey',
      //   technologies: 'ReactJs, NodeJs,  Redux-toolkit, SQL, Sass',
      // },
    ],
  },
  {
    company: 'Tecnesis 3000',
    jobTitle: 'Technichal engineer',
    jobDescription: 'Product design phase control manager',
    duration: 'February 2017 - April 2018',
    img: tecnesis,
    projects: [
      // {
      //   projetcTitle: 'Cleint Dashboard',
      //   technologies: 'VueJs, NodeJs,  Pinia, SQL, Sass',
      // },
      // {
      //   projetcTitle: 'Cleint Survey',
      //   technologies: 'ReactJs, NodeJs,  Redux-toolkit, SQL, Sass',
      // },
    ],
  },
]

export default dataAboutMe
